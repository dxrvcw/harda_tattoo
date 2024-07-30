import Image from 'next/image'
import styles from './Approach.module.css'

export function Approach() {
	return (
		<section className={styles.approach_container}>
			<p className={styles.approach_title}>MY APPROACH</p>
			<Image
				alt='Background illustration'
				src={'/flowers.png'}
				width={500}
				height={500}
				className={styles.background_illustration}
			/>
			<div className={styles.illustration}>
				<Image
					alt='Care and'
					src={'/care_and.svg'}
					width='208'
					height='79'
					className={styles.care_and}
				/>
				<Image
					alt='mention for you'
					src={'/mention_for_you.svg'}
					width='338'
					height='91'
					className={styles.mention_for_you}
				/>
			</div>
			<article className={styles.article_container}>
				<div>
					<p className={styles.article_title}>TRUST</p>
					<p className={styles.article_text}>
						Trust to the artist starts with trust in the world. My aim is to
						inspire faith in yourself, the future, and life itself through
						tattoos.
					</p>
				</div>
				<div>
					<p className={styles.article_title}>FREEDOM</p>
					<p className={styles.article_text}>
						I want to deliver a message through my art that you are free and
						free always and everywhere. The choice is always yours.
					</p>
				</div>
			</article>
			<video
				src='/0730.mp4'
				autoPlay
				loop
				muted
				playsInline
				className={styles.video}
			/>
		</section>
	)
}
