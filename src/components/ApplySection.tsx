"use client";

import { useState, FormEvent } from "react";
import Tag from "./Tag";

export default function ApplySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return (
    <section
      id="apply"
      style={{ background: "var(--green)", color: "var(--wool)" }}
    >
      <div
        className="apply-grid"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "78px 24px",
          display: "grid",
          gridTemplateColumns: ".85fr 1.15fr",
          gap: 56,
        }}
      >
        {/* Left copy */}
        <div>
          <Tag label="Open a trade account" light />
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 500,
              lineHeight: 1.05,
              fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
              color: "#fff",
              marginTop: 16,
            }}
          >
            Send one form. Get the full price list.
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              color: "var(--rose-soft)",
              maxWidth: "34ch",
              marginTop: 14,
            }}
          >
            Trade pricing isn&apos;t listed publicly. Apply below and we&apos;ll send
            your full wholesale catalogue within two working days.
          </p>
          <ul
            style={{
              listStyle: "none",
              marginTop: 26,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              "50% off every retail price",
              "€150 minimum first order, no minimum reorder",
              "Ready-to-ship stock on core ranges",
              "A named contact, not a chatbot",
            ].map((item) => (
              <li
                key={item}
                style={{ display: "flex", gap: ".7rem", color: "var(--wool)", fontSize: ".98rem" }}
              >
                <span
                  style={{
                    minWidth: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--rose-soft)",
                    marginTop: ".55rem",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div>
          <div
            style={{
              background: "var(--wool)",
              borderRadius: 18,
              padding: 32,
              color: "var(--ink)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    color: "var(--green)",
                    fontSize: "1.5rem",
                    marginBottom: 10,
                  }}
                >
                  Application received.
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  Thanks. We&apos;ll review and send your full trade price list within
                  two working days, to the email you gave us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="frow" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field id="shop" label="Shop name" required />
                  <Field id="name" label="Your name" required />
                  <Field id="email" label="Email" type="email" required />
                  <Field id="phone" label="Phone" type="tel" required />
                  <Field id="town" label="Town / county" required />
                  <Field id="website" label="Shop website" type="url" placeholder="https://" optional />
                </div>
                <div style={{ marginBottom: 16, marginTop: 0 }}>
                  <label style={{ display: "block", fontSize: ".82rem", fontWeight: 500, marginBottom: 6 }}>
                    Which ranges interest you?{" "}
                    <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    placeholder="e.g. keepsake dolls and baby gift sets for the Christmas season"
                    style={{
                      width: "100%",
                      padding: ".72rem .85rem",
                      border: "1px solid var(--line)",
                      borderRadius: 10,
                      background: "#fff",
                      fontFamily: "inherit",
                      fontSize: ".95rem",
                      color: "var(--ink)",
                      resize: "vertical",
                      minHeight: 84,
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "var(--green)",
                    color: "var(--wool)",
                    border: 0,
                    padding: ".95rem",
                    borderRadius: 999,
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    marginTop: 6,
                    transition: "background .2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--green-soft)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--green)")}
                >
                  Send application
                </button>
                <p
                  style={{
                    fontSize: ".78rem",
                    color: "var(--muted)",
                    marginTop: 14,
                    textAlign: "center",
                  }}
                >
                  We&apos;ll never list your trade prices publicly. No spam, just your catalogue and a contact.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apply-grid { grid-template-columns: 1fr !important; gap: 34px !important; }
        }
        @media (max-width: 560px) {
          .frow { grid-template-columns: 1fr !important; }
        }
        input, select, textarea {
          transition: border .2s, box-shadow .2s;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--green) !important;
          box-shadow: 0 0 0 3px rgba(46,68,53,.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  optional,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div style={{ marginBottom: 0 }}>
      <label
        htmlFor={id}
        style={{ display: "block", fontSize: ".82rem", fontWeight: 500, marginBottom: 6 }}
      >
        {label}{" "}
        {optional && (
          <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          padding: ".72rem .85rem",
          border: "1px solid var(--line)",
          borderRadius: 10,
          background: "#fff",
          fontFamily: "inherit",
          fontSize: ".95rem",
          color: "var(--ink)",
        }}
      />
    </div>
  );
}
