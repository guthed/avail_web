import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Tjänster",
  description:
    "AI-drivna lösningar som gör komplext enkelt. Sökbar intern kunskap, AI-analys, chattbotar, kampanjsajter och SEO.",
  path: "/tjanster",
});

const serviceGroups = [
  {
    group: "Förstå din data",
    intro:
      "Vi gör din organisations samlade kunskap sökbar, analyserbar och handlingsbar – utan att data lämnar dina system.",
    services: [
      {
        title: "Sökbar intern kunskap",
        term: "RAG / Retrieval-Augmented Generation",
        problem:
          "Medarbetare spenderar timmar på att söka i intranät, Confluence och delade mappar – och hittar ändå inte rätt dokument. Kunskap sitter fast hos enskilda personer istället för att vara tillgänglig för hela organisationen.",
        losning:
          "Vi bygger en semantisk sökmotor som förstår frågor på naturligt språk och hämtar rätt dokument, oavsett hur de är namngivna eller var de lagras. Systemet kopplas till era befintliga datakällor och indexeras kontinuerligt.",
        output:
          "Medarbetare hittar svar på sekunder. Onboarding av nya kollegor går snabbare. Kunskapen stannar i organisationen.",
        ex1: "Intern FAQ-bot för HR-avdelning med koppling till personalhandbok",
        ex2: "Teknisk dokumentationssökning för supportteam med 8 000 artiklar",
      },
      {
        title: "AI-driven analys",
        term: "LLM + Structured Outputs",
        problem:
          "Rapporter, kundrecensioner, transkript och rådataloggar innehåller värdefull information – men det tar för lång tid att läsa igenom allt manuellt. Insikterna förblir begravda.",
        losning:
          "Vi kopplar språkmodeller till er data och extraherar mönster, trender och handlingsbara insikter automatiskt. Modellerna levererar strukturerade svar som kan integreras direkt i era befintliga system och rapportverktyg.",
        output:
          "Strukturerade insikter direkt i er rapportportal – dagligen, utan manuell handpåläggning.",
        ex1: "Sentimentanalys av 50 000 kundrecensioner per månad",
        ex2: "Automatiserad konkurrentbevakning med veckovisa sammanfattningar",
      },
      {
        title: "Automatiserade chattbotar",
        term: "Conversational AI",
        problem:
          "Kundtjänst hanterar repetitiva frågor som slukar tid, ökar kostnader och gör det svårt att skala utan att anställa fler.",
        losning:
          "Vi tränar chattbotar på er faktiska produktdokumentation, kundhistorik och FAQ – inte generiska svar från internet. Boten eskalerar automatiskt till människa när ärendet kräver det.",
        output:
          "70% av vanliga kundfrågor löses utan mänsklig handpåläggning. Kundtjänst fokuserar på komplexa ärenden.",
        ex1: "E-handelssupport med orderhantering och returflöde",
        ex2: "Internt IT-helpdesk för lösenordsåterställning och vanliga tekniska problem",
      },
    ],
  },
  {
    group: "Nå dina kunder",
    intro:
      "Vi bygger snabba, konverteringsoptimerade sajter och sätter upp mätning som ger faktiska svar.",
    services: [
      {
        title: "Kampanjsajter",
        term: "Next.js + Storyblok CMS",
        problem:
          "Marknadsföringsteam är beroende av utvecklare för varje textändring och produktuppdatering, vilket bromsar kampanjerna och skapar en flaskhals.",
        losning:
          "Vi bygger redaktörsvänliga sajter med headless CMS – snabba, GDPR-säkra och optimerade för konvertering. Innehåll kan uppdateras av marknadsföringsteamet utan ett enda kodrader.",
        output:
          "100 Lighthouse-poäng. Innehåll som kan uppdateras av marknadsförarna direkt – utan att involvera en utvecklare.",
        ex1: "Produktlansering med A/B-testning och anpassat landningssidssystem",
        ex2: "Eventsajt med anmälningsflöde, schema och talarpresentationer",
      },
      {
        title: "SEO och webbanalys",
        term: "Technical SEO + GA4 + Looker Studio",
        problem:
          "Ni vet inte varför er organiska trafik sjunker, var potentiella kunder lämnar sajten, eller vilket innehåll som faktiskt driver affärer.",
        losning:
          "Teknisk SEO-revision, strukturerad data (schema.org) och händelsespårning som ger faktiska svar – inte bara sidvisningar. Vi sätter upp dashboards som visar vilka sidor som driver konverteringar.",
        output:
          "Tydlig prioriteringslista och mätbara förbättringar. Ni vet vad som fungerar och varför.",
        ex1: "Core Web Vitals-optimering som förbättrade sökordsrankningar med 40%",
        ex2: "Konverteringstrattanalys som identifierade kritiskt bortfall i checkout",
      },
    ],
  },
];

