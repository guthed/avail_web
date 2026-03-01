interface ContactBlockProps {
  blok?: {
    rubrik?: string;
    email?: string;
    telefon?: string;
    adress?: string;
  };
  rubrik?: string;
  email?: string;
  telefon?: string;
  adress?: string;
}

export default function ContactBlock({
  blok,
  rubrik,
  email,
  telefon,
  adress,
}: ContactBlockProps) {
  const title = blok?.rubrik ?? rubrik;
  const mail = blok?.email ?? email;
  const phone = blok?.telefon ?? telefon;
  const address = blok?.adress ?? adress;

  return (
    <div className="border border-light-gray/15 rounded-lg p-8 bg-[#161616]">
      {title && (
        <h3 className="font-serif text-2xl text-off-white mb-6">{title}</h3>
      )}
      <ul className="space-y-3">
        {mail && (
          <li>
            <a
              href={`mailto:${mail}`}
              className="font-sans text-sm text-mint hover:text-mint/70 transition-colors"
            >
              {mail}
            </a>
          </li>
        )}
        {phone && (
          <li>
            <a
              href={`tel:${phone}`}
              className="font-sans text-sm text-off-white/70 hover:text-off-white transition-colors"
            >
              {phone}
            </a>
          </li>
        )}
        {address && (
          <li className="font-sans text-sm text-gray">{address}</li>
        )}
      </ul>
    </div>
  );
}
