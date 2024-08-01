'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatedLink } from '../AnimatedLink'
import styles from './Header.module.css'
import { NavModal } from './NavModal'

export function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<header className={styles.header + ' container'}>
			<button
				className={styles.open_button}
				onClick={() => setIsModalOpen(true)}
			>
				MENU
			</button>

			<ul className={styles.list}>
				<AnimatedLink href='#about'>ABOUT</AnimatedLink>
				<AnimatedLink href='#portfolio'>PORTFOLIO</AnimatedLink>
				<AnimatedLink href='#pre-care'>PRE-CARE</AnimatedLink>
				<AnimatedLink href='#contact'>CONTACT</AnimatedLink>
			</ul>

			{isModalOpen &&
				createPortal(<NavModal setOpen={setIsModalOpen} />, document.body)}
		</header>
	)
}
