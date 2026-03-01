import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-light-gray/10 section-padding container-x">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-serif text-2xl text-off-white mb-3">Avail</p>
            <p className="font-sans text-sm text-gray leading-relaxed">
              AI-lösningar som gör intern data och dokumentation sökbar, användbar och handlingsbar.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs text-gray uppercase tracking-widest mb-4">Tjänster</p>
            <ul className="space-y-2">
              {[
                "Sökbar intern kunskap",
                "AI-driven analys",
                "Automatiserade chattbotar",
                "Kampanjsajter",
                "SEO och webbanalys",
              ].map((label) => (
                <li key={label}>
                  <Link
                    href="/tjanster"
                    className="font-sans text-sm text-gray hover:text-off-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs text-gray uppercase tracking-widest mb-4">Kontakt</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:team@availsthlm.se"
                  className="font-sans text-sm text-mint hover:text-mint/70 transition-colors"
                >
                  team@availsthlm.se
                </a>
              </li>
              <li className="font-sans text-sm text-gray">Stockholm, Sverige</li>
              <li>
                <Link
                  href="/sakerhet"
                  className="font-sans text-sm text-gray hover:text-off-white transition-colors"
                >
                  Säkerhet & GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-light-gray/10">
          <p className="font-sans text-xs text-gray">
            © {new Date().getFullYear()} Avail STHLM AB. Org.nr 559XXX-XXXX.
          </p>
          <p className="font-serif text-xs italic text-gray">Insikt över instinkt.</p>
        </div>
      </div>
    </footer>
  );
}
