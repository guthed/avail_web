/* eslint-disable @typescript-eslint/no-explicit-any */
import { draftMode } from "next/headers";

const STORYBLOK_API = "https://api.storyblok.com/v2/cdn";

async function sbFetch(
  path: string,
  params: Record<string, string> = {}
): Promise<any> {
  const token = process.env.STORYBLOK_PREVIEW_TOKEN;
  if (!token) throw new Error("STORYBLOK_PREVIEW_TOKEN saknas");

  const url = new URL(`${STORYBLOK_API}/${path}`);
  url.searchParams.set("token", token);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Storyblok API ${res.status}: ${body}`);
  }
  return res.json();
}

export async function fetchStory(slug: string): Promise<any> {
  try {
    const isDraft = (await draftMode()).isEnabled;
    const data = await sbFetch(`stories/${slug}`, {
      version: isDraft ? "draft" : "published",
      ...(isDraft && { cv: String(Date.now()) }),
    });
    return data.story;
  } catch (e) {
    console.error("[fetchStory] Error:", e);
    return null;
  }
}

export async function fetchStories(startsWith: string): Promise<any[]> {
  try {
    const isDraft = (await draftMode()).isEnabled;
    const data = await sbFetch("stories", {
      starts_with: startsWith,
      version: isDraft ? "draft" : "published",
      ...(isDraft && { cv: String(Date.now()) }),
    });
    return data.stories ?? [];
  } catch (e) {
    console.error("[fetchStories] Error:", e);
    return [];
  }
}
