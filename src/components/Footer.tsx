export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 0",
        textAlign: "center",
        color: "var(--muted)",
        fontSize: ".88rem",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        The Crochet Dolls · 21B Dodsborough Cottages, Dublin ·{" "}
        <a href="mailto:info@thecrochetdolls.com" style={{ color: "var(--logo-green)" }}>
          info@thecrochetdolls.com
        </a>{" "}
        · 00353&nbsp;831118541
      </div>
    </footer>
  );
}
