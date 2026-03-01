import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = () => {
  storyblokInit({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
  });

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { storyblokApi } = require("@storyblok/react/rsc");
  return storyblokApi;
};

export async function fetchStory(slug: string) {
  try {
    const sb = getStoryblokApi();
    const { data } = await sb.get(`cdn/stories/${slug}`, {
      version: "draft",
    });
    return data.story;
  } catch {
    return null;
  }
}

export async function fetchStories(startsWith: string) {
  try {
    const sb = getStoryblokApi();
    const { data } = await sb.get("cdn/stories", {
      starts_with: startsWith,
      version: "draft",
    });
    return data.stories;
  } catch {
    return [];
  }
}
