import ScrollReveal from "@/components/animations/ScrollReveal";

interface TextSectionProps {
  blok: {
    _uid: string;
    text?: string;
  };
}

export default function TextSection({ blok }: TextSectionProps) {
  if (!blok.text) return null;

  const paragraphs = blok.text
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="section-padding container-x">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans text-lg leading-relaxed"
              style={{
                color: "rgba(245,244,240,0.75)",
                marginBottom: i < paragraphs.length - 1 ? "1.5rem" : 0,
              }}
            >
              {p}
            </p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
