import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProcessStep from "@/components/storyblok/ProcessStep";

export const metadata: Metadata = generatePageMetadata({
  title: "Hur vi jobbar",
  description:
    "Fyra tydliga faser: Identifiering, Datainsamling, AI-fas och Analys. Prototyp på 4 dagar. Leverans utan jargong.",
  path: "/hur-vi-jobbar",
});

const steps = [
  {
    nummer: "01",
    titel: "Identifiering",
    beskrivning:
      "Vi startar med ett strukturerat workshoptillfälle – fysiskt eller digitalt – där vi kartlägger era datakällor, arbetsflöden och faktiska smärtpunkter. Ingen PowerPoint-presentation, bara konkreta frågor och svar. I slutet av dagen har vi en prioriterad lista på vad som ger mest värde snabbast.",
  },
  {
    nummer: "02",
    titel: "Datainsamling",
    beskrivning:
      "Vi sätter upp säkra anslutningar till era system – SharePoint, Confluence, databaser, APIer – och inventerar datakvalitet. Vi bedömer vad som är redo att användas direkt och vad som behöver rensas eller struktureras om. Ni involveras bara när beslut krävs.",
  },
  {
    nummer: "03",
    titel: "AI-fas",
    beskrivning:
      "Beroende på lösning bygger vi pipeline, tränar modellen på er data eller integrerar färdiga LLM-APIer. Vi levererar en fungerande prototyp inom fyra dagar. Ni ser vad ni faktiskt köper – inte en mockup. Feedbacken från prototypfasen styr den slutliga leveransen.",
  },
  {
    nummer: "04",
    titel: "Analys och leverans",
    beskrivning:
      "Vi levererar med dokumentation, mätpunkter och tydliga acceptanskriterier. Ni ska veta exakt hur ni mäter om lösningen fungerar. Om vi inte träffar målen, jobbar vi vidare utan extra kostnad. Efterleverans ingår alltid 30 dagars support.",
  },
];

const principles = [
  {
    titel: "Inga onödiga möten",
    text: "Vi kommunicerar asynkront så mycket som möjligt. Ni involveras när beslut behöver fattas, inte för statusuppdateringar.",
  },
  {
    titel: "Inga svarta lådor",
    text: "Ni ser koden, ni förstår arkitekturen. Allt levereras med dokumentation som en juniorkollega kan följa.",
  },
  {
    titel: "Mätbara mål från start",
    text: "Vi definierar vad framgång ser ut före vi börjar. Ingen tveksamhet om projektet lyckades när det är klart.",
  },
  {
    titel: "Tempo utan kvalitetsförlust",
    text: "Fyra dagar till prototyp är standard. Vi uppnår det genom att fokusera på kärnfunktionalitet och iterera snabbt – inte genom att ta genvägar.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Hur Avail STHLM arbetar med AI-projekt",
  description: "Fyra tydliga faser från identifiering till leverans. Prototyp på 4 dagar.",
  step: steps.map((s) => ({
    "@type": "HowToStep",
    name: s.titel,
    text: s.beskrivning,
    position: parseInt(s.nummer),
  })),
};

export default function HurViJobbarPage() {
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
              Fyra faser.{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                Prototyp på 4 dagar.
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              Vi arbetar i ett strukturerat men flexibelt ramverk. Ni vet alltid var i processen vi befinner oss och vad som händer härnäst.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-padding container-x">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {steps.map((step) => (
              <ScrollReveal key={step.nummer}>
                <ProcessStep {...step} />
                {step.nummer !== "04" && (
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
              Principer vi arbetar efter
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
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
                4 dagar.
              </p>
              <p
                className="font-sans text-lg max-w-xl leading-relaxed"
                style={{ color: "rgba(245,244,240,0.7)" }}
              >
                Så lång tid tar det från kick-off till att ni kan klicka, testa och ge feedback på en fungerande prototyp. Inte en demo. Inte en mockup. En prototyp som fungerar på er faktiska data.
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
              Redo att starta?
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
