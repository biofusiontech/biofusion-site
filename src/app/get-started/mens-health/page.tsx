"use client";

import IntakeShell, {
  Field,
  TextInput,
  NumberInput,
  ChoicePills,
  ChoiceList,
  Step,
} from "@/components/IntakeShell";

const steps: Step[] = [
  {
    key: "start",
    label: "Goals",
    title: "Built for men who expect more.",
    subtitle:
      "Doctor-guided care for hormones, performance, and recovery. Tell us what you want to optimize.",
    heroImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=506&fit=crop",
    render: (data, update) => (
      <>
        <Field label="What do you want to focus on?">
          <ChoiceList
            multi
            value={data.focus}
            onChange={(v) => update("focus", v)}
            options={[
              { label: "Sexual performance & libido", value: "performance" },
              { label: "Energy & stamina", value: "energy" },
              { label: "Muscle & strength", value: "muscle" },
              { label: "Hormone balance / TRT", value: "hormones" },
              { label: "Weight loss", value: "weight" },
              { label: "Hair restoration", value: "hair" },
            ]}
          />
        </Field>

        <Field label="Your age">
          <NumberInput
            value={data.age}
            onChange={(v) => update("age", v)}
            placeholder="35"
            suffix="years"
          />
        </Field>

        <Field label="How would you describe your energy lately?">
          <ChoiceList
            value={data.energy}
            onChange={(v) => update("energy", v)}
            options={[
              { label: "Strong — I feel great", value: "strong" },
              { label: "Average — could be better", value: "average" },
              { label: "Low — frequently tired", value: "low" },
              { label: "Very low — exhausted most days", value: "very-low" },
            ]}
          />
        </Field>
      </>
    ),
    validate: (d) => {
      if (!d.focus || (Array.isArray(d.focus) && d.focus.length === 0))
        return "Please select at least one focus area.";
      if (!d.age) return "Please enter your age.";
      if (!d.energy) return "Please rate your energy level.";
      return null;
    },
  },
  {
    key: "details",
    label: "Health",
    title: "A few medical details",
    subtitle:
      "We use this to make sure any prescribed plan is safe and effective for you.",
    render: (data, update) => (
      <>
        <Field label="Have you had bloodwork in the last 12 months?">
          <ChoicePills
            value={data.bloodwork}
            onChange={(v) => update("bloodwork", v)}
            options={[
              { label: "Yes — I have results", value: "yes" },
              { label: "Yes — but no copy", value: "yes-no-copy" },
              { label: "No / not sure", value: "no" },
            ]}
            cols={3}
          />
        </Field>

        <Field label="Do any of these apply to you?">
          <ChoiceList
            multi
            value={data.conditions}
            onChange={(v) => update("conditions", v)}
            options={[
              { label: "High blood pressure", value: "hbp" },
              { label: "Diabetes / prediabetes", value: "diabetes" },
              { label: "Heart condition", value: "heart" },
              { label: "Prostate issues", value: "prostate" },
              { label: "None of the above", value: "none" },
            ]}
          />
        </Field>

        <Field label="Are you currently taking testosterone or any hormone therapy?">
          <ChoicePills
            value={data.onTRT}
            onChange={(v) => update("onTRT", v)}
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
              { label: "In the past", value: "past" },
            ]}
            cols={3}
          />
        </Field>
      </>
    ),
    validate: (d) => {
      if (!d.bloodwork) return "Please answer about bloodwork.";
      if (!d.onTRT) return "Please answer about hormone therapy.";
      return null;
    },
  },
  {
    key: "contact",
    label: "Get qualified",
    title: "Where should we send your results?",
    subtitle:
      "A licensed provider will review your answers and reach out within 24 hours with a personalized recommendation.",
    render: (data, update) => (
      <>
        <div className="grid grid-cols-2 gap-3">
          <Field label="First name">
            <TextInput
              value={data.firstName}
              onChange={(v) => update("firstName", v)}
              placeholder="John"
            />
          </Field>
          <Field label="Last name">
            <TextInput
              value={data.lastName}
              onChange={(v) => update("lastName", v)}
              placeholder="Smith"
            />
          </Field>
        </div>
        <Field label="Email">
          <TextInput
            type="email"
            value={data.email}
            onChange={(v) => update("email", v)}
            placeholder="john@example.com"
          />
        </Field>
        <Field label="Phone">
          <TextInput
            type="tel"
            value={data.phone}
            onChange={(v) => update("phone", v)}
            placeholder="(555) 555-5555"
          />
        </Field>
        <Field label="State">
          <TextInput
            value={data.state}
            onChange={(v) => update("state", v)}
            placeholder="TX"
          />
        </Field>
        <p className="text-[11px] text-ink-mute2 leading-relaxed">
          By submitting, you agree to our Terms & Privacy Policy and consent to
          telehealth services. Prescription decisions are made solely by the
          treating licensed provider.
        </p>
      </>
    ),
    validate: (d) => {
      if (!d.firstName || !d.lastName) return "Please enter your full name.";
      if (!d.email || !d.email.includes("@")) return "Please enter a valid email.";
      if (!d.phone || d.phone.length < 10) return "Please enter a valid phone number.";
      if (!d.state) return "Please enter your state.";
      return null;
    },
  },
];

export default function MensHealthIntake() {
  return (
    <IntakeShell
      programId="mens-health"
      programLabel="Men's Health"
      steps={steps}
      ctaFinalLabel="Get my qualification →"
      brandColor="#0F3A5F"
    />
  );
}
