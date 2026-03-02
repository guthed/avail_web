import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CaseCard from "@/components/storyblok/CaseCard";
import { fetchStory } from "@/lib/storyblok";

export const metadata: Metadata = generatePageMetadata({
  title: "Case",
  description:
    "Se hur vi hjälpt organisationer som Foodmark, Sharp och TT Nyhetsbyrån att göra sin data användbar med AI.",
  path: "/case",
});

export default async function CasePage() {
  const story = await fetchStory("case");
  const c = story?.content ?? {};

  const cases: Array<{
    _uid: string;
    rubrik: string;
    kategori: string;
    resultat: string;
    slug: string;
  }> = c.cases ?? [];

  const previousClients: string[] = (c.previous_clients ?? "")
    .split(",")
    .map((s: string) => s.trim())
    .filter(Boolean);

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
              Case
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
              className="font-sans text-xl font-light max-w-xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              {c.subheading}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal
            stagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cases.map((c) => (
              <CaseCard
                key={c._uid}
                slug={c.slug}
                rubrik={c.rubrik}
                kategori={c.kategori}
                resultat={c.resultat}
              />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Tidigare uppdragsgivare */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-10">
            <p
              className="font-sans text-xs uppercase tracking-widest"
              style={{ color: "#888883" }}
            >
              Tidigare uppdragsgivare
            </p>
          </ScrollReveal>
          <ScrollReveal stagger className="flex flex-wrap gap-x-10 gap-y-4">
            {previousClients.map((name) => (
              <span
                key={name}
                className="font-sans text-lg font-light"
                style={{ color: "rgba(245,244,240,0.3)" }}
              >
                {name}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-2xl">
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
              Starta ett projekt
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
