"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    backgroundColor: "#161616",
    border: "1px solid rgba(224,223,219,0.2)",
    color: "#F5F4F0",
    borderRadius: "6px",
    padding: "12px 16px",
    width: "100%",
    fontFamily: "Inter Tight, system-ui, sans-serif",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="font-sans text-xs uppercase tracking-widest mb-2 block"
          style={{ color: "#888883" }}
        >
          Namn
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Ert namn"
          style={inputStyle}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "rgba(126,235,192,0.5)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(224,223,219,0.2)")
          }
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-sans text-xs uppercase tracking-widest mb-2 block"
          style={{ color: "#888883" }}
        >
          E-post
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="er@email.se"
          style={inputStyle}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "rgba(126,235,192,0.5)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(224,223,219,0.2)")
          }
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-sans text-xs uppercase tracking-widest mb-2 block"
          style={{ color: "#888883" }}
        >
          Beskriv er utmaning
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Vad vill ni uppnå? Vilken data har ni? Var sitter smärtpunkten?"
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "rgba(126,235,192,0.5)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(224,223,219,0.2)")
          }
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-sans text-sm font-medium px-8 py-4 rounded transition-colors w-full disabled:opacity-60"
        style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
      >
        {status === "loading" ? "Skickar..." : "Skicka meddelande"}
      </button>

      {status === "success" && (
        <p
          className="font-sans text-sm"
          style={{ color: "#7EEBC0" }}
        >
          Tack! Vi svarar inom en arbetsdag.
        </p>
      )}
      {status === "error" && (
        <p
          className="font-sans text-sm"
          style={{ color: "#E85D04" }}
        >
          Något gick fel. Skicka gärna ett e-postmeddelande direkt till team@availsthlm.se.
        </p>
      )}
    </form>
  );
}
