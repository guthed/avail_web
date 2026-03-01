import Link from "next/link";

interface CaseCardProps {
  slug?: string;
  blok?: {
    kundnamn?: string;
    rubrik?: string;
    utmaning?: string;
    resultat?: string;
    kategori?: string;
  };
  rubrik?: string;
  resultat?: string;
  kategori?: string;
}

export default function CaseCard({ blok, slug, rubrik, resultat, kategori }: CaseCardProps) {
  const title = blok?.rubrik ?? rubrik;
  const res = blok?.resultat ?? resultat;
  const cat = blok?.kategori ?? kategori;

  return (
    <Link href={slug ? `/case/${slug}` : "/case"} className="block group">
      <article className="border border-light-gray/15 rounded-lg p-8 h-full transition-all duration-300 hover:border-lavender/30 bg-[#161616]">
        {cat && (
          <p className="font-sans text-xs text-gray uppercase tracking-widest mb-4">{cat}</p>
        )}
        <h3 className="font-serif text-2xl text-off-white mb-4 group-hover:text-lavender transition-colors">
          {title}
        </h3>
        {res && (
          <p className="font-sans text-sm text-off-white/60 leading-relaxed">{res}</p>
        )}
        <p className="font-sans text-sm text-mint mt-6">Läs mer →</p>
      </article>
    </Link>
  );
}
