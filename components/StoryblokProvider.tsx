"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { useCallback, useEffect } from "react";
import Script from "next/script";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  bridge: false,
});

export default function StoryblokProvider({
  children,
  isDraft,
}: {
  children: React.ReactNode;
  isDraft: boolean;
}) {
  const initBridge = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (!w.StoryblokBridge) return;
    const bridge = new w.StoryblokBridge();
    bridge.on(["saved", "published", "change"], () => {
      window.location.reload();
    });
  }, []);

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
