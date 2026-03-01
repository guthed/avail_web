import type { Metadata } from "next";

export function generatePageMetadata({
  title,
  description,
  path,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
}): Metadata {
  const url = `https://availsthlm.se${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: ["/og-image.png"],
    },
  };
}
