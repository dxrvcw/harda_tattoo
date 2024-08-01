import styles from './RequestLinkButton.module.css'
import { TransitionLink } from './TransitionLink/TransitionLink'

interface IRequestLinkButton {
	href: string
	text: string
}

export function RequestLinkButton({ href, text }: IRequestLinkButton) {
	return (
		<TransitionLink href={href}>
			<button className={styles.button}>
				<p className={styles.button_text}>{text}</p>
			</button>
		</TransitionLink>
	)
}
