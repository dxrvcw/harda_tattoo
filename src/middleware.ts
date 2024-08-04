import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = ['https://harda-tattoo.vercel.app']

const corsOptions = {
	'Access-Control-Allow-Methods': 'GET, POST',
	'Access-Control-Allow-Headers': 'Content-Type',
}

export function middleware(request: NextRequest) {
	const origin = request.headers.get('origin') ?? ''
	const isAllowedOrigin = allowedOrigins.includes(origin)

	const response = NextResponse.next()

	if (isAllowedOrigin) {
		response.headers.set('Access-Control-Allow-Origin', origin)
	}

	Object.entries(corsOptions).forEach(([key, value]) => {
		response.headers.set(key, value)
	})

	return response
}

export const config = {
	matcher: '/api/:path*',
}
