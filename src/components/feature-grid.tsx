const features = [
  {
    title: "Automatic extraction",
    body: "No review step. Vault categorizes and extracts fields instantly, then writes to your Sheet.",
  },
  {
    title: "Your data stays in Google",
    body: "Originals in Drive. Structured index in Sheets. Nothing trapped in a proprietary database.",
  },
  {
    title: "Cross-device by default",
    body: "Sign in anywhere with Google and your Vault shows up instantly.",
  },
  {
    title: "Smart categorization",
    body: "Passports, insurance cards, bank statements, account screenshots—auto-labeled and sorted.",
  },
  {
    title: "Proof of life",
    body: "If you don’t check in or don’t respond to a ping, access can be granted to designated people.",
  },
  {
    title: "Audit trail you can trust",
    body: "Every saved record has a Drive file ID and timestamps. Easy to trace and share.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <div key={f.title} className="space-y-2">
          <div className="text-sm font-semibold tracking-tight text-[#0B0D10]">
            {f.title}
          </div>
          <div className="text-sm leading-6 text-[rgba(11,13,16,.62)]">
            {f.body}
          </div>
        </div>
      ))}
    </div>
  );
}
