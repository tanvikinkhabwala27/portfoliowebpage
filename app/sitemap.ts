import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tanvikinkhabwala.com';
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/analytics-lab`, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
