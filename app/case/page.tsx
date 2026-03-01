import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CaseCard from "@/components/storyblok/CaseCard";

export const metadata: Metadata = generatePageMetadata({
  title: "Case",
  description:
    "Se hur vi hjälpt organisationer som Foodmark, Sharp och TT Nyhetsbyrån att göra sin data användbar med AI.",
  path: "/case",
});

const cases = [
  {
    slug: "intern-kunskapssok",
    kategori: "RAG / Intern sökning",
    rubrik: "Från 40 minuters sökning till 30 sekunder",
    resultat:
      "En medelstor tillverkare med 12 år av intern dokumentation i spridda system. Vi byggde en semantisk sökmotor som indexerar allt och svarar på naturligt språk. Supportteamet hittar nu rätt information på sekunder istället för minuter.",
  },
  {
    slug: "kundtjanst-bot",
    kategori: "Conversational AI",
    rubrik: "70% färre ärenden till kundtjänst",
    resultat:
      "En e-handlare med 150 000 aktiva kunder och ett supportteam som drunknade i repetitiva frågor. Vi tränade en chattbot på deras faktiska orderdata och FAQ. Idag hanterar boten 7 av 10 inkommande ärenden automatiskt.",
  },
  {
    slug: "kampanjsajt-100-lighthouse",
    kategori: "Webb / SEO",
    rubrik: "100 Lighthouse. Lansering på 4 dagar.",
    resultat:
      "En produktlansering som krävde en sajt med hög prestanda och redaktörsverktyg för marknadsföringsteamet. Vi levererade en Next.js-sajt med Storyblok CMS som fick 100 poäng i alla Lighthouse-kategorier.",
  },
];

const previousClients = [
  "Mips",
  "Vattenfall",
  "OBOS",
  "Readly",
  "Foodmark",
  "Sharp",
  "TT Nyhetsbyrån",
  "Chef",
  "Tele2",
  "Stockholmsmässan",
  "Nya Ekonomikompetens",
];

export default function CasePage() {
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
              Resultat,{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                inte presentationer.
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              Vi mäter framgång i minskad söktid, färre supportärenden och sidor som faktiskt rankar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <CaseCard key={c.slug} {...c} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal scroll teaser */}
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
              Nästa case kan vara ert.
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
