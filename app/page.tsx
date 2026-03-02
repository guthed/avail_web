import type { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { fetchStory } from "@/lib/storyblok";

export const metadata: Metadata = {
  title: "Avail STHLM AB – AI-lösningar som gör data användbar",
  description:
    "AI-lösningar som gör intern data och dokumentation sökbar, användbar och direkt handlingsbar. Stockholm.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const story = await fetchStory("home");
  const c = story?.content ?? {};

  const serviceGroups: Array<{
    _uid: string;
    group_name: string;
    services: Array<{
      _uid: string;
      titel: string;
      teknisk_term: string;
      problem: string;
      output: string;
    }>;
  }> = c.service_groups ?? [];

  const stats: Array<{ _uid: string; value: string; label: string }> =
    c.stats ?? [];

  const customers: string[] = (c.customers ?? "")
    .split(",")
    .map((s: string) => s.trim())
    .filter(Boolean);

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
            {c.hero_heading}
          </h1>
          <p
            className="font-sans text-xl font-light max-w-2xl leading-relaxed"
            style={{ color: "#888883" }}
          >
            {c.hero_subtext}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="/kontakt"
              className="font-sans text-sm font-medium px-6 py-3 rounded transition-colors"
              style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            >
              {c.hero_cta_primary}
            </a>
            <a
              href="/tjanster"
              className="font-sans text-sm px-6 py-3 rounded border transition-colors"
              style={{ color: "#F5F4F0", borderColor: "rgba(224,223,219,0.3)" }}
            >
              {c.hero_cta_secondary}
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
              {c.services_heading}
            </h2>
          </ScrollReveal>

          {serviceGroups.map((group) => (
            <div key={group._uid} className="mb-20">
              <ScrollReveal>
                <h3
                  className="font-sans text-sm uppercase tracking-widest mb-8"
                  style={{ color: "#7EEBC0" }}
                >
                  {group.group_name}
                </h3>
              </ScrollReveal>
              <ScrollReveal
                stagger
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.services.map((item) => (
                  <article
                    key={item._uid}
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
                      {item.titel}
                    </h4>
                    <p
                      className="font-sans text-xs mb-5"
                      style={{ color: "#888883" }}
                    >
                      {item.teknisk_term}
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
              <div key={stat._uid}>
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
              {c.security_heading}{" "}
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                {c.security_italic}
              </span>
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#888883" }}
            >
              {c.security_text}
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
              {c.cta_heading}
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
