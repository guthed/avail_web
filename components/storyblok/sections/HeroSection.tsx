import ScrollReveal from "@/components/animations/ScrollReveal";

interface HeroSectionProps {
  blok: {
    _uid: string;
    label?: string;
    heading?: string;
    heading_italic?: string;
    subtext?: string;
    cta_primary_text?: string;
    cta_primary_link?: string;
    cta_secondary_text?: string;
    cta_secondary_link?: string;
    background_image?: { filename: string; alt?: string };
    full_height?: boolean;
  };
}

export default function HeroSection({ blok }: HeroSectionProps) {
  const bgStyle = blok.background_image?.filename
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0.6), rgba(17,17,17,0.9)), url(${blok.background_image.filename}/m/1920x0)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  // Full-height hero (home page style)
  if (blok.full_height) {
    return (
      <section
        className="min-h-screen flex items-end section-padding container-x pt-32"
        style={bgStyle}
      >
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
            {blok.heading}
          </h1>
          {blok.subtext && (
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              {blok.subtext}
            </p>
          )}
          {(blok.cta_primary_text || blok.cta_secondary_text) && (
            <div className="mt-12 flex flex-wrap gap-4">
              {blok.cta_primary_text && (
                <a
                  href={blok.cta_primary_link ?? "/kontakt"}
                  className="font-sans text-sm font-medium px-6 py-3 rounded transition-colors"
                  style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
                >
                  {blok.cta_primary_text}
                </a>
              )}
              {blok.cta_secondary_text && (
                <a
                  href={blok.cta_secondary_link ?? "/tjanster"}
                  className="font-sans text-sm px-6 py-3 rounded border transition-colors"
                  style={{
                    color: "#F5F4F0",
                    borderColor: "rgba(224,223,219,0.3)",
                  }}
                >
                  {blok.cta_secondary_text}
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  // Standard page hero
  return (
    <section className="section-padding container-x pt-40" style={bgStyle}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          {blok.label && (
            <p
              className="font-sans text-xs uppercase tracking-widest mb-6"
              style={{ color: "#888883" }}
            >
              {blok.label}
            </p>
          )}
          <h1
            className="font-serif mb-8"
            style={{
              color: "#F5F4F0",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
            }}
          >
            {blok.heading}{" "}
            {blok.heading_italic && (
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                {blok.heading_italic}
              </span>
            )}
          </h1>
          {blok.subtext && (
            <p
              className="font-sans text-xl font-light max-w-2xl leading-relaxed"
              style={{ color: "#888883" }}
            >
              {blok.subtext}
            </p>
          )}
          {(blok.cta_primary_text || blok.cta_secondary_text) && (
            <div className="mt-12 flex flex-wrap gap-4">
              {blok.cta_primary_text && (
                <a
                  href={blok.cta_primary_link ?? "/kontakt"}
                  className="font-sans text-sm font-medium px-6 py-3 rounded transition-colors"
                  style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
                >
                  {blok.cta_primary_text}
                </a>
              )}
              {blok.cta_secondary_text && (
                <a
                  href={blok.cta_secondary_link ?? "/tjanster"}
                  className="font-sans text-sm px-6 py-3 rounded border transition-colors"
                  style={{
                    color: "#F5F4F0",
                    borderColor: "rgba(224,223,219,0.3)",
                  }}
                >
                  {blok.cta_secondary_text}
                </a>
              )}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
