import { NextResponse } from "next/server";

interface LeadPayload {
  program: "weight-loss" | "mens-health" | "meals";
  programLabel: string;
  answers: Record<string, any>;
  timestamp: string;
  url?: string;
  referrer?: string;
}

const CLOSE_API_KEY = process.env.CLOSE_API_KEY || "";
const CLOSE_BASE = "https://api.close.com/api/v1";

function basicAuth() {
  return "Basic " + Buffer.from(CLOSE_API_KEY + ":").toString("base64");
}

async function createCloseLead(payload: LeadPayload) {
  if (!CLOSE_API_KEY) {
    console.warn("[leads/submit] CLOSE_API_KEY not set — skipping CRM push.");
    return { skipped: true };
  }

  const a = payload.answers;
  const fullName = `${a.firstName || ""} ${a.lastName || ""}`.trim() || "New Lead";

  // Build a description that captures everything the form collected
  const summary = Object.entries(a)
    .filter(([k]) => !["firstName", "lastName", "email", "phone"].includes(k))
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");

  const body = {
    name: `${fullName} — ${payload.programLabel}`,
    description: `Program: ${payload.programLabel}\nSubmitted: ${payload.timestamp}\nURL: ${payload.url}\nReferrer: ${payload.referrer}\n\n${summary}`,
    contacts: [
      {
        name: fullName,
        emails: a.email ? [{ type: "office", email: a.email }] : [],
        phones: a.phone ? [{ type: "mobile", phone: a.phone }] : [],
      },
    ],
    addresses: a.state
      ? [
          {
            label: "office",
            state: a.state,
            country: "US",
            zipcode: a.zip || "",
          },
        ]
      : [],
  };

  const res = await fetch(`${CLOSE_BASE}/lead/`, {
    method: "POST",
    headers: {
      Authorization: basicAuth(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error("[leads/submit] Close API error:", res.status, txt);
    throw new Error(`Close API ${res.status}`);
  }

  return await res.json();
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as LeadPayload;

    if (!payload.program || !payload.answers) {
      return NextResponse.json(
        { error: "Missing program or answers" },
        { status: 400 }
      );
    }

    // Always log the lead so it's never lost (visible in Vercel logs)
    console.log(
      "[leads/submit]",
      JSON.stringify({
        program: payload.program,
        name: `${payload.answers.firstName} ${payload.answers.lastName}`,
        email: payload.answers.email,
        phone: payload.answers.phone,
        ts: payload.timestamp,
      })
    );

    let crmResult: any = { skipped: true };
    try {
      crmResult = await createCloseLead(payload);
    } catch (e) {
      // Don't fail the user submission if CRM push fails — we have the log.
      console.error("[leads/submit] CRM push failed:", e);
    }

    return NextResponse.json({
      success: true,
      leadId: crmResult?.id || null,
      crmStatus: crmResult?.skipped ? "no-crm-key" : crmResult?.id ? "synced" : "logged",
    });
  } catch (e) {
    console.error("[leads/submit] error:", e);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
