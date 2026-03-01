"use client";

interface ServiceCardProps {
  blok?: {
    titel?: string;
    teknisk_term?: string;
    grupp?: string;
    problem?: string;
    losning?: string;
    output?: string;
    exempel_1?: string;
    exempel_2?: string;
  };
  titel?: string;
  teknisk_term?: string;
  grupp?: string;
  problem?: string;
  losning?: string;
  output?: string;
  exempel_1?: string;
  exempel_2?: string;
}

export default function ServiceCard({
  blok,
  titel,
  teknisk_term,
  problem,
  losning,
  output,
  exempel_1,
  exempel_2,
}: ServiceCardProps) {
  const t = blok?.titel ?? titel;
  const term = blok?.teknisk_term ?? teknisk_term;
  const prob = blok?.problem ?? problem;
  const sol = blok?.losning ?? losning;
  const out = blok?.output ?? output;
  const ex1 = blok?.exempel_1 ?? exempel_1;
  const ex2 = blok?.exempel_2 ?? exempel_2;

  return (
    <article
      className="border rounded-lg p-8 transition-all duration-300"
      style={{
        backgroundColor: "#161616",
        borderColor: "rgba(224,223,219,0.15)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(184,169,232,0.08)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#161616")
      }
    >
      <div className="mb-6">
        <h3 className="font-serif text-2xl mb-1" style={{ color: "#F5F4F0" }}>
          {t}
        </h3>
        {term && (
          <p className="font-sans text-sm" style={{ color: "#888883" }}>
            {term}
          </p>
        )}
      </div>
      {prob && (
        <div className="mb-4">
          <p
            className="font-sans text-xs uppercase tracking-widest mb-2"
            style={{ color: "#888883" }}
          >
            Problem
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "rgba(245,244,240,0.7)" }}
          >
            {prob}
          </p>
        </div>
      )}
      {sol && (
        <div className="mb-4">
          <p
            className="font-sans text-xs uppercase tracking-widest mb-2"
            style={{ color: "#888883" }}
          >
            Lösning
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "rgba(245,244,240,0.7)" }}
          >
            {sol}
          </p>
        </div>
      )}
      {out && (
        <div className="mb-4">
          <p
            className="font-sans text-xs uppercase tracking-widest mb-2"
            style={{ color: "#888883" }}
          >
            Output
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "#7EEBC0" }}
          >
            {out}
          </p>
        </div>
      )}
      {(ex1 || ex2) && (
        <div
          className="mt-6 pt-6 border-t"
          style={{ borderColor: "rgba(224,223,219,0.1)" }}
        >
          <p
            className="font-sans text-xs uppercase tracking-widest mb-3"
            style={{ color: "#888883" }}
          >
            Exempel
          </p>
          <ul className="space-y-2">
            {ex1 && (
              <li
                className="font-sans text-sm"
                style={{ color: "rgba(245,244,240,0.6)" }}
              >
                → {ex1}
              </li>
            )}
            {ex2 && (
              <li
                className="font-sans text-sm"
                style={{ color: "rgba(245,244,240,0.6)" }}
              >
                → {ex2}
              </li>
            )}
          </ul>
        </div>
      )}
    </article>
  );
}
