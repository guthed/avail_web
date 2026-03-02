import HeroSection from "./sections/HeroSection";
import CTASection from "./sections/CTASection";
import StatsSection from "./sections/StatsSection";
import SecurityBlurbSection from "./sections/SecurityBlurbSection";
import SocialProofSection from "./sections/SocialProofSection";
import TextSection from "./sections/TextSection";
import GridSection from "./sections/GridSection";
import ServiceGroupsSection from "./sections/ServiceGroupsSection";
import ProcessStepsSection from "./sections/ProcessStepsSection";
import FAQSection from "./sections/FAQSection";
import TempoSection from "./sections/TempoSection";
import CasesSection from "./sections/CasesSection";
import ContactSection from "./sections/ContactSection";

/* eslint-disable @typescript-eslint/no-explicit-any */
const componentMap: Record<string, React.FC<{ blok: any }>> = {
  hero_section: HeroSection,
  cta_section: CTASection,
  stats_section: StatsSection,
  security_blurb_section: SecurityBlurbSection,
  social_proof_section: SocialProofSection,
  text_section: TextSection,
  grid_section: GridSection,
  service_groups_section: ServiceGroupsSection,
  process_steps_section: ProcessStepsSection,
  faq_section: FAQSection,
  tempo_section: TempoSection,
  cases_section: CasesSection,
  contact_section: ContactSection,
};

interface Block {
  _uid: string;
  component: string;
  [key: string]: any;
}

export default function DynamicRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block) => {
        const Component = componentMap[block.component];
        if (!Component) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`DynamicRenderer: unknown component "${block.component}"`);
          }
          return null;
        }
        return <Component key={block._uid} blok={block} />;
      })}
    </>
  );
}
