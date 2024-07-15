import styles from './AnimatedLink.module.css'

interface IAnimatedLink {
	href: string
	children: React.ReactNode
	className?: string
}

export function AnimatedLink({ className, children, href }: IAnimatedLink) {
	return (
		<li className={styles.list_item + ' ' + className}>
			<a href={href} className={styles.link}>
				{children}
			</a>
		</li>
	)
}
