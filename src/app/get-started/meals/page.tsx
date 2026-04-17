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
    label: "Plan",
    title: "Chef-prepared meals built around your goals",
    subtitle:
      "Pick your plan and we'll deliver fresh, macro-balanced meals to your door each week.",
    heroImage:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=506&fit=crop",
    render: (data, update) => (
      <>
        <Field label="What's your goal?">
          <ChoiceList
            value={data.goal}
            onChange={(v) => update("goal", v)}
            options={[
              { label: "Lose fat (paired with GLP-1)", value: "fat-loss-glp" },
              { label: "Lose weight (no medication)", value: "fat-loss" },
              { label: "Build muscle / recomp", value: "muscle" },
              { label: "Maintain & save time", value: "maintain" },
            ]}
          />
        </Field>

        <Field label="How many meals per week?">
          <ChoicePills
            value={data.mealsPerWeek}
            onChange={(v) => update("mealsPerWeek", v)}
            options={[
              { label: "5 meals", value: "5", description: "$95/wk" },
              { label: "7 meals", value: "7", description: "$129/wk" },
              { label: "10 meals", value: "10", description: "$179/wk" },
              { label: "14 meals", value: "14", description: "$239/wk" },
            ]}
            cols={4}
          />
        </Field>

        <Field label="Daily calorie target">
          <ChoicePills
            value={data.calories}
            onChange={(v) => update("calories", v)}
            options={[
              { label: "1,200–1,500", value: "low" },
              { label: "1,500–1,800", value: "mid" },
              { label: "1,800–2,200", value: "high" },
              { label: "2,200+", value: "very-high" },
            ]}
            cols={4}
          />
        </Field>
      </>
    ),
    validate: (d) => {
      if (!d.goal) return "Please pick your goal.";
      if (!d.mealsPerWeek) return "Please choose a meal count.";
      if (!d.calories) return "Please pick a calorie target.";
      return null;
    },
  },
  {
    key: "preferences",
    label: "Preferences",
    title: "Any dietary preferences?",
    subtitle:
      "Our chefs will rotate your weekly menu around what works for you.",
    render: (data, update) => (
      <>
        <Field label="Dietary style">
          <ChoiceList
            multi
            value={data.diet}
            onChange={(v) => update("diet", v)}
            options={[
              { label: "Standard / no restrictions", value: "standard" },
              { label: "High-protein", value: "high-protein" },
              { label: "Low-carb / keto", value: "low-carb" },
              { label: "Vegetarian", value: "veg" },
              { label: "Pescatarian", value: "pesc" },
            ]}
          />
        </Field>

        <Field label="Any allergies or foods to avoid?">
          <ChoiceList
            multi
            value={data.allergies}
            onChange={(v) => update("allergies", v)}
            options={[
              { label: "Dairy", value: "dairy" },
              { label: "Gluten", value: "gluten" },
              { label: "Peanuts / tree nuts", value: "nuts" },
              { label: "Shellfish", value: "shellfish" },
              { label: "Soy", value: "soy" },
              { label: "None", value: "none" },
            ]}
          />
        </Field>

        <Field label="Delivery ZIP code">
          <TextInput
            value={data.zip}
            onChange={(v) => update("zip", v)}
            placeholder="77002"
          />
        </Field>
      </>
    ),
    validate: (d) => {
      if (!d.zip || d.zip.length < 5) return "Please enter a valid ZIP code.";
      return null;
    },
  },
  {
    key: "contact",
    label: "Confirm",
    title: "Where should we send your meals?",
    subtitle:
      "We'll confirm availability in your zip and send you your menu within 24 hours.",
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
        <p className="text-[11px] text-ink-mute2 leading-relaxed">
          You won't be charged today. We'll send a confirmation with your menu
          and pricing once we verify delivery in your area.
        </p>
      </>
    ),
    validate: (d) => {
      if (!d.firstName || !d.lastName) return "Please enter your full name.";
      if (!d.email || !d.email.includes("@")) return "Please enter a valid email.";
      if (!d.phone || d.phone.length < 10) return "Please enter a valid phone number.";
      return null;
    },
  },
];

export default function MealsIntake() {
  return (
    <IntakeShell
      programId="meals"
      programLabel="BioFusion Meals"
      steps={steps}
      ctaFinalLabel="Reserve my menu →"
      brandColor="#C49560"
    />
  );
}
