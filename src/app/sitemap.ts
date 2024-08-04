import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://harda-tattoo.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://harda-tattoo.vercel.app/request',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	]
}
