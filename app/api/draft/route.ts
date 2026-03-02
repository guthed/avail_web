import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Mappar Storyblok-sluggar till Next.js-rutter
const slugToPath: Record<string, string> = {
  home: "/",
  tjanster: "/tjanster",
  case: "/case",
  "hur-vi-jobbar": "/hur-vi-jobbar",
  sakerhet: "/sakerhet",
  "om-avail": "/om-avail",
  kontakt: "/kontakt",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "home";

  if (secret !== process.env.STORYBLOK_PREVIEW_SECRET) {
    return new Response("Ogiltig token", { status: 401 });
  }

  (await draftMode()).enable();

  // Slå upp sökvägen, annars lägg till ledande slash
  const path = slugToPath[slug] ?? (slug.startsWith("/") ? slug : `/${slug}`);
  redirect(path);
}
