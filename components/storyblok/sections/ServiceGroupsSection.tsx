import ScrollReveal from "@/components/animations/ScrollReveal";

interface ServiceCard {
  _uid: string;
  titel?: string;
  teknisk_term?: string;
  problem?: string;
  losning?: string;
  output?: string;
  exempel_1?: string;
  exempel_2?: string;
}

interface ServiceGroup {
  _uid: string;
  group_name?: string;
  intro?: string;
  services?: ServiceCard[];
}

interface ServiceGroupsSectionProps {
  blok: {
    _uid: string;
    label?: string;
    heading?: string;
    service_groups?: ServiceGroup[];
    variant?: string; // "compact" | "detailed"
  };
}

function CompactCard({ item }: { item: ServiceCard }) {
  return (
    <article
      key={item._uid}
      className="border rounded-lg p-8 transition-all duration-300"
      style={{
        backgroundColor: "#161616",
        borderColor: "rgba(224,223,219,0.15)",
      }}
    >
      <h4 className="font-serif text-xl mb-1" style={{ color: "#F5F4F0" }}>
        {item.titel}
      </h4>
      {item.teknisk_term && (
        <p className="font-sans text-xs mb-5" style={{ color: "#888883" }}>
          {item.teknisk_term}
        </p>
      )}
      {item.problem && (
        <p
          className="font-sans text-sm leading-relaxed mb-4"
          style={{ color: "rgba(245,244,240,0.6)" }}
        >
          {item.problem}
        </p>
      )}
      {item.output && (
        <p
          className="font-sans text-sm leading-relaxed font-medium"
          style={{ color: "#7EEBC0" }}
        >
          {item.output}
        </p>
      )}
    </article>
  );
}

function DetailedCard({ service }: { service: ServiceCard }) {
  return (
    <article
      className="border rounded-lg p-8 md:p-12"
      style={{
        backgroundColor: "#161616",
        borderColor: "rgba(224,223,219,0.15)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="font-serif text-3xl mb-2" style={{ color: "#F5F4F0" }}>
            {service.titel}
          </h2>
          {service.teknisk_term && (
            <p className="font-sans text-sm" style={{ color: "#888883" }}>
              {service.teknisk_term}
            </p>
          )}
        </div>
        {service.output && (
          <div className="flex items-center justify-start md:justify-end">
            <p
              className="font-sans text-base font-medium"
              style={{ color: "#7EEBC0" }}
            >
              {service.output}
            </p>
          </div>
        )}
      </div>
      {(service.problem || service.losning) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {service.problem && (
            <div>
              <p
                className="font-sans text-xs uppercase tracking-widest mb-3"
                style={{ color: "#888883" }}
              >
                Problem
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(245,244,240,0.65)" }}
              >
                {service.problem}
              </p>
            </div>
          )}
          {service.losning && (
            <div>
              <p
                className="font-sans text-xs uppercase tracking-widest mb-3"
                style={{ color: "#888883" }}
              >
                Losning
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(245,244,240,0.65)" }}
              >
                {service.losning}
              </p>
            </div>
          )}
        </div>
      )}
      {(service.exempel_1 || service.exempel_2) && (
        <div
          className="pt-6 border-t"
          style={{ borderColor: "rgba(224,223,219,0.1)" }}
        >
          <p
            className="font-sans text-xs uppercase tracking-widest mb-3"
            style={{ color: "#888883" }}
          >
            Exempel
          </p>
          <ul className="space-y-1">
            {service.exempel_1 && (
              <li
                className="font-sans text-sm"
                style={{ color: "rgba(245,244,240,0.5)" }}
              >
                &rarr; {service.exempel_1}
              </li>
            )}
            {service.exempel_2 && (
              <li
                className="font-sans text-sm"
                style={{ color: "rgba(245,244,240,0.5)" }}
              >
                &rarr; {service.exempel_2}
              </li>
            )}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function ServiceGroupsSection({ blok }: ServiceGroupsSectionProps) {
  const groups = blok.service_groups ?? [];
  if (groups.length === 0) return null;

  const isDetailed = blok.variant === "detailed";

  return (
    <>
      {/* Optional heading */}
      {(blok.label || blok.heading) && (
        <section className="section-padding container-x pb-0">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              {blok.label && (
                <p
                  className="font-sans text-xs uppercase tracking-widest mb-4"
                  style={{ color: "#888883" }}
                >
                  {blok.label}
                </p>
              )}
              {blok.heading && (
                <h2
                  className="font-serif mb-16"
                  style={{
                    color: "#F5F4F0",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    lineHeight: 1.2,
                  }}
                >
                  {blok.heading}
                </h2>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      {groups.map((group, gi) => (
        <section
          key={group._uid}
          className="section-padding container-x"
          style={
            gi > 0 && isDetailed
              ? { borderTop: "1px solid rgba(224,223,219,0.1)" }
              : undefined
          }
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className={isDetailed ? "mb-12" : "mb-0"}>
              {group.group_name && (
                <h3
                  className={`font-sans text-${isDetailed ? "xs" : "sm"} uppercase tracking-widest ${isDetailed ? "" : "mb-8"}`}
                  style={{ color: "#7EEBC0" }}
                >
                  {group.group_name}
                </h3>
              )}
              {isDetailed && group.intro && (
                <p
                  className="font-sans text-base mt-3 max-w-xl leading-relaxed"
                  style={{ color: "#888883" }}
                >
                  {group.intro}
                </p>
              )}
            </ScrollReveal>

            {isDetailed ? (
              <div className="space-y-6">
                {(group.services ?? []).map((service) => (
                  <ScrollReveal key={service._uid}>
                    <DetailedCard service={service} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal
                stagger
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(group.services ?? []).map((item) => (
                  <CompactCard key={item._uid} item={item} />
                ))}
              </ScrollReveal>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
