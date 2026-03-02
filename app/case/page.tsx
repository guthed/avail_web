import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { fetchStory } from "@/lib/storyblok";
import DynamicRenderer from "@/components/storyblok/DynamicRenderer";

export const metadata: Metadata = generatePageMetadata({
  title: "Case",
  description:
    "Se hur vi hjälpt organisationer som Foodmark, Sharp och TT Nyhetsbyrån att göra sin data användbar med AI.",
  path: "/case",
});

export default async function CasePage() {
  const story = await fetchStory("case");
  const blocks = story?.content?.body ?? [];

  return <DynamicRenderer blocks={blocks} />;
}
