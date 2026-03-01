interface HeroProps {
  blok?: {
    rubrik?: string;
    undertitel?: string;
  };
  rubrik?: string;
  undertitel?: string;
}

export default function Hero({ blok, rubrik, undertitel }: HeroProps) {
  const title = blok?.rubrik ?? rubrik ?? "Insikt över instinkt.";
  const subtitle =
    blok?.undertitel ??
    undertitel ??
    "AI-lösningar som gör intern data och dokumentation sökbar, användbar och direkt handlingsbar.";

  return (
    <section className="min-h-screen flex items-end section-padding container-x pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <h1
          className="font-serif mb-8 italic"
          style={{
            color: "#B8A9E8",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>
        <p className="font-sans text-xl font-light max-w-2xl leading-relaxed text-gray">
          {subtitle}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/kontakt"
            className="font-sans text-sm font-medium px-6 py-3 rounded transition-colors bg-mint text-black hover:bg-mint/80"
          >
            Starta ett projekt
          </a>
          <a
            href="/tjanster"
            className="font-sans text-sm font-normal px-6 py-3 rounded border transition-colors text-off-white border-light-gray/30 hover:border-light-gray/70"
          >
            Se tjänster
          </a>
        </div>
      </div>
    </section>
  );
}
