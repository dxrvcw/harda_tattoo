'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AnimatedLink } from '../AnimatedLink'
import { TransitionLink } from '../TransitionLink/TransitionLink'
import styles from './HeaderFixed.module.css'

export function HeaderFixed({ requiredY }: { requiredY: number }) {
	const [isShow, setIsShow] = useState(false)
	const { scrollY } = useScroll()

	useEffect(() => {
		const initialScrollY = scrollY.get()
		if (initialScrollY >= requiredY) {
			setIsShow(true)
		}
	}, [requiredY, scrollY])

	useMotionValueEvent(scrollY, 'change', latest => {
		if (latest > requiredY) setIsShow(true)
		else setIsShow(false)
	})

	return (
		<motion.ul
			initial={{ y: -50 }}
			animate={{ y: isShow ? 0 : -50 }}
			transition={{ duration: 0.5 }}
			className={styles.header}
		>
			<AnimatedLink href='/#about' className={styles.link_item}>
				<p className={styles.link_item_text}>ABOUT</p>
			</AnimatedLink>
			<AnimatedLink href='/#portfolio' className={styles.link_item}>
				<p className={styles.link_item_text}>PORTFOLIO</p>
			</AnimatedLink>

			<AnimatedLink href='/#pre-care' className={styles.link_item}>
				<p className={styles.link_item_text}>PRE-CARE</p>
			</AnimatedLink>
			<AnimatedLink href='/#contact' className={styles.link_item}>
				<p className={styles.link_item_text}>CONTACT</p>
			</AnimatedLink>
			<li>
				<TransitionLink
					href='/request'
					className={styles.link_item + ' ' + styles.link}
				>
					<p className={styles.link_item_text}>SEND REQUEST</p>
				</TransitionLink>
			</li>
		</motion.ul>
	)
}
