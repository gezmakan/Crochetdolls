import Tag from "./Tag";

export default function MarginSection() {
  return (
    <section
      id="margin"
      style={{ padding: "78px 0", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: "60ch", marginBottom: 46 }}>
          <Tag label="The numbers" />
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 500,
              lineHeight: 1.05,
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              marginTop: 16,
            }}
          >
            Buy at half. Sell at full. That&apos;s keystone.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.08rem", marginTop: 14 }}>
            Every product on our retail site drops by 50% for trade. Here&apos;s a
            best-selling Cuddly Bunny, the way it lands in your till.
          </p>
        </div>

        <div
          className="margin-box"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            border: "1px solid var(--line)",
            borderRadius: 18,
            overflow: "hidden",
            background: "var(--wool-deep)",
          }}
        >
          {/* Numbers panel */}
          <div style={{ padding: 42, background: "var(--green)", color: "var(--wool)" }}>
            {[
              { label: "Retail price (what shoppers pay)", value: "€60" },
              { label: "Your trade cost", value: "€30" },
              { label: "Profit per unit", value: "€30", total: true },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "16px 0",
                  borderBottom: row.total ? "none" : "1px solid rgba(246,241,231,.18)",
                }}
              >
                <span style={{ color: "var(--rose-soft)", fontSize: ".95rem" }}>
                  {row.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: row.total ? "2.1rem" : "1.5rem",
                    color: row.total ? "#fff" : undefined,
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Note panel */}
          <div
            style={{
              padding: 42,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontWeight: 500,
                fontSize: "1.6rem",
                marginBottom: 12,
              }}
            >
              A clean 100% mark-up
            </h3>
            <p style={{ color: "var(--muted)" }}>
              Price it at our retail figure and you make{" "}
              <span style={{ color: "var(--green)", fontWeight: 600 }}>
                €30 on a €30 cost
              </span>
              . Sell 10 bunnies from a single shelf and that&apos;s €300 back. No
              consignment, no fine print, no minimum reorder.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .margin-box { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
