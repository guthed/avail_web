import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SecurityFAQ from "@/components/storyblok/SecurityFAQ";
import { fetchStory } from "@/lib/storyblok";

export const metadata: Metadata = generatePageMetadata({
  title: "Säkerhet",
  description:
    "Data i Sverige. Ingen träning på kunddata. EU-hostade AI-modeller. Hur vi hanterar säkerhet och integritet.",
  path: "/sakerhet",
});

export default async function SakerhetPage() {
  const story = await fetchStory("sakerhet");
  const c = story?.content ?? {};

  const principles: Array<{ _uid: string; titel: string; text: string }> =
    c.principles ?? [];

  const faqs: Array<{ _uid: string; fraga: string; svar: string }> =
    c.faqs ?? [];

  const faqItems = faqs;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.fraga,
      acceptedAnswer: { "@type": "Answer", text: f.svar },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Intro */}
      <section className="section-padding container-x pt-40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-6"
              style={{ color: "#888883" }}
            >
              Säkerhet
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

      {/* Principles */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "#888883" }}>
                      {p.text}
                    </p>
                  </div>
                ))}
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="mb-10">
            <h2
              className="font-serif"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: 1.2,
              }}
            >
              {c.faq_heading}
            </h2>
          </ScrollReveal>
          <div>
            {faqItems.map((faq) => (
              <SecurityFAQ key={faq._uid} fraga={faq.fraga} svar={faq.svar} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-xl">
            <h2
              className="font-serif mb-4"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                lineHeight: 1.2,
              }}
            >
              {c.contact_heading}
            </h2>
            <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#888883" }}>
              {c.contact_text}
            </p>
            <a
              href="/kontakt"
              className="font-sans text-sm font-medium px-6 py-3 rounded inline-block transition-colors"
              style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            >
              Prata med oss
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
