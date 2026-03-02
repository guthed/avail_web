"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  bridge: true,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (!w.StoryblokBridge) return;
    const bridge = new w.StoryblokBridge();
    bridge.on(["input", "saved", "published", "change", "unpublished"], () => {
      router.refresh();
    });
  }, [router]);

  return <>{children}</>;
}
