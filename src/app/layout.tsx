import { Header } from '@/components/Header/Header'
import { HeaderFixed } from '@/components/Header/HeaderFixed'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Harda Tattoo',
	description:
		'Discover Sofia Harda portfolio featuring unique, personalized freehand and freestyle tattoos. Send your tattoo request directly for a seamless experience. Explore now!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk'>
			<body className={dmSans.className}>
				<Header />
				<HeaderFixed />
				{children}
			</body>
		</html>
	)
}
