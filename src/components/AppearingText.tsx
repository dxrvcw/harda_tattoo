'use client'

import { motion } from 'framer-motion'

interface AppearingTextProps {
	text: string
	className?: string
	delay?: number
	duration?: number
	wholeDelay?: number
}

export function AppearingText({
	text,
	className,
	delay = 0.02,
	duration = 0.6,
	wholeDelay = 0,
}: AppearingTextProps) {
	return (
		<div className={className} style={{ overflow: 'hidden' }}>
			{text.split('').map((char, index) => (
				<motion.span
					key={index}
					initial={{ y: '99.7%' }}
					whileInView={{ y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: wholeDelay + index * delay, duration }}
					style={{ display: 'inline-block' }}
				>
					{char !== ' ' ? char : <>&nbsp;</>}
				</motion.span>
			))}
		</div>
	)
}
