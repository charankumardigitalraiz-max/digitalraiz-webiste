import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.digitalraiz.co.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Example of a path you might want to hide from search engines
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
