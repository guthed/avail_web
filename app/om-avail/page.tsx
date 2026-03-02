import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { fetchStory } from "@/lib/storyblok";

export const metadata: Metadata = generatePageMetadata({
  title: "Om Avail",
  description:
    "Avail STHLM AB. Teknisk kompetens och strategiskt tänkande. Vi bygger AI-lösningar som faktiskt används.",
  path: "/om-avail",
});

export default async function OmAvailPage() {
  const story = await fetchStory("om-avail");
  const c = story?.content ?? {};

  const values: Array<{ _uid: string; titel: string; text: string }> =
    c.values ?? [];

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
              Om Avail
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

      {/* Main text */}
      <section className="section-padding container-x">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            {c.body_p1 && (
              <p
                className="font-sans text-lg leading-relaxed mb-6"
                style={{ color: "rgba(245,244,240,0.75)" }}
              >
                {c.body_p1}
              </p>
            )}
            {c.body_p2 && (
              <p
                className="font-sans text-lg leading-relaxed mb-6"
                style={{ color: "rgba(245,244,240,0.75)" }}
              >
                {c.body_p2}
              </p>
            )}
            {c.body_p3 && (
              <p
                className="font-sans text-lg leading-relaxed"
                style={{ color: "rgba(245,244,240,0.75)" }}
              >
                {c.body_p3}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      {values.length > 0 && (
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
                {c.values_heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div
                  key={v._uid}
                  className="border rounded-lg p-8"
                  style={{
                    backgroundColor: "#161616",
                    borderColor: "rgba(224,223,219,0.15)",
                  }}
                >
                  <h3 className="font-serif text-xl mb-3" style={{ color: "#F5F4F0" }}>
                    {v.titel}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#888883" }}>
                    {v.text}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}

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
              Ta kontakt
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
