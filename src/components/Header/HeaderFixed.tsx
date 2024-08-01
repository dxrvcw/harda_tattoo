'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatedLink } from '../AnimatedLink'
import styles from './HeaderFixed.module.css'

export function HeaderFixed() {
	const [isShow, setIsShow] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', latest => {
		if (latest > 500) setIsShow(true)
		else setIsShow(false)
	})

	return (
		<motion.ul
			initial={{ y: -50 }}
			animate={{ y: isShow ? 0 : -50 }}
			transition={{ duration: 0.5 }}
			className={styles.header}
		>
			<AnimatedLink href='#about' className={styles.link_item}>
				<p className={styles.link_item_text}>ABOUT</p>
			</AnimatedLink>
			<AnimatedLink href='#portfolio' className={styles.link_item}>
				<p className={styles.link_item_text}>PORTFOLIO</p>
			</AnimatedLink>

			<AnimatedLink href='#pre-care' className={styles.link_item}>
				<p className={styles.link_item_text}>PRE-CARE</p>
			</AnimatedLink>
			<AnimatedLink href='#contact' className={styles.link_item}>
				<p className={styles.link_item_text}>CONTACT</p>
			</AnimatedLink>
			<li>
				<Link href='/request' className={styles.link_item + ' ' + styles.link}>
					<p className={styles.link_item_text}>SEND REQUEST</p>
				</Link>
			</li>
		</motion.ul>
	)
}
