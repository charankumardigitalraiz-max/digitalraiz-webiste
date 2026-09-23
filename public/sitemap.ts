import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.digitalraiz.co.in';
  const lastModified = new Date('2026-09-19');

  const routes = [
    { path: '', priority: 1.0 },
    { path: '/portfolio', priority: 0.9 },
    { path: '/about-us', priority: 0.9 },
    { path: '/insights/blog', priority: 0.8 },
    { path: '/contact', priority: 0.9 },
    { path: '/services', priority: 0.9 },
    { path: '/website-development-company-in-hyderabad', priority: 0.9 },
    { path: '/mobile-app-development-company-in-hyderabad', priority: 0.9 },
    { path: '/ai-ml-generative-ai-services', priority: 0.9 },
    { path: '/data-analytics-business-intelligence', priority: 0.9 },
    { path: '/cybersecurity-services', priority: 0.9 },
    { path: '/sap-cloud-services', priority: 0.9 },
    { path: '/salesforce-services', priority: 0.9 },
    { path: '/cloud-devops-services', priority: 0.9 },
    { path: '/software-testing-quality-assurance', priority: 0.9 },
    { path: '/digital-marketing-services-in-hyderabad', priority: 0.9 },
    { path: '/privacy-policy', priority: 0.9 },
    { path: '/terms-and-conditions', priority: 0.9 },
    { path: '/insights/blog/nextjs-15-server-components-building-fast-web-applications', priority: 0.7 },
    { path: '/insights/blog/the-ai-seo-revolution-how-generative-search-optimization-controls-ranking', priority: 0.7 },
    { path: '/insights/blog/mobile-application-security-and-cross-platform-ux-architecture-2026', priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: lastModified,
    priority: route.priority,
  }));
}

