import { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;
  
  const routes = ['', '/about', '/programs', '/admissions', '/gallery', '/faculty', '/testimonials', '/contact', '/faq'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  for (const route of routes) {
    for (const locale of routing.locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
