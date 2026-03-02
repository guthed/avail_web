import ScrollReveal from "@/components/animations/ScrollReveal";
import SecurityFAQ from "@/components/storyblok/SecurityFAQ";

interface FAQItem {
  _uid: string;
  fraga: string;
  svar: string;
}

interface FAQSectionProps {
  blok: {
    _uid: string;
    heading?: string;
    faqs?: FAQItem[];
  };
}

export default function FAQSection({ blok }: FAQSectionProps) {
  const faqs = blok.faqs ?? [];
  if (faqs.length === 0) return null;

  // FAQPage JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.fraga,
      acceptedAnswer: { "@type": "Answer", text: f.svar },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="section-padding container-x border-t"
        style={{ borderColor: "rgba(224,223,219,0.1)" }}
      >
        <div className="max-w-3xl mx-auto">
          {blok.heading && (
            <ScrollReveal className="mb-10">
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
            </ScrollReveal>
          )}
          <div>
            {faqs.map((faq) => (
              <SecurityFAQ key={faq._uid} fraga={faq.fraga} svar={faq.svar} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
