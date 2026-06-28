import Image from "next/image";
import Tag from "./Tag";

const products = [
  {
    title: "Keepsake Dolls",
    retail: "€65",
    trade: "€32.50",
    img: "https://thecrochetdolls.com/cdn/shop/collections/keepsake-doll-gift-for-christmas-handmade-crochet-15.jpg?v=1769863821&width=500",
    alt: "Keepsake dolls",
  },
  {
    title: "Cuddly Teddies",
    retail: "€60",
    trade: "€30",
    img: "https://thecrochetdolls.com/cdn/shop/collections/crochet-bunny-easter-gift-10.jpg?v=1780227501&width=500",
    alt: "Cuddly teddies",
  },
  {
    title: "Baby Gift Sets",
    retail: "€40",
    trade: "€20",
    img: "https://thecrochetdolls.com/cdn/shop/collections/fox-rattle-baby-gift-box-1_6bffa667-aa15-4c89-97dc-f912c578fa3e.png?v=1773404482&width=500",
    alt: "Baby gift sets",
  },
  {
    title: "Accessories",
    retail: "€15",
    trade: "€7.50",
    img: "https://thecrochetdolls.com/cdn/shop/files/avocado-keyring-giftforher-1.jpg?v=1762184391&width=500",
    alt: "Accessories and keyrings",
  },
];

export default function RangeSection() {
  return (
    <section style={{ padding: "78px 0", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: "60ch", marginBottom: 46 }}>
          <Tag label="What you can stock" />
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 500,
              lineHeight: 1.05,
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              marginTop: 16,
            }}
          >
            Five ranges that move at the counter.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.08rem", marginTop: 14 }}>
            Keepsake dolls, cuddly teddies, baby gift sets, accessories and seasonal
            lines. Retail prices shown, your cost is half.
          </p>
        </div>

        <div
          className="range-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}
        >
          {products.map((p) => (
            <div
              key={p.title}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 14,
                overflow: "hidden",
                background: "var(--wool-deep)",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "1/1", background: "var(--wool)" }}>
                <Image src={p.img} alt={p.alt} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 16 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                  }}
                >
                  {p.title}
                </h3>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: ".82rem",
                    color: "var(--muted)",
                    marginTop: 6,
                  }}
                >
                  Retail {p.retail} ·{" "}
                  <b style={{ color: "var(--green)" }}>Trade {p.trade}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .range-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .range-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
