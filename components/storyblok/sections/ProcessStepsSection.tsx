import ScrollReveal from "@/components/animations/ScrollReveal";
import ProcessStep from "@/components/storyblok/ProcessStep";

interface ProcessStepItem {
  _uid: string;
  nummer: string;
  titel: string;
  beskrivning: string;
}

interface ProcessStepsSectionProps {
  blok: {
    _uid: string;
    heading?: string;
    steps?: ProcessStepItem[];
  };
}

export default function ProcessStepsSection({ blok }: ProcessStepsSectionProps) {
  const steps = blok.steps ?? [];
  if (steps.length === 0) return null;

  // HowTo JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: blok.heading ?? "Process",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      name: s.titel,
      text: s.beskrivning,
      position: i + 1,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-padding container-x">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={step._uid}>
                <ProcessStep
                  nummer={step.nummer}
                  titel={step.titel}
                  beskrivning={step.beskrivning}
                />
                {i < steps.length - 1 && (
                  <div
                    className="mt-16 ml-16 h-px"
                    style={{ backgroundColor: "rgba(224,223,219,0.1)" }}
                  />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
