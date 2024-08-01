import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './NavModal.module.css'

interface INavModalProps {
	setOpen: (arg0: boolean) => void
}

export function NavModal({ setOpen }: INavModalProps) {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		if (!isVisible) {
			setTimeout(() => setOpen(false), 500)
		}
	}, [isVisible, setOpen])

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.nav
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, type: 'spring' }}
					className={styles.modal}
				>
					<div className={styles.btn_container}>
						<button
							className={styles.close_btn}
							onClick={() => setIsVisible(false)}
						>
							CLOSE
						</button>
					</div>

					<ul className={styles.list}>
						<li>
							<a
								className={styles.list_item}
								href='#about'
								onClick={() => setIsVisible(false)}
							>
								ABOUT
							</a>
						</li>
						<li>
							<a
								className={styles.list_item}
								href='#portfolio'
								onClick={() => setIsVisible(false)}
							>
								PORTFOLIO
							</a>
						</li>

						<li>
							<a
								className={styles.list_item}
								href='#pre-care'
								onClick={() => setIsVisible(false)}
							>
								PRE-CARE
							</a>
						</li>
						<li>
							<a
								className={styles.list_item}
								href='#contact'
								onClick={() => setIsVisible(false)}
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
				</motion.nav>
			)}
		</AnimatePresence>
	)
}
