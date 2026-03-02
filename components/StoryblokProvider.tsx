"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import Script from "next/script";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  bridge: false, // Vi laddar bridge-scriptet manuellt nedan
});

export default function StoryblokProvider({
  children,
  isDraft,
}: {
  children: React.ReactNode;
  isDraft: boolean;
}) {
  const router = useRouter();

  const initBridge = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (!w.StoryblokBridge) return;
    const bridge = new w.StoryblokBridge();
    bridge.on(["input", "saved", "published", "change", "unpublished"], () => {
      router.refresh();
    });
  }, [router]);

  // Fallback: om bridge redan finns i window (hot reload / klient-navigation)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (isDraft && (window as any).StoryblokBridge) initBridge();
  }, [initBridge, isDraft]);

  return (
    <>
      {isDraft && (
        <Script
          src="//app.storyblok.com/f/storyblok-v2-latest.js"
          strategy="afterInteractive"
          onLoad={initBridge}
        />
      )}
      {children}
    </>
  );
}
