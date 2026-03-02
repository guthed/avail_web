import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { fetchStory } from "@/lib/storyblok";
import DynamicRenderer from "@/components/storyblok/DynamicRenderer";

export const metadata: Metadata = generatePageMetadata({
  title: "Hur vi jobbar",
  description:
    "Fyra tydliga faser: Identifiering, Datainsamling, AI-fas och Analys. Prototyp på 4 dagar. Leverans utan jargong.",
  path: "/hur-vi-jobbar",
});

export default async function HurViJobbarPage() {
  const story = await fetchStory("hur-vi-jobbar");
  const blocks = story?.content?.body ?? [];

  return <DynamicRenderer blocks={blocks} />;
}
