"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.92)",
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
        <Image
          src="https://thecrochetdolls.com/cdn/shop/files/thecrochetdolls-logo_transparent.png?v=1762355191&width=3840"
          alt="The Crochet Dolls"
          width={160}
          height={48}
          style={{ objectFit: "contain", objectPosition: "left" }}
          priority
        />
        <a
          href="#apply"
          style={{
            background: "var(--logo-green)",
            color: "#fff",
            textDecoration: "none",
            padding: ".62rem 1.15rem",
            borderRadius: 999,
            fontSize: ".9rem",
            fontWeight: 500,
            transition: "background .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--logo-green-dark)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--logo-green)")}
        >
          Open a trade account
        </a>
      </div>
    </header>
  );
}
