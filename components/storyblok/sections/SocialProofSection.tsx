import ScrollReveal from "@/components/animations/ScrollReveal";

interface SocialProofSectionProps {
  blok: {
    _uid: string;
    label?: string;
    customers?: string;
  };
}

export default function SocialProofSection({ blok }: SocialProofSectionProps) {
  const names = (blok.customers ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (names.length === 0) return null;

  return (
    <section
      className="section-padding container-x border-t"
      style={{ borderColor: "rgba(224,223,219,0.1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-10">
          <p
            className="font-sans text-xs uppercase tracking-widest"
            style={{ color: "#888883" }}
          >
            {blok.label ?? "Uppdragsgivare"}
          </p>
        </ScrollReveal>
        <ScrollReveal stagger className="flex flex-wrap gap-x-10 gap-y-4">
          {names.map((name) => (
            <span
              key={name}
              className="font-sans text-lg font-light"
              style={{ color: "rgba(245,244,240,0.3)" }}
            >
              {name}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
