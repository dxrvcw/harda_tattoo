'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatedLink } from '../AnimatedLink'
import styles from './Header.module.css'
import { NavModal } from './NavModal'

export function Header({ showList }: { showList: boolean }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<header className={styles.header}>
			<button
				className={styles.open_button}
				onClick={() => setIsModalOpen(true)}
			>
				MENU
			</button>

			{showList && (
				<ul className={styles.list}>
					<AnimatedLink href='/#about'>ABOUT</AnimatedLink>
					<AnimatedLink href='/#portfolio'>PORTFOLIO</AnimatedLink>
					<AnimatedLink href='/#pre-care'>PRE-CARE</AnimatedLink>
					<AnimatedLink href='/#contact'>CONTACT</AnimatedLink>
				</ul>
			)}

			{isModalOpen &&
				createPortal(<NavModal setOpen={setIsModalOpen} />, document.body)}
		</header>
	)
}
