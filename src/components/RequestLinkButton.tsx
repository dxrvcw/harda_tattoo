import Link from 'next/link'
import styles from './RequestLinkButton.module.css'

interface IRequestLinkButton {
	href: string
	text: string
}

export function RequestLinkButton({ href, text }: IRequestLinkButton) {
	return (
		<Link href={href}>
			<button className={styles.button}>
				<p className={styles.button_text}>{text}</p>
			</button>
		</Link>
	)
}
