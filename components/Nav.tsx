"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/case", label: "Case" },
  { href: "/hur-vi-jobbar", label: "Hur vi jobbar" },
  { href: "/sakerhet", label: "Säkerhet" },
  { href: "/om-avail", label: "Om Avail" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div
        className="container-x flex items-center justify-between h-16"
        style={{ backgroundColor: "rgba(17,17,17,0.92)", backdropFilter: "blur(12px)" }}
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-tight transition-colors"
          style={{ color: "#F5F4F0" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#B8A9E8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F4F0")}
        >
          Avail
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm transition-colors"
              style={{ color: "#888883" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F4F0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888883")}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="font-sans text-sm font-medium px-4 py-2 rounded transition-colors"
            style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5dd4aa")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7EEBC0")}
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "#F5F4F0" }}
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className="block h-px transition-all"
              style={{
                backgroundColor: "#F5F4F0",
                transform: open ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block h-px transition-all"
              style={{
                backgroundColor: "#F5F4F0",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all"
              style={{
                backgroundColor: "#F5F4F0",
                transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "#111111", borderColor: "rgba(224,223,219,0.1)" }}
        >
          <nav className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base transition-colors"
                style={{ color: "#F5F4F0" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="font-sans text-sm font-medium px-4 py-2 rounded transition-colors w-fit mt-2"
              style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
