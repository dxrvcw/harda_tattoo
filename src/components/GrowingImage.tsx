'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './GrowingImage.module.css'

interface IGrowingImage {
	height: number
	width: number
	src: string
	alt: string
	className: string
	inset: [number, number, number, number]
}

export function GrowingImage({
	height,
	width,
	src,
	alt,
	className,
	inset,
}: IGrowingImage) {
	return (
		<div className={`${className} ${styles.image_container}`}>
			<motion.div
				initial={{
					clipPath: `inset(${inset[0]}% ${inset[1]}% ${inset[2]}% ${inset[3]}%`,
					opacity: 0,
				}}
				whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
				transition={{ duration: 2 }}
				viewport={{ once: true }}
				className={styles.motion_wrapper}
			>
				<Image
					src={src}
					alt={alt}
					height={height}
					width={width}
					className={styles.image}
				/>
			</motion.div>
		</div>
	)
}
