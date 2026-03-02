import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { fetchStory } from "@/lib/storyblok";
import DynamicRenderer from "@/components/storyblok/DynamicRenderer";

export const metadata: Metadata = generatePageMetadata({
  title: "Tjänster",
  description:
    "AI-drivna lösningar som gör komplext enkelt. Sökbar intern kunskap, AI-analys, chattbotar, kampanjsajter och SEO.",
  path: "/tjanster",
});

export default async function TjansterPage() {
  const story = await fetchStory("tjanster");
  const blocks = story?.content?.body ?? [];

  return <DynamicRenderer blocks={blocks} />;
}
