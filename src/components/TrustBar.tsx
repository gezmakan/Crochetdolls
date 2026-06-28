const items = [
  "Handmade in Dublin",
  "Consistent, repeatable quality",
  "Low €150 minimum order",
  "Restock from ready stock",
];

export default function TrustBar() {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--line)",
        background: "var(--wool-deep)",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "22px 24px",
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{ display: "flex", alignItems: "center", gap: ".6rem", fontSize: ".92rem" }}
          >
            <span style={{ color: "var(--rose)", fontWeight: 600 }}>✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
