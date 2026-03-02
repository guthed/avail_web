import type { Metadata } from "next";
import { fetchStory } from "@/lib/storyblok";
import DynamicRenderer from "@/components/storyblok/DynamicRenderer";

export const metadata: Metadata = {
  title: "Avail STHLM AB – AI-lösningar som gör data användbar",
  description:
    "AI-lösningar som gör intern data och dokumentation sökbar, användbar och direkt handlingsbar. Stockholm.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const story = await fetchStory("home");
  const blocks = story?.content?.body ?? [];

  return <DynamicRenderer blocks={blocks} />;
}
