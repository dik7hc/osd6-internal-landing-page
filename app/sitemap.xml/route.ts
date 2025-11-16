import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.bosch.com.vn';
  
  const staticRoutes = [
    { url: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '1.0' },
    { url: '/en/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '0.9' },
    { url: '/products-and-services/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.8' },
    { url: '/about-company/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.7' },
    { url: '/careers/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.7' },
    { url: '/contact/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.6' },
    { url: '/corporate-information/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.5' },
    { url: '/data-protection-policy/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.5' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
