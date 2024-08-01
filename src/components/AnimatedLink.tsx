import styles from './AnimatedLink.module.css'
import { TransitionLink } from './TransitionLink/TransitionLink'

interface IAnimatedLink {
	href: string
	children: React.ReactNode
	className?: string
}

export function AnimatedLink({ className, children, href }: IAnimatedLink) {
	return (
		<li className={styles.list_item + ' ' + className}>
			<TransitionLink href={href} className={styles.link}>
				{children}
			</TransitionLink>
		</li>
	)
}
