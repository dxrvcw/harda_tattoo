import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer className={styles.footer_container + ' container'}>
			<p className={styles.footer_text}>© hardatattoo. 2024</p>
			<a
				href='https://www.linkedin.com/in/oleksandr-yukhno-904422305/'
				className={styles.footer_link}
			>
				Website made with {'<3'} by{' '}
				<span className={styles.underlined}>Oleksandr Yukhno</span>
			</a>
		</footer>
	)
}
