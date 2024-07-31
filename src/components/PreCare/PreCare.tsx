import Image from 'next/image'
import { Carousel } from './Carousel/Carousel'
import styles from './PreCare.module.css'

export function PreCare() {
	return (
		<section className={styles.precare_container} id='pre-care'>
			<p className={styles.precare_title}>BEFORE THE SESSION</p>
			<div className={styles.illustration}>
				<Image
					alt='Take care of yourself'
					src={'/take_care.svg'}
					width='466'
					height='90'
				/>
			</div>
			<Carousel />
			<Image
				alt='Background image of flower'
				src={'/flower.png'}
				width={300}
				height={300}
				className={styles.background_image}
			/>
			<p className={styles.background_text}>LET`S VIBE TOGETHER</p>
			<div className={styles.video_container}>
				<video
					src='/0731.mp4'
					autoPlay
					loop
					muted
					playsInline
					className={styles.video}
				></video>
			</div>
		</section>
	)
}
