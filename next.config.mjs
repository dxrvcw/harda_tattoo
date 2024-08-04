/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['grammy'],
	},
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: 'https://harda-tattoo.vercel.app',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'POST',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'Content-Type, Accept',
					},
				],
			},
		]
	},
}

export default nextConfig
