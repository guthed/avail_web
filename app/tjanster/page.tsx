import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { fetchStory } from "@/lib/storyblok";

export const metadata: Metadata = generatePageMetadata({
  title: "Tjänster",
  description:
    "AI-drivna lösningar som gör komplext enkelt. Sökbar intern kunskap, AI-analys, chattbotar, kampanjsajter och SEO.",
  path: "/tjanster",
});

export default async function TjansterPage() {
  const story = await fetchStory("tjanster");
  const c = story?.content ?? {};

  const serviceGroups: Array<{
    _uid: string;
    group_name: string;
    intro: string;
    services: Array<{
      _uid: string;
      titel: string;
      teknisk_term: string;
      problem: string;
      losning: string;
      output: string;
      exempel_1: string;
      exempel_2: string;
    }>;
  }> = c.service_groups ?? [];

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
              {c.heading ?? "AI-drivna lösningar som gör"}{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                {c.heading_italic ?? "komplext enkelt."}
              </span>
            </h1>
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              {c.subheading ??
                "Vi arbetar i två spår: att göra er interna kunskap tillgänglig, och att nå era kunder effektivare."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service groups */}
      {serviceGroups.map((group, gi) => (
        <section
          key={group._uid}
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
                {group.group_name}
              </span>
              {group.intro && (
                <p
                  className="font-sans text-base mt-3 max-w-xl leading-relaxed"
                  style={{ color: "#888883" }}
                >
                  {group.intro}
                </p>
              )}
            </ScrollReveal>

            <div className="space-y-6">
              {group.services.map((service) => (
                <ScrollReveal key={service._uid}>
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
                          {service.titel}
                        </h2>
                        <p
                          className="font-sans text-sm"
                          style={{ color: "#888883" }}
                        >
                          {service.teknisk_term}
                        </p>
                      </div>
                      <div className="flex items-center justify-start md:justify-end">
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
                        {service.exempel_1 && (
                          <li
                            className="font-sans text-sm"
                            style={{ color: "rgba(245,244,240,0.5)" }}
                          >
                            → {service.exempel_1}
                          </li>
                        )}
                        {service.exempel_2 && (
                          <li
                            className="font-sans text-sm"
                            style={{ color: "rgba(245,244,240,0.5)" }}
                          >
                            → {service.exempel_2}
                          </li>
                        )}
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
              {c.cta_heading ?? "Osäker på vad ni behöver?"}
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#888883" }}
            >
              {c.cta_text ??
                "Boka ett kort samtal så går vi igenom er situation och föreslår ett konkret nästa steg – utan förpliktelser."}
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
