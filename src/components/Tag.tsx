interface TagProps {
  label: string;
  light?: boolean;
}

export default function Tag({ label, light = false }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: ".55rem",
        background: light ? "transparent" : "var(--wool)",
        border: `1px solid ${light ? "rgba(246,241,231,.3)" : "var(--line)"}`,
        padding: ".4rem .85rem .4rem .65rem",
        borderRadius: 999,
        position: "relative",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 9,
          height: 9,
          borderRadius: "50%",
          border: `1.5px solid ${light ? "var(--rose-soft)" : "var(--rose)"}`,
          background: light ? "transparent" : "var(--wool)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono), monospace",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          fontSize: ".72rem",
          color: light ? "var(--rose-soft)" : "var(--muted)",
        }}
      >
        {label}
      </span>
    </span>
  );
}
