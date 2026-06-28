"use client";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(246,241,231,.86)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "1.18rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--green)",
          }}
        >
          The Crochet Dolls <span style={{ color: "var(--rose)" }}>·</span> Trade
        </div>
        <a
          href="#apply"
          style={{
            background: "var(--green)",
            color: "var(--wool)",
            textDecoration: "none",
            padding: ".62rem 1.15rem",
            borderRadius: 999,
            fontSize: ".9rem",
            fontWeight: 500,
            transition: "background .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--green-soft)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--green)")}
        >
          Open a trade account
        </a>
      </div>
    </header>
  );
}
