'use client'

import { motion } from 'framer-motion'

interface AppearingTextProps {
	text: string
	className?: string
	delay?: number
	duration?: number
}

export function AppearingText({
	text,
	className,
	delay = 0.02,
	duration = 0.6,
}: AppearingTextProps) {
	return (
		<div className={className} style={{ overflow: 'hidden' }}>
			{text.split('').map((char, index) => (
				<motion.span
					key={index}
					initial={{ y: '99.7%' }}
					whileInView={{ y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * delay, duration }}
					style={{ display: 'inline-block' }}
				>
					{char !== ' ' ? char : <>&nbsp;</>}
				</motion.span>
			))}
		</div>
	)
}
