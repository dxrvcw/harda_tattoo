'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface ITransitionLink {
	className?: string
	href: string
	children: React.ReactNode
	props?: LinkProps
}

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export function TransitionLink({
	className,
	href,
	children,
	...props
}: ITransitionLink) {
	const router = useRouter()
	const pathname = usePathname()

	const handleTransition = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		if (pathname === href || href.startsWith(pathname + '#')) return

		e.preventDefault()

		const animatedDiv = document.querySelector('.transition')

		animatedDiv?.classList.toggle('show')

		await sleep(500)
		router.push(href)
		await sleep(700)

		animatedDiv?.classList.toggle('show')
	}

	return (
		<>
			<Link
				onClick={handleTransition}
				href={href}
				className={className}
				{...props}
			>
				{children}
			</Link>
		</>
	)
}
