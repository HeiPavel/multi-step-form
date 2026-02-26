import { MetadataRoute } from 'next'
import { getBaseUrl } from './util/getBaseUrl'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: getBaseUrl()
  }
}