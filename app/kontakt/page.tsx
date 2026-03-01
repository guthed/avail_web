import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Kontakt",
  description:
    "Berätta om er utmaning. Vi svarar inom en arbetsdag med ett konkret förslag.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      {/* Intro */}
      <section className="section-padding container-x pt-40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-6"
              style={{ color: "#888883" }}
            >
              Kontakt
            </p>
            <h1
              className="font-serif mb-8"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
              }}
            >
              Berätta om er{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                utmaning.
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              Vi svarar inom en arbetsdag med ett konkret förslag – inte en standardpitch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-10">
                <div>
                  <p
                    className="font-sans text-xs uppercase tracking-widest mb-4"
                    style={{ color: "#888883" }}
                  >
                    E-post
                  </p>
                  <a
                    href="mailto:team@availsthlm.se"
                    className="font-sans text-lg transition-colors"
                    style={{ color: "#7EEBC0" }}
                  >
                    team@availsthlm.se
                  </a>
                </div>
                <div>
                  <p
                    className="font-sans text-xs uppercase tracking-widest mb-4"
                    style={{ color: "#888883" }}
                  >
                    Plats
                  </p>
                  <p className="font-sans text-base" style={{ color: "#F5F4F0" }}>
                    Stockholm, Sverige
                  </p>
                  <p className="font-sans text-sm mt-1" style={{ color: "#888883" }}>
                    Vi arbetar med kunder i hela Norden och tar digitala möten.
                  </p>
                </div>
                <div>
                  <p
                    className="font-sans text-xs uppercase tracking-widest mb-4"
                    style={{ color: "#888883" }}
                  >
                    Svarstid
                  </p>
                  <p className="font-sans text-base" style={{ color: "#F5F4F0" }}>
                    Inom en arbetsdag.
                  </p>
                </div>
                <div
                  className="border rounded-lg p-6"
                  style={{
                    borderColor: "rgba(184,169,232,0.2)",
                    backgroundColor: "rgba(184,169,232,0.05)",
                  }}
                >
                  <p
                    className="font-serif text-base italic mb-3"
                    style={{ color: "#B8A9E8" }}
                  >
                    Inte redo att skicka ett meddelande?
                  </p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#888883" }}>
                    Boka ett 20-minuterssamtal direkt i vår kalender. Vi lyssnar, ger en opartisk bedömning och föreslår ett nästa steg – utan förpliktelse.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
