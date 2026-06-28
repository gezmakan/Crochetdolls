import Tag from "./Tag";

const steps = [
  {
    idx: "01",
    title: "Apply",
    body: "Tell us about your shop. We approve trade accounts within two working days and send the full trade price list.",
  },
  {
    idx: "02",
    title: "Order from stock",
    body: "Pick your mix from ready-to-ship inventory. Hit the €150 minimum and we pack it. No long lead times on core ranges.",
  },
  {
    idx: "03",
    title: "Reorder in a tap",
    body: "Once you're set up, restocking is a single email. Bestsellers sell through fast, especially around the seasons.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "78px 0", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: "60ch", marginBottom: 46 }}>
          <Tag label="How trade works" />
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 500,
              lineHeight: 1.05,
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              marginTop: 16,
            }}
          >
            Three steps to a stocked shelf.
          </h2>
        </div>

        <div
          className="steps-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {steps.map((s) => (
            <div
              key={s.idx}
              style={{
                background: "var(--wool-deep)",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: 30,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: ".8rem",
                  color: "var(--rose)",
                  border: "1px solid var(--rose-soft)",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                {s.idx}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                  marginBottom: 8,
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: ".96rem" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
