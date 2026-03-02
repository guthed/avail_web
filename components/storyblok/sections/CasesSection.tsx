import ScrollReveal from "@/components/animations/ScrollReveal";
import CaseCard from "@/components/storyblok/CaseCard";

interface CaseItem {
  _uid: string;
  rubrik: string;
  kategori: string;
  resultat: string;
  slug: string;
}

interface CasesSectionProps {
  blok: {
    _uid: string;
    cases?: CaseItem[];
  };
}

export default function CasesSection({ blok }: CasesSectionProps) {
  const cases = blok.cases ?? [];
  if (cases.length === 0) return null;

  return (
    <section className="section-padding container-x">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal
          stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cases.map((c) => (
            <CaseCard
              key={c._uid}
              slug={c.slug}
              rubrik={c.rubrik}
              kategori={c.kategori}
              resultat={c.resultat}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
