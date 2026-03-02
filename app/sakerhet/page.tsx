import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { fetchStory } from "@/lib/storyblok";
import DynamicRenderer from "@/components/storyblok/DynamicRenderer";

export const metadata: Metadata = generatePageMetadata({
  title: "Säkerhet",
  description:
    "Data i Sverige. Ingen träning på kunddata. EU-hostade AI-modeller. Hur vi hanterar säkerhet och integritet.",
  path: "/sakerhet",
});

export default async function SakerhetPage() {
  const story = await fetchStory("sakerhet");
  const blocks = story?.content?.body ?? [];

  return <DynamicRenderer blocks={blocks} />;
}
