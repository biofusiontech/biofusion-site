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
    title: "Reach your goal weight without restrictive diets or exercise",
    subtitle:
      "Answer a few quick questions so we can match you with the right GLP-1 program.",
    heroImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=506&fit=crop",
    render: (data, update) => (
      <>
        <Field label="What's your primary goal?">
          <ChoiceList
            value={data.goal}
            onChange={(v) => update("goal", v)}
            options={[
              { label: "Lose 10–25 lbs", value: "10-25" },
              { label: "Lose 25–50 lbs", value: "25-50" },
              { label: "Lose 50–100 lbs", value: "50-100" },
              { label: "Maintain weight loss", value: "maintain" },
            ]}
          />
        </Field>

        <Field label="Your height">
          <div className="grid grid-cols-2 gap-3">
            <NumberInput
              value={data.heightFt}
              onChange={(v) => update("heightFt", v)}
              placeholder="5"
              suffix="ft"
            />
            <NumberInput
              value={data.heightIn}
              onChange={(v) => update("heightIn", v)}
              placeholder="8"
              suffix="in"
            />
          </div>
        </Field>

        <Field label="Current weight">
          <NumberInput
            value={data.weight}
            onChange={(v) => update("weight", v)}
            placeholder="200"
            suffix="lbs"
          />
        </Field>

        <Field label="Goal weight">
          <NumberInput
            value={data.goalWeight}
            onChange={(v) => update("goalWeight", v)}
            placeholder="160"
            suffix="lbs"
          />
        </Field>

        <Field label="Date of birth" helper="You must be 18 or older.">
          <TextInput
            type="date"
            value={data.dob}
            onChange={(v) => update("dob", v)}
          />
        </Field>
      </>
    ),
    validate: (d) => {
      if (!d.goal) return "Please select your goal.";
      if (!d.heightFt || !d.weight || !d.goalWeight) return "Please fill in all height and weight fields.";
      if (!d.dob) return "Please enter your date of birth.";
      return null;
    },
  },
  {
    key: "details",
    label: "Health",
    title: "Tell us a bit about your health",
    subtitle:
      "This helps our licensed providers create a safe, personalized plan for you.",
    render: (data, update) => (
      <>
        <Field label="Have you tried weight loss medication before?">
          <ChoicePills
            value={data.priorMed}
            onChange={(v) => update("priorMed", v)}
            options={[
              { label: "Yes — GLP-1 (Ozempic, Wegovy, etc.)", value: "yes-glp1" },
              { label: "Yes — other medication", value: "yes-other" },
              { label: "No, never", value: "no" },
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
              { label: "Type 2 diabetes / prediabetes", value: "diabetes" },
              { label: "PCOS", value: "pcos" },
              { label: "Thyroid issues", value: "thyroid" },
              { label: "None of the above", value: "none" },
            ]}
          />
        </Field>

        <Field label="Are you currently pregnant or breastfeeding?">
          <ChoicePills
            value={data.pregnancy}
            onChange={(v) => update("pregnancy", v)}
            options={[
              { label: "No", value: "no" },
              { label: "Yes", value: "yes" },
              { label: "N/A", value: "na" },
            ]}
            cols={3}
          />
        </Field>

        <Field label="Which medication are you most interested in?">
          <ChoiceList
            value={data.preferredMed}
            onChange={(v) => update("preferredMed", v)}
            options={[
              { label: "Tirzepatide (Mounjaro / Zepbound class)", value: "tirzepatide" },
              { label: "Semaglutide (Ozempic / Wegovy class)", value: "semaglutide" },
              { label: "Not sure — recommend the best fit", value: "recommend" },
            ]}
          />
        </Field>
      </>
    ),
    validate: (d) => {
      if (!d.priorMed) return "Please answer about prior medications.";
      if (!d.pregnancy) return "Please answer the pregnancy question.";
      if (!d.preferredMed) return "Please select a medication preference.";
      return null;
    },
  },
  {
    key: "contact",
    label: "Get qualified",
    title: "Where should we send your results?",
    subtitle:
      "A licensed provider will review your answers within 24 hours and reach out with your personalized plan.",
    render: (data, update) => (
      <>
        <div className="grid grid-cols-2 gap-3">
          <Field label="First name">
            <TextInput
              value={data.firstName}
              onChange={(v) => update("firstName", v)}
              placeholder="Jane"
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
            placeholder="jane@example.com"
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
        <Field label="State of residence">
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

export default function WeightLossIntake() {
  return (
    <IntakeShell
      programId="weight-loss"
      programLabel="GLP-1 Weight Loss"
      steps={steps}
      ctaFinalLabel="Get my qualification →"
      brandColor="#3FA572"
    />
  );
}
