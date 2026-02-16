const features = [
  {
    title: "Your data stays in Google",
    body: "Originals in Drive. Structured index in Sheets. Nothing trapped in a proprietary database.",
  },
  {
    title: "Fast extraction with review",
    body: "OCR + LLM pulls fields with confidence so you can approve in seconds.",
  },
  {
    title: "Cross-device by default",
    body: "Sign in anywhere with Google and your Vault shows up instantly.",
  },
  {
    title: "Designed for real documents",
    body: "Passports, insurance cards, bank statements, account screenshots—mixed formats welcome.",
  },
  {
    title: "Audit trail you can trust",
    body: "Every saved record has a Drive file ID and timestamps. Easy to trace and share.",
  },
  {
    title: "Build once, integrate later",
    body: "Start with Sheets. Add alerts, sharing, workflows, or a richer index when you need it.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/7"
        >
          <div className="text-sm font-semibold tracking-tight">{f.title}</div>
          <div className="mt-2 text-sm leading-6 text-white/65">{f.body}</div>
        </div>
      ))}
    </div>
  );
}
