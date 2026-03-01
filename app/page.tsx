import type { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Avail STHLM AB – AI-lösningar som gör data användbar",
  description:
    "AI-lösningar som gör intern data och dokumentation sökbar, användbar och direkt handlingsbar. Stockholm.",
  alternates: { canonical: "/" },
};

const services = [
  {
    group: "Förstå din data",
    items: [
      {
        title: "Sökbar intern kunskap",
        term: "RAG / Retrieval-Augmented Generation",
        problem:
          "Medarbetare spenderar timmar på att söka i intranät, Confluence och delade mappar – och hittar ändå inte rätt.",
        losning:
          "Vi bygger en semantisk sökmotor som förstår frågor på naturligt språk och hämtar rätt dokument, oavsett hur de är namngivna.",
        output: "Svar på sekunder, inte timmar.",
        ex1: "Intern FAQ-bot för HR-avdelning",
        ex2: "Teknisk dokumentationssökning för supportteam",
      },
      {
        title: "AI-driven analys",
        term: "LLM + Structured Outputs",
        problem:
          "Rapporter, kundrecensioner och rådataloggar innehåller värdefull information – men det tar för lång tid att läsa igenom allt.",
        losning:
          "Vi kopplar språkmodeller till er data och extraherar mönster, trender och handlingsbara insikter automatiskt.",
        output: "Strukturerade insikter direkt i er rapportportal.",
        ex1: "Sentimentanalys av kundrecensioner",
        ex2: "Automatiserad konkurrentbevakning",
      },
      {
        title: "Automatiserade chattbotar",
        term: "Conversational AI",
        problem:
          "Kundtjänst hanterar repetitiva frågor som slukar tid och ökar kostnader.",
        losning:
          "Vi tränar chattbotar på er faktiska produktdokumentation och kundhistorik – inte generiska svar.",
        output: "70% av vanliga frågor löses utan mänsklig handpåläggning.",
        ex1: "E-handelssupport med orderhantering",
        ex2: "Internt IT-helpdesk för vanliga tekniska problem",
      },
    ],
  },
  {
    group: "Nå dina kunder",
    items: [
      {
        title: "Kampanjsajter",
        term: "Next.js + Storyblok",
        problem:
          "Marknadsföringsteam är beroende av utvecklare för varje textändring, vilket bromsar kampanjer.",
        losning:
          "Vi bygger redaktörsvänliga sajter med headless CMS – snabba, GDPR-säkra och optimerade för konvertering.",
        output: "100 Lighthouse-poäng. Innehåll som kan uppdateras utan kod.",
        ex1: "Produktlansering med A/B-testning",
        ex2: "Eventsajt med anmälningsflöde",
      },
      {
        title: "SEO och webbanalys",
        term: "Technical SEO + GA4",
        problem:
          "Ni vet inte varför er organiska trafik sjunker, eller var potentiella kunder lämnar sajten.",
        losning:
          "Teknisk SEO-revision, strukturerad data och händelsespårning som ger faktiska svar – inte bara sidvisningar.",
        output: "Tydlig prioriteringslista och mätbara förbättringar.",
        ex1: "Core Web Vitals-optimering",
        ex2: "Konverteringstrattanalys",
      },
    ],
  },
];

const stats = [
  { value: "4 dagar", label: "till fungerande prototyp" },
  { value: "100", label: "Lighthouse-poäng i genomsnitt" },
  { value: "70%", label: "automatiserade kundfrågor" },
];

const customers = [
  "Foodmark",
  "Sharp",
  "TT Nyhetsbyrån",
  "Chef",
  "Tele2",
  "Stockholmsmässan",
  "Nya Ekonomikompetens",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-end section-padding container-x pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <h1
            className="font-serif mb-8"
            style={{
              fontStyle: "italic",
              color: "#B8A9E8",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.1,
            }}
          >
            Insikt över instinkt.
          </h1>
          <p
            className="font-sans text-xl font-light max-w-2xl leading-relaxed"
            style={{ color: "#888883" }}
          >
            AI-lösningar som gör intern data och dokumentation sökbar, användbar och direkt handlingsbar.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="/kontakt"
              className="font-sans text-sm font-medium px-6 py-3 rounded transition-colors"
              style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            >
              Starta ett projekt
            </a>
            <a
              href="/tjanster"
              className="font-sans text-sm px-6 py-3 rounded border transition-colors"
              style={{ color: "#F5F4F0", borderColor: "rgba(224,223,219,0.3)" }}
            >
              Se tjänster
            </a>
          </div>
        </div>
      </section>

      {/* Vad vi gör */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: "#888883" }}
            >
              Vad vi gör
            </p>
            <h2
              className="font-serif mb-16"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.2,
              }}
            >
              Från rådata till beslut.
            </h2>
          </ScrollReveal>

          {services.map((group) => (
            <div key={group.group} className="mb-20">
              <ScrollReveal>
                <h3
                  className="font-sans text-sm uppercase tracking-widest mb-8"
                  style={{ color: "#7EEBC0" }}
                >
                  {group.group}
                </h3>
              </ScrollReveal>
              <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <article
                    key={item.title}
                    className="border rounded-lg p-8 transition-all duration-300"
                    style={{
                      backgroundColor: "#161616",
                      borderColor: "rgba(224,223,219,0.15)",
                    }}
                  >
                    <h4
                      className="font-serif text-xl mb-1"
                      style={{ color: "#F5F4F0" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="font-sans text-xs mb-5"
                      style={{ color: "#888883" }}
                    >
                      {item.term}
                    </p>
                    <p
                      className="font-sans text-sm leading-relaxed mb-4"
                      style={{ color: "rgba(245,244,240,0.6)" }}
                    >
                      {item.problem}
                    </p>
                    <p
                      className="font-sans text-sm leading-relaxed font-medium"
                      style={{ color: "#7EEBC0" }}
                    >
                      {item.output}
                    </p>
                  </article>
                ))}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        className="section-padding container-x border-y"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat) => (
              <div key={stat.value}>
                <p
                  className="font-serif mb-3"
                  style={{
                    color: "#B8A9E8",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontStyle: "italic",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p className="font-sans text-base" style={{ color: "#888883" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Security blurb */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-3xl">
            <p
              className="font-sans text-xs uppercase tracking-widest mb-6"
              style={{ color: "#888883" }}
            >
              Säkerhet
            </p>
            <h2
              className="font-serif mb-6"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: 1.2,
              }}
            >
              Data i Sverige.{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                Ingen träning på kunddata.
              </span>
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#888883" }}
            >
              Alla AI-modeller körs i EU-hostade miljöer. Din data används aldrig för att träna
              generella modeller. Vi jobbar enligt principen om minsta möjliga behörighet – bara
              de som behöver åtkomst har den.
            </p>
            <a
              href="/sakerhet"
              className="font-sans text-sm transition-colors"
              style={{ color: "#7EEBC0" }}
            >
              Läs mer om säkerhet →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Social proof */}
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-10"
              style={{ color: "#888883" }}
            >
              Uppdragsgivare
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {customers.map((name) => (
                <span
                  key={name}
                  className="font-sans text-lg font-light"
                  style={{ color: "rgba(245,244,240,0.35)" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-2xl">
            <h2
              className="font-serif mb-8"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.2,
              }}
            >
              Redo att göra er data{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>användbar</span>?
            </h2>
            <a
              href="/kontakt"
              className="font-sans text-sm font-medium px-8 py-4 rounded transition-colors inline-block"
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
