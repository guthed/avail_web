import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface CaseData {
  slug: string;
  kategori: string;
  rubrik: string;
  kund: string;
  utmaning: string;
  losning: string;
  resultat: string;
  teknik: string[];
}

const allCases: CaseData[] = [
  {
    slug: "intern-kunskapssok",
    kategori: "RAG / Intern sökning",
    rubrik: "Från 40 minuters sökning till 30 sekunder",
    kund: "Tillverkningsindustrin",
    utmaning:
      "Kunden hade 12 år av intern dokumentation spridd över SharePoint, lokala mappar och ett föråldrat intranät. Supportteamet lade i genomsnitt 40 minuter per ärende på att hitta rätt information, och nyare medarbetare hittade sällan alls.",
    losning:
      "Vi implementerade en RAG-pipeline (Retrieval-Augmented Generation) som indexerar alla dokumentkällor semantiskt. Medarbetare kan nu ställa frågor på naturligt svenska och få svar med direkt källhänvisning. Systemet körs helt i EU-hostade miljöer och synkas mot befintliga datakällor nattligen.",
    resultat:
      "Genomsnittlig söktid sjönk från 40 minuter till under 30 sekunder. Onboarding-tid för nya tekniker halverades. Supportteamet rapporterar ökad tillfredställelse och färre eskaleringar.",
    teknik: ["OpenAI GPT-4o", "Pinecone (EU-region)", "Next.js", "Supabase"],
  },
  {
    slug: "kundtjanst-bot",
    kategori: "Conversational AI",
    rubrik: "70% färre ärenden till kundtjänst",
    kund: "E-handel",
    utmaning:
      "En e-handlare med 150 000 aktiva kunder hanterade dagligen hundratals identiska supportfrågor: orderstatus, returinstruktioner, leveranstider. Kundtjänstteamet på fyra personer hann inte med och svarstiderna ökade.",
    losning:
      "Vi tränade en konversationsbot direkt på kundens orderdata, produktkatalog och befintliga FAQ. Boten integrerades i Zendesk-flödet och kan hämta orderstatus i realtid. Komplexa ärenden eskaleras automatiskt med full konversationshistorik till en människa.",
    resultat:
      "70% av inkommande ärenden löses nu utan mänsklig handpåläggning. Kundtjänstteamet fokuserar på komplexa fall och kundnöjdheten mätt i NPS steg med 18 poäng under det första halvåret.",
    teknik: ["Anthropic Claude", "Zendesk API", "Next.js API Routes", "Supabase"],
  },
  {
    slug: "kampanjsajt-100-lighthouse",
    kategori: "Webb / SEO",
    rubrik: "100 Lighthouse. Lansering på 4 dagar.",
    kund: "Produktlansering, konsumentvaror",
    utmaning:
      "En produktlansering med hårt deadline. Marknadsföringsteamet behövde en sajt som presterade perfekt i sökmotorer, laddade blixtsnabbt och som de själva kunde uppdatera utan att involvera en utvecklare.",
    losning:
      "Vi byggde en Next.js-sajt med Storyblok som headless CMS. Bilder optimeras automatiskt via Next Image, fonts laddas med display:swap och all kritisk CSS inlines. Marknadsföringsteamet fick en visuell editor för att hantera allt innehåll.",
    resultat:
      "100 poäng i alla fyra Lighthouse-kategorier (Performance, Accessibility, Best Practices, SEO). Sajten lanserades fyra dagar efter kickoff. Tre månader senare hade produktens kampanjsida genererat 40% mer organisk trafik än föregående lansering.",
    teknik: ["Next.js 14", "Storyblok CMS", "Tailwind CSS", "Vercel"],
  },
];

export async function generateStaticParams() {
  return allCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseData = allCases.find((c) => c.slug === slug);
  if (!caseData) return {};

  return {
    title: caseData.rubrik,
    description: caseData.utmaning.slice(0, 160),
    alternates: { canonical: `/case/${slug}` },
    openGraph: {
      title: caseData.rubrik,
      description: caseData.utmaning.slice(0, 160),
    },
  };
}

export default async function CaseSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = allCases.find((c) => c.slug === slug);

  if (!caseData) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="section-padding container-x pt-40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: "#888883" }}
            >
              {caseData.kategori}
            </p>
            <h1
              className="font-serif mb-6"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
              }}
            >
              {caseData.rubrik}
            </h1>
            <p className="font-sans text-sm" style={{ color: "#888883" }}>
              Uppdragsgivare: {caseData.kund}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding container-x">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <ScrollReveal>
              <p
                className="font-sans text-xs uppercase tracking-widest mb-4"
                style={{ color: "#888883" }}
              >
                Utmaning
              </p>
              <p
                className="font-sans text-lg leading-relaxed"
                style={{ color: "rgba(245,244,240,0.75)" }}
              >
                {caseData.utmaning}
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="font-sans text-xs uppercase tracking-widest mb-4"
                style={{ color: "#888883" }}
              >
                Lösning
              </p>
              <p
                className="font-sans text-lg leading-relaxed"
                style={{ color: "rgba(245,244,240,0.75)" }}
              >
                {caseData.losning}
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div
                className="border rounded-lg p-8"
                style={{
                  backgroundColor: "#161616",
                  borderColor: "rgba(126,235,192,0.3)",
                }}
              >
                <p
                  className="font-sans text-xs uppercase tracking-widest mb-4"
                  style={{ color: "#7EEBC0" }}
                >
                  Resultat
                </p>
                <p
                  className="font-sans text-lg leading-relaxed"
                  style={{ color: "#F5F4F0" }}
                >
                  {caseData.resultat}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="font-sans text-xs uppercase tracking-widest mb-4"
                style={{ color: "#888883" }}
              >
                Teknologi
              </p>
              <div className="flex flex-wrap gap-3">
                {caseData.teknik.map((t) => (
                  <span
                    key={t}
                    className="font-sans text-sm px-3 py-1 rounded border"
                    style={{
                      color: "#F5F4F0",
                      borderColor: "rgba(224,223,219,0.2)",
                      backgroundColor: "#161616",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
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
              Liknande utmaningar?
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#888883" }}
            >
              Berätta om er situation, så tar vi ett samtal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/kontakt"
                className="font-sans text-sm font-medium px-6 py-3 rounded inline-block transition-colors"
                style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
              >
                Kontakta oss
              </a>
              <a
                href="/case"
                className="font-sans text-sm px-6 py-3 rounded border inline-block transition-colors"
                style={{
                  color: "#F5F4F0",
                  borderColor: "rgba(224,223,219,0.3)",
                }}
              >
                Fler case
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
