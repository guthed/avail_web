import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { fetchStory } from "@/lib/storyblok";
import DynamicRenderer from "@/components/storyblok/DynamicRenderer";

export const metadata: Metadata = generatePageMetadata({
  title: "Kontakt",
  description:
    "Berätta om er utmaning. Vi svarar inom en arbetsdag med ett konkret förslag.",
  path: "/kontakt",
});

export default async function KontaktPage() {
  const story = await fetchStory("kontakt");
  const blocks = story?.content?.body ?? [];

  return <DynamicRenderer blocks={blocks} />;
}
