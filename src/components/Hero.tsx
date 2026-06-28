import Image from "next/image";
import Tag from "./Tag";

export default function Hero() {
  return (
    <section
      style={{
        padding: "84px 0 64px",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: 56,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          <Tag label="Wholesale · Made in Dublin" />
          <h1
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              fontSize: "clamp(2.6rem, 5.2vw, 4.1rem)",
              marginTop: 22,
              color: "var(--logo-green)",
            }}
          >
            Stock crochet that{" "}
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>
              sells itself
            </em>{" "}
            off the shelf.
          </h1>
          <p
            style={{
              fontSize: "1.18rem",
              color: "var(--muted)",
              maxWidth: "30ch",
              margin: "22px 0 30px",
            }}
          >
            Hand-finished dolls, teddies and baby gifts at 50% off retail.
            Keystone margin, ready to ship, €150 to start.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#apply" className="btn-primary">
              Open a trade account
            </a>
            <a href="#margin" className="btn-ghost">
              See the margin
            </a>
          </div>

          {/* Stat strip */}
          <div style={{ display: "flex", gap: 30, marginTop: 38, flexWrap: "wrap" }}>
            {[
              { n: "50%", l: "off every retail price" },
              { n: "€150", l: "minimum first order" },
              { n: "Ready", l: "to ship from stock" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.9rem",
                    color: "var(--logo-green)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div style={{ fontSize: ".82rem", color: "var(--muted)", marginTop: 4 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — collage */}
        <div
          style={{
            position: "relative",
            aspectRatio: "1/1",
            borderRadius: 18,
            overflow: "hidden",
            background: "var(--wool-deep)",
            border: "1px solid var(--line)",
          }}
        >
          <Image
            src="https://thecrochetdolls.com/cdn/shop/collections/keepsake-doll-gift-for-christmas-handmade-crochet-15.jpg?v=1769863821&width=1100"
            alt="Handmade crochet keepsake dolls"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 16,
              background: "var(--wool)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: ".55rem .8rem",
              display: "flex",
              alignItems: "center",
              gap: ".6rem",
              boxShadow: "0 10px 24px -14px rgba(0,0,0,.4)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--rose)",
                flexShrink: 0,
              }}
            />
            <div>
              <b style={{ fontSize: ".86rem" }}>Handmade, not mass-made</b>
              <small
                style={{
                  display: "block",
                  color: "var(--muted)",
                  fontSize: ".72rem",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              >
                Stitched in Ireland
              </small>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        .btn-primary {
          text-decoration: none;
          font-weight: 500;
          border-radius: 999px;
          padding: .82rem 1.5rem;
          font-size: .98rem;
          display: inline-block;
          background: var(--logo-green);
          color: #fff;
          box-shadow: 0 8px 20px -10px rgba(122,179,136,.5);
          transition: background .2s, transform .15s;
        }
        .btn-primary:hover { background: var(--logo-green-dark); transform: translateY(-1px); }
        .btn-ghost {
          text-decoration: none;
          font-weight: 500;
          border-radius: 999px;
          padding: .82rem 1.5rem;
          font-size: .98rem;
          display: inline-block;
          border: 1px solid var(--line);
          color: var(--ink);
          transition: background .2s;
        }
        .btn-ghost:hover { background: var(--wool-deep); }
      `}</style>
    </section>
  );
}
