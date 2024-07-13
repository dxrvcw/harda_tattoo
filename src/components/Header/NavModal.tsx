import Link from 'next/link'
import styles from './NavModal.module.css'

interface INavModalProps {
	setOpen: (arg0: boolean) => void
}

export function NavModal({ setOpen }: INavModalProps) {
	return (
		<nav className={styles.modal}>
			<div className={styles.btn_container}>
				<button className={styles.close_btn} onClick={() => setOpen(false)}>
					CLOSE
				</button>
			</div>

			<ul className={styles.list}>
				<li>
					<a
						className={styles.list_item}
						href='#'
						onClick={() => setOpen(false)}
					>
						ABOUT
					</a>
				</li>
				<li>
					<a
						className={styles.list_item}
						href='#'
						onClick={() => setOpen(false)}
					>
						PORTFOLIO
					</a>
				</li>
				<li>
					<a
						className={styles.list_item}
						href='#'
						onClick={() => setOpen(false)}
					>
						REVIEWS
					</a>
				</li>
				<li>
					<a
						className={styles.list_item}
						href='#'
						onClick={() => setOpen(false)}
					>
						PRE-CARE
					</a>
				</li>
				<li>
					<a
						className={styles.list_item}
						href='#'
						onClick={() => setOpen(false)}
					>
						CONTACT
					</a>
				</li>
			</ul>

			<Link className={styles.request_btn} href={'/request'}>
				SEND REQUEST
			</Link>

			<div className={styles.nav_footer}>
				<a href='#' className={styles.social_container}>
					<p className={styles.social_label}>EMAIL</p>
					<p className={styles.social}>hardatattoo@gmail.com</p>
				</a>
				<a href='#' className={styles.social_container}>
					<p className={styles.social_label}>INSTAGRAM</p>
					<p className={styles.social}>@hardatattoo</p>
				</a>
			</div>
		</nav>
	)
}
