import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { fetchStory } from "@/lib/storyblok";
import DynamicRenderer from "@/components/storyblok/DynamicRenderer";

export const metadata: Metadata = generatePageMetadata({
  title: "Om Avail",
  description:
    "Avail STHLM AB. Teknisk kompetens och strategiskt tänkande. Vi bygger AI-lösningar som faktiskt används.",
  path: "/om-avail",
});

export default async function OmAvailPage() {
  const story = await fetchStory("om-avail");
  const blocks = story?.content?.body ?? [];

  return <DynamicRenderer blocks={blocks} />;
}
