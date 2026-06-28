import Tag from "./Tag";

const cards = [
  {
    tag: "Quality you can trust",
    title: "Genuinely handmade in Ireland",
    body: "Not imported, not factory-finished. Every piece is crocheted in Dublin to the same spec, so the tenth bunny matches the first. Your customers can feel the difference, and you can stand over it.",
  },
  {
    tag: "Low risk",
    title: "Test small, scale what works",
    body: "A €150 minimum means you can trial a range without overcommitting. Reorder the winners, leave the rest. No consignment, no locked-in volumes.",
  },
  {
    tag: "Always in season",
    title: "A line for every occasion",
    body: "Christmas, Easter, Valentine's, new baby, St Patrick's. There's always a reason for a shopper to pick one up, and a reason for you to restock.",
  },
  {
    tag: 'A real local story',
    title: '"Made in Ireland" that\'s actually true',
    body: "Irish shoppers pay for provenance. Stocking a genuine Dublin maker gives your shelf a story your customers want to buy into and gift on.",
  },
];

export default function WhyUs() {
  return (
    <section style={{ padding: "78px 0", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: "60ch", marginBottom: 46 }}>
          <Tag label="Why shops choose us" />
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 500,
              lineHeight: 1.05,
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              marginTop: 16,
            }}
          >
            Made by hand, supplied like a partner.
          </h2>
        </div>

        <div
          className="why-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
        >
          {cards.map((c) => (
            <div
              key={c.tag}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: 28,
                background: "var(--wool-deep)",
              }}
            >
              <div style={{ marginBottom: 14 }}>
                <Tag label={c.tag} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                  marginBottom: 8,
                }}
              >
                {c.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: ".97rem" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
