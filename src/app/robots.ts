import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/request-form/thanks'],
    },
    sitemap: 'https://besttrailerparts.net/sitemap.xml',
    host: 'https://besttrailerparts.net',
  };
}
