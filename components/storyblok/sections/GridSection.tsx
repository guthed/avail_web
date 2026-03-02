import ScrollReveal from "@/components/animations/ScrollReveal";

interface GridSectionProps {
  blok: {
    _uid: string;
    label?: string;
    heading?: string;
    items?: Array<{
      _uid: string;
      titel: string;
      text: string;
    }>;
    columns?: string;
  };
}

export default function GridSection({ blok }: GridSectionProps) {
  const items = blok.items ?? [];
  if (items.length === 0) return null;

  const cols = blok.columns === "3" ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section
      className="section-padding container-x border-t"
      style={{ borderColor: "rgba(224,223,219,0.1)" }}
    >
      <div className="max-w-7xl mx-auto">
        {(blok.label || blok.heading) && (
          <ScrollReveal className="mb-12">
            {blok.label && (
              <p
                className="font-sans text-xs uppercase tracking-widest mb-4"
                style={{ color: "#888883" }}
              >
                {blok.label}
              </p>
            )}
            {blok.heading && (
              <h2
                className="font-serif"
                style={{
                  color: "#F5F4F0",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  lineHeight: 1.2,
                }}
              >
                {blok.heading}
              </h2>
            )}
          </ScrollReveal>
        )}
        <ScrollReveal stagger className={`grid grid-cols-1 ${cols} gap-8`}>
          {items.map((item) => (
            <div
              key={item._uid}
              className="border rounded-lg p-8"
              style={{
                backgroundColor: "#161616",
                borderColor: "rgba(224,223,219,0.15)",
              }}
            >
              <h3
                className="font-serif text-xl mb-3"
                style={{ color: "#F5F4F0" }}
              >
                {item.titel}
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#888883" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
