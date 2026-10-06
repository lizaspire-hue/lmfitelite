import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.lmfitelitecoaching.space/sitemap.xml',
    host: 'https://www.lmfitelitecoaching.space',
  }
}
