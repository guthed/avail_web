import ScrollReveal from "@/components/animations/ScrollReveal";

interface CTASectionProps {
  blok: {
    _uid: string;
    heading?: string;
    text?: string;
    button_text?: string;
    button_link?: string;
  };
}

export default function CTASection({ blok }: CTASectionProps) {
  return (
    <section
      className="section-padding container-x border-t"
      style={{ borderColor: "rgba(224,223,219,0.1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="max-w-2xl">
          {blok.heading && (
            <h2
              className="font-serif mb-6"
              style={{
                color: "#F5F4F0",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.2,
              }}
            >
              {blok.heading}
            </h2>
          )}
          {blok.text && (
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#888883" }}
            >
              {blok.text}
            </p>
          )}
          {blok.button_text && (
            <a
              href={blok.button_link ?? "/kontakt"}
              className="font-sans text-sm font-medium px-8 py-4 rounded inline-block transition-colors"
              style={{ backgroundColor: "#7EEBC0", color: "#111111" }}
            >
              {blok.button_text}
            </a>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
