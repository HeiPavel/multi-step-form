import { MetadataRoute } from 'next'
import { getBaseUrl } from './util/getBaseUrl'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getBaseUrl()
    }
  ]
}