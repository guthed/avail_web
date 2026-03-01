interface ProcessStepProps {
  blok?: {
    nummer?: string;
    titel?: string;
    beskrivning?: string;
  };
  nummer?: string;
  titel?: string;
  beskrivning?: string;
}

export default function ProcessStep({ blok, nummer, titel, beskrivning }: ProcessStepProps) {
  const num = blok?.nummer ?? nummer;
  const title = blok?.titel ?? titel;
  const desc = blok?.beskrivning ?? beskrivning;

  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
      <span
        className="font-serif text-4xl leading-none"
        style={{ color: "#7EEBC0" }}
      >
        {num}
      </span>
      <div>
        <h3 className="font-serif text-2xl mb-3" style={{ color: "#F5F4F0" }}>
          {title}
        </h3>
        <p className="font-sans text-base leading-relaxed" style={{ color: "#888883" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
