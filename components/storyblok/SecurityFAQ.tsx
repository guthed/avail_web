"use client";

import { useState } from "react";

interface SecurityFAQProps {
  blok?: {
    fraga?: string;
    svar?: string;
  };
  fraga?: string;
  svar?: string;
}

export default function SecurityFAQ({ blok, fraga, svar }: SecurityFAQProps) {
  const [open, setOpen] = useState(false);
  const q = blok?.fraga ?? fraga;
  const a = blok?.svar ?? svar;

  return (
    <div
      className="border-b py-6"
      style={{ borderColor: "rgba(224,223,219,0.15)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-sans text-base font-medium" style={{ color: "#F5F4F0" }}>
          {q}
        </span>
        <span
          className="text-xl font-light shrink-0"
          style={{ color: "#7EEBC0" }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          className="font-sans text-sm leading-relaxed mt-4 pr-8"
          style={{ color: "#888883" }}
        >
          {a}
        </p>
      )}
    </div>
  );
}
