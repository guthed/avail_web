import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProcessStep from "@/components/storyblok/ProcessStep";
import { fetchStory } from "@/lib/storyblok";

export const metadata: Metadata = generatePageMetadata({
  title: "Hur vi jobbar",
  description:
    "Fyra tydliga faser: Identifiering, Datainsamling, AI-fas och Analys. Prototyp på 4 dagar. Leverans utan jargong.",
  path: "/hur-vi-jobbar",
});

export default async function HurViJobbarPage() {
  const story = await fetchStory("hur-vi-jobbar");
  const c = story?.content ?? {};

  const steps: Array<{
    _uid: string;
    nummer: string;
    titel: string;
    beskrivning: string;
  }> = c.steps ?? [];

  const principles: Array<{ _uid: string; titel: string; text: string }> =
    c.principles ?? [];

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Hur Avail STHLM arbetar med AI-projekt",
    description: "Fyra tydliga faser från identifiering till leverans. Prototyp på 4 dagar.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      name: s.titel,
      text: s.beskrivning,
      position: i + 1,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {/* Intro */}
      <section className="section-padding container-x pt-40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-6"
              style={{ color: "#888883" }}
            >
              Process
            </p>
            <h1
              className="font-serif mb-8"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
              }}
            >
              {c.heading}{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                {c.heading_italic}
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              {c.subheading}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-padding container-x">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={step._uid}>
                <ProcessStep
                  nummer={step.nummer}
                  titel={step.titel}
                  beskrivning={step.beskrivning}
                />
                {i < steps.length - 1 && (
                  <div
                    className="mt-16 ml-16 h-px"
                    style={{ backgroundColor: "rgba(224,223,219,0.1)" }}
                  />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <h2
              className="font-serif"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: 1.2,
              }}
            >
              {c.principles_heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div
                key={p._uid}
                className="border rounded-lg p-8"
                style={{
                  backgroundColor: "#161616",
                  borderColor: "rgba(224,223,219,0.15)",
                }}
              >
                <h3 className="font-serif text-xl mb-3" style={{ color: "#F5F4F0" }}>
                  {p.titel}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#888883" }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Tempo proof */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="border rounded-lg p-12"
              style={{
                backgroundColor: "#161616",
                borderColor: "rgba(126,235,192,0.2)",
              }}
            >
              <p
                className="font-serif mb-4"
                style={{
                  color: "#7EEBC0",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontStyle: "italic",
                }}
              >
                {c.tempo_number}
              </p>
              <p
                className="font-sans text-lg max-w-xl leading-relaxed"
                style={{ color: "rgba(245,244,240,0.7)" }}
              >
                {c.tempo_text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-xl">
            <h2
              className="font-serif mb-6"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.2,
              }}
            >
              {c.cta_heading}
            </h2>
            <a
              href="/kontakt"
              className="font-sans text-sm font-medium px-8 py-4 rounded inline-block transition-colors"
              style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            >
              Kontakta oss
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
