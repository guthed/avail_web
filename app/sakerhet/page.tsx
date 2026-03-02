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

  const faqItems = faqs.length > 0 ? faqs : [
    {
      _uid: "1",
      fraga: "Kan ni arbeta med känslig affärsinformation och affärshemligheter?",
      svar: "Ja. Vi skriver under NDA innan projektet startar och hanterar all känslig data med need-to-know-principen internt. Data replikeras aldrig utanför de miljöer ni godkänner. Leveranskod genomgår kodgranskning med fokus på dataläckage innan produktionssättning.",
    },
    {
      _uid: "2",
      fraga: "Hur hanterar ni personuppgifter och GDPR?",
      svar: "Vi agerar som personuppgiftsbiträde och tecknar alltid ett personuppgiftsbiträdesavtal (PUB-avtal) med kunden. Vi samlar inte in mer data än vad som krävs för lösningen, och vi hjälper er att sätta upp automatiserade raderingsrutiner enligt era regler.",
    },
    {
      _uid: "3",
      fraga: "Vilka AI-leverantörer använder ni och hur hanterar de data?",
      svar: "Vi använder primärt OpenAI och Anthropic med enterprise-konfiguration som stänger av träning på kunddata. För känsligare uppdrag kan vi köra lokala modeller (Llama, Mistral) i helt isolerade miljöer utan internetanslutning. Valet av AI-leverantör görs alltid utifrån er säkerhetsnivå.",
    },
    {
      _uid: "4",
      fraga: "Vad händer med data när projektet är avslutat?",
      svar: "Vi raderar alla kopior av er data – lokalt, i testmiljöer och i molnlagring – inom 30 dagar efter projektavslut, om ni inte explicit begär längre lagring. Vi skickar en skriftlig bekräftelse på att radering är genomförd.",
    },
    {
      _uid: "5",
      fraga: "Kan vi granska koden och infrastrukturkonfigurationen?",
      svar: "Absolut. All kod levereras i er egen kodbas eller ett privat repo ni äger. Infrastrukturkonfiguration levereras som kod (Terraform/IaC). Ni har full insyn och äger allt vi bygger – inga lock-in-beroenden till Avail.",
    },
  ];

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
              {c.heading ?? "Data i Sverige."}{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                {c.heading_italic ?? "Ingen träning på kunddata."}
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              {c.subheading ??
                "Säkerhet är inte ett tillägg – det är en förutsättning. Här är exakt hur vi hanterar er data."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding container-x">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.length > 0
              ? principles.map((p) => (
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
                ))
              : [
                  { titel: "Data i Sverige och EU", text: "Alla system – databaser, AI-modeller och vektorlager – driftsätts i EU-hostade miljöer. Vi använder enbart leverantörer med EU-datapolicyer (Azure EU North, AWS eu-north-1, Supabase EU)." },
                  { titel: "Ingen träning på kunddata", text: "Din data används aldrig för att träna generella AI-modeller. Vi konfigurerar API-anrop explicit med opt-out från träning hos alla AI-leverantörer. Era dokument och konversationer stannar hos er." },
                  { titel: "Minsta möjliga behörighet", text: "Varje systemkomponent har åtkomst enbart till den data den faktiskt behöver. Inga bred läsrättigheter, inga delade hemligheter i kod. Secrets hanteras via Vault eller plattformsspecifika hemlighetstjänster." },
                  { titel: "Krypterad data i vila och transit", text: "All data krypteras med AES-256 i vila. All kommunikation sker över TLS 1.3. Databaser exponeras aldrig direkt – all åtkomst går via autentiserade API-lager." },
                ].map((p) => (
                  <div
                    key={p.titel}
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
              {c.faq_heading ?? "Vanliga frågor"}
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
              {c.contact_heading ?? "Specifika säkerhetskrav?"}
            </h2>
            <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#888883" }}>
              {c.contact_text ??
                "Berätta om er situation, till exempel regulatoriska krav, branschstandard eller intern policy. Vi anpassar arkitekturen därefter."}
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
