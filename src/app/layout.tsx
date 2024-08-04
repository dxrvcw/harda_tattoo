import { SEO_CONSTANTS } from '@/constants'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | Harda Tattoo Studio',
		default: 'Harda Tattoo Studio',
	},
	description: SEO_CONSTANTS.SITE_DESCRIPTION,
	keywords: SEO_CONSTANTS.SITE_KEYWORDS,
	creator: 'Sofia Harda',
	publisher: 'Sofia Harda',
	robots: 'index, follow',
	openGraph: {
		title: 'Sofia Harda – Unique Freehand and Freestyle Tattoos',
		description: SEO_CONSTANTS.SITE_DESCRIPTION,
		url: 'https://harda-tattoo.vercel.app',
		type: 'website',
		siteName: 'Harda Tattoo',
		images: [
			{
				url: '/og.jpg',
				width: 1200,
				height: 630,
				alt: 'site-preview',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sofia Harda – Unique Freehand and Freestyle Tattoos',
		description: SEO_CONSTANTS.SITE_DESCRIPTION,
		images: [
			{
				url: '/og.jpg',
				width: 1200,
				height: 630,
				alt: 'site-preview',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk'>
			<body className={dmSans.className}>
				<div className='transition' />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
