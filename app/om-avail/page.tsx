import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TeamMember from "@/components/storyblok/TeamMember";
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

  const team: Array<{ _uid: string; namn: string; roll: string; bio: string }> =
    c.team ?? [];

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
              {c.heading ?? "Teknisk kompetens."}{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                {c.heading_italic ?? "Strategiskt tänkande."}
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              {c.subheading ??
                "Avail STHLM AB grundades i Stockholm med ett enkelt syfte: att bygga AI-lösningar som faktiskt används – inte imponerar i demos men samlar damm i verkligheten."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main text */}
      <section className="section-padding container-x">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p
              className="font-sans text-lg leading-relaxed mb-6"
              style={{ color: "rgba(245,244,240,0.75)" }}
            >
              {c.body_p1 ??
                "AI har gått från buzzword till infrastruktur. Ändå fastnar de flesta organisationer i en fas av experiment: proof-of-concepts som aldrig når produktion, chattbotar som ger generiska svar och dashboards som ingen tittar på."}
            </p>
            <p
              className="font-sans text-lg leading-relaxed mb-6"
              style={{ color: "rgba(245,244,240,0.75)" }}
            >
              {c.body_p2 ??
                "Problemet är sällan tekniken. Det är att lösningen inte är byggd för det faktiska problemet – eller att den är för komplex för att faktiskt användas av de som behöver den."}
            </p>
            <p
              className="font-sans text-lg leading-relaxed"
              style={{ color: "rgba(245,244,240,0.75)" }}
            >
              {c.body_p3 ??
                "Vi arbetar annorlunda. Vi börjar med problemet, inte med teknologin. Vi levererar snabbt och itererar med verkliga användare. Och vi mäter framgång i faktisk förändring – inte i antalet driftsatta modeller."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
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
              {c.values_heading ?? "Vad vi tror på"}
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.length > 0
              ? values.map((v) => (
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
                ))
              : [
                  { titel: "Insikt över instinkt", text: "Vi fattar inte beslut baserade på känsla – vi bygger system som ger faktabaserade svar. Samma princip gäller hur vi driver våra projekt: mätbara mål, tydliga acceptanskriterier, inga gissningar." },
                  { titel: "Enkelhet är svårast", text: "Den svåraste delen av AI-implementering är inte modellvalet – det är att identifiera rätt problem att lösa och presentera svaret på ett sätt som faktiskt används. Vi lägger mer tid på problemdefinition än på teknisk implementation." },
                  { titel: "Ägarskap utan lock-in", text: "Ni äger allt vi bygger. Koden, modellerna, infrastrukturkonfigurationen. Inga abonnemang, inga proprietära plattformar ni fastnar i. Om ni vill ta över driften själva eller anlita någon annan, ska det vara friktionsfritt." },
                  { titel: "Tempo som är hållbart", text: "Fyra dagar till prototyp är möjligt för att vi fokuserar skarpt, inte för att vi tar genvägar. Vi tar inga projekt vi inte tror vi kan leverera. Hellre tacka nej än att leverera något halvdant." },
                ].map((v) => (
                  <div
                    key={v.titel}
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

      {/* Team */}
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
              {c.team_heading ?? "Teamet"}
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {team.length > 0
              ? team.map((member) => (
                  <TeamMember
                    key={member._uid}
                    namn={member.namn}
                    roll={member.roll}
                    bio={member.bio}
                  />
                ))
              : [
                  { namn: "Anton", roll: "AI-arkitekt och grundare", bio: "Bakgrund inom mjukvaruutveckling och maskininlärning. Har byggt RAG-system och konversationsbots för allt från nystartade bolag till stora mediekoncerner. Fascinerad av gränssnittet mellan teknisk excellens och faktisk användbarhet." },
                  { namn: "Maja", roll: "Strategisk rådgivare", bio: "Lång erfarenhet av digital transformation i stora organisationer. Hjälper kunder att identifiera var AI faktiskt ger värde och var det inte gör det. Stark förespråkare för att börja smalt och iterera snabbt." },
                ].map((member) => (
                  <TeamMember key={member.namn} {...member} />
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
          <ScrollReveal className="max-w-xl">
            <h2
              className="font-serif mb-6"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.2,
              }}
            >
              {c.cta_heading ?? "Jobba med oss."}
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
