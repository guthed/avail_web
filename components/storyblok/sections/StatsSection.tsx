import ScrollReveal from "@/components/animations/ScrollReveal";

interface StatsSectionProps {
  blok: {
    _uid: string;
    stats?: Array<{
      _uid: string;
      value: string;
      label: string;
    }>;
  };
}

export default function StatsSection({ blok }: StatsSectionProps) {
  const stats = blok.stats ?? [];
  if (stats.length === 0) return null;

  return (
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
  );
}
