import styles from './Button.module.css'

interface IButton {
	onClick: () => void
	className?: string
	children?: React.ReactNode
}

export function Button({ onClick, className, children }: IButton) {
	return (
		<button onClick={onClick} className={className + ' ' + styles.button}>
			<p>{children}</p>
		</button>
	)
}