export default function TjansterPage() {
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
              Tjänster
            </p>
            <h1
              className="font-serif mb-8"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
              }}
            >
              AI-drivna lösningar som gör{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                komplext enkelt.
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              Vi arbetar i två spår: att göra er interna kunskap tillgänglig, och att nå era kunder effektivare.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service groups */}
      {serviceGroups.map((group, gi) => (
        <section
          key={group.group}
          className="section-padding container-x"
          style={
            gi > 0
              ? { borderTop: "1px solid rgba(224,223,219,0.1)" }
              : undefined
          }
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12">
              <span
                className="font-sans text-xs uppercase tracking-widest"
                style={{ color: "#7EEBC0" }}
              >
                {group.group}
              </span>
              <p
                className="font-sans text-base mt-3 max-w-xl leading-relaxed"
                style={{ color: "#888883" }}
              >
                {group.intro}
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {group.services.map((service) => (
                <ScrollReveal key={service.title}>
                  <article
                    className="border rounded-lg p-8 md:p-12"
                    style={{
                      backgroundColor: "#161616",
                      borderColor: "rgba(224,223,219,0.15)",
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h2
                          className="font-serif text-3xl mb-2"
                          style={{ color: "#F5F4F0" }}
                        >
                          {service.title}
                        </h2>
                        <p
                          className="font-sans text-sm"
                          style={{ color: "#888883" }}
                        >
                          {service.term}
                        </p>
                      </div>
                      <div
                        className="flex items-center justify-start md:justify-end"
                      >
                        <p
                          className="font-sans text-base font-medium"
                          style={{ color: "#7EEBC0" }}
                        >
                          {service.output}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p
                          className="font-sans text-xs uppercase tracking-widest mb-3"
                          style={{ color: "#888883" }}
                        >
                          Problem
                        </p>
                        <p
                          className="font-sans text-sm leading-relaxed"
                          style={{ color: "rgba(245,244,240,0.65)" }}
                        >
                          {service.problem}
                        </p>
                      </div>
                      <div>
                        <p
                          className="font-sans text-xs uppercase tracking-widest mb-3"
                          style={{ color: "#888883" }}
                        >
                          Lösning
                        </p>
                        <p
                          className="font-sans text-sm leading-relaxed"
                          style={{ color: "rgba(245,244,240,0.65)" }}
                        >
                          {service.losning}
                        </p>
                      </div>
                    </div>
                    <div
                      className="pt-6 border-t"
                      style={{ borderColor: "rgba(224,223,219,0.1)" }}
                    >
                      <p
                        className="font-sans text-xs uppercase tracking-widest mb-3"
                        style={{ color: "#888883" }}
                      >
                        Exempel
                      </p>
                      <ul className="space-y-1">
                        <li
                          className="font-sans text-sm"
                          style={{ color: "rgba(245,244,240,0.5)" }}
                        >
                          → {service.ex1}
                        </li>
                        <li
                          className="font-sans text-sm"
                          style={{ color: "rgba(245,244,240,0.5)" }}
                        >
                          → {service.ex2}
                        </li>
                      </ul>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

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
              Osäker på vad ni behöver?
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#888883" }}
            >
              Boka ett kort samtal så går vi igenom er situation och föreslår ett konkret nästa steg – utan förpliktelser.
            </p>
            <a
              href="/kontakt"
              className="font-sans text-sm font-medium px-8 py-4 rounded inline-block transition-colors"
              style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            >
              Boka ett samtal
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
