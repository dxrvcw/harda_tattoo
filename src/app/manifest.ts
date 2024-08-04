import { SEO_CONSTANTS } from '@/constants'

export default function manifest() {
	return {
		name: 'Harda Tattoo',
		description: SEO_CONSTANTS.SITE_DESCRIPTION,
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}
}
