import ScrollReveal from "@/components/animations/ScrollReveal";

interface TempoSectionProps {
  blok: {
    _uid: string;
    number?: string;
    text?: string;
  };
}

export default function TempoSection({ blok }: TempoSectionProps) {
  return (
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
            {blok.number && (
              <p
                className="font-serif mb-4"
                style={{
                  color: "#7EEBC0",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontStyle: "italic",
                }}
              >
                {blok.number}
              </p>
            )}
            {blok.text && (
              <p
                className="font-sans text-lg max-w-xl leading-relaxed"
                style={{ color: "rgba(245,244,240,0.7)" }}
              >
                {blok.text}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
