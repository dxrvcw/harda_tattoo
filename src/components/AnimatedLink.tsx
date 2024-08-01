import styles from './AnimatedLink.module.css'

interface IAnimatedLink {
	href: string
	children: React.ReactNode
	className?: string
	type?: string
}

export function AnimatedLink({
	className,
	children,
	href,
	type,
}: IAnimatedLink) {
	return (
		<li className={styles.list_item + ' ' + className}>
			<a href={href} className={styles.link} type={type}>
				{children}
			</a>
		</li>
	)
}
