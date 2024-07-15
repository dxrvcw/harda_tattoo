import { motion } from 'framer-motion'
import styles from './AnimatedLink.module.css'

interface IAnimatedLink {
	href: string
	children: React.ReactNode
}

export function AnimatedLink({ children, href }: IAnimatedLink) {
	return (
		<motion.li
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			className={styles.list_item}
		>
			<a href={href} className={styles.link}>
				{children}
			</a>
		</motion.li>
	)
}
