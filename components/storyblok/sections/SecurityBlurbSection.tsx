import ScrollReveal from "@/components/animations/ScrollReveal";

interface SecurityBlurbSectionProps {
  blok: {
    _uid: string;
    label?: string;
    heading?: string;
    heading_italic?: string;
    text?: string;
    link_text?: string;
    link_url?: string;
  };
}

export default function SecurityBlurbSection({ blok }: SecurityBlurbSectionProps) {
  return (
    <section className="section-padding container-x">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="max-w-3xl">
          {blok.label && (
            <p
              className="font-sans text-xs uppercase tracking-widest mb-6"
              style={{ color: "#888883" }}
            >
              {blok.label}
            </p>
          )}
          <h2
            className="font-serif mb-6"
            style={{
              color: "#F5F4F0",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: 1.2,
            }}
          >
            {blok.heading}{" "}
            {blok.heading_italic && (
              <span style={{ color: "#B8A9E8", fontStyle: "italic" }}>
                {blok.heading_italic}
              </span>
            )}
          </h2>
          {blok.text && (
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#888883" }}
            >
              {blok.text}
            </p>
          )}
          {blok.link_text && (
            <a
              href={blok.link_url ?? "#"}
              className="font-sans text-sm transition-colors"
              style={{ color: "#7EEBC0" }}
            >
              {blok.link_text}
            </a>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
