'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Header.module.css'
import { NavModal } from './NavModal'

export function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<header className={styles.header}>
			<button
				className={styles.open_button}
				onClick={() => setIsModalOpen(true)}
			>
				MENU
			</button>
			{isModalOpen &&
				createPortal(<NavModal setOpen={setIsModalOpen} />, document.body)}
		</header>
	)
}
