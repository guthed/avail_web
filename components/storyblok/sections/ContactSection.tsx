import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/app/kontakt/ContactForm";

interface ContactSectionProps {
  blok: {
    _uid: string;
    email?: string;
    location?: string;
    location_sub?: string;
    response_time?: string;
    cta_box_heading?: string;
    cta_box_text?: string;
  };
}

export default function ContactSection({ blok }: ContactSectionProps) {
  return (
    <section className="section-padding container-x">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-10">
              {blok.email && (
                <div>
                  <p
                    className="font-sans text-xs uppercase tracking-widest mb-4"
                    style={{ color: "#888883" }}
                  >
                    E-post
                  </p>
                  <a
                    href={`mailto:${blok.email}`}
                    className="font-sans text-lg transition-colors"
                    style={{ color: "#7EEBC0" }}
                  >
                    {blok.email}
                  </a>
                </div>
              )}
              {blok.location && (
                <div>
                  <p
                    className="font-sans text-xs uppercase tracking-widest mb-4"
                    style={{ color: "#888883" }}
                  >
                    Plats
                  </p>
                  <p
                    className="font-sans text-base"
                    style={{ color: "#F5F4F0" }}
                  >
                    {blok.location}
                  </p>
                  {blok.location_sub && (
                    <p
                      className="font-sans text-sm mt-1"
                      style={{ color: "#888883" }}
                    >
                      {blok.location_sub}
                    </p>
                  )}
                </div>
              )}
              {blok.response_time && (
                <div>
                  <p
                    className="font-sans text-xs uppercase tracking-widest mb-4"
                    style={{ color: "#888883" }}
                  >
                    Svarstid
                  </p>
                  <p
                    className="font-sans text-base"
                    style={{ color: "#F5F4F0" }}
                  >
                    {blok.response_time}
                  </p>
                </div>
              )}
              {(blok.cta_box_heading || blok.cta_box_text) && (
                <div
                  className="border rounded-lg p-6"
                  style={{
                    borderColor: "rgba(184,169,232,0.2)",
                    backgroundColor: "rgba(184,169,232,0.05)",
                  }}
                >
                  {blok.cta_box_heading && (
                    <p
                      className="font-serif text-base italic mb-3"
                      style={{ color: "#B8A9E8" }}
                    >
                      {blok.cta_box_heading}
                    </p>
                  )}
                  {blok.cta_box_text && (
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "#888883" }}
                    >
                      {blok.cta_box_text}
                    </p>
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
