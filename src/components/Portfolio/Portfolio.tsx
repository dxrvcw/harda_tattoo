import Image from 'next/image'
import { GrowingImage } from '../GrowingImage'
import styles from './Portfolio.module.css'

export function Portfolio() {
	return (
		<section className={styles.portfolio_container} id='portfolio'>
			<div className={styles.circle_background} />
			<p className={styles.portfolio_title}>PORTFOLIO</p>
			<GrowingImage
				alt='Flowers tattoo image'
				src='/flowers_tattoo.jpeg'
				height={908}
				width={726}
				inset={[100, 0, 0, 0]}
				className={styles.flowers_tattoo}
			/>

			<GrowingImage
				alt='Clock tattoo image'
				src='/clock_tattoo.jpeg'
				height={834}
				width={660}
				inset={[100, 0, 0, 0]}
				className={styles.clock_tattoo}
			/>
			<GrowingImage
				alt='Dog tattoo image'
				src='/dog_tattoo.jpeg'
				height={709}
				width={861}
				inset={[100, 0, 0, 0]}
				className={styles.dog_tattoo}
			/>
			<GrowingImage
				alt='Cat tattoo image'
				src='/cat_tattoo.jpeg'
				height={905}
				width={724}
				inset={[100, 0, 0, 0]}
				className={styles.cat_tattoo}
			/>
			<GrowingImage
				alt='Samurai tattoo image'
				src='/samurai_tattoo.jpeg'
				height={909}
				width={906}
				inset={[100, 0, 0, 0]}
				className={styles.samurai_tattoo}
			/>

			<div className={styles.illustration}>
				<Image
					alt='Illustration'
					src='/tree.png'
					width={300}
					height={300}
					className={styles.illustration_image}
				/>
				<p className={styles.illustration_text}>
					THE PROCESS FOR ME IS ALWAYS LIKE WE DANCE FEELING EACH OTHER AND THAT
					TIME COMES SOMETHING UNIQUE FOR YOU AND FOR ME.
				</p>
			</div>

			<GrowingImage
				alt='Scarab tattoo image'
				src='/zhuk_tattoo.jpeg'
				height={905}
				width={903}
				inset={[100, 0, 0, 0]}
				className={styles.scarab_tattoo}
			/>

			<GrowingImage
				alt='Hope tattoo image'
				src='/hope_tattoo.jpeg'
				height={671}
				width={666}
				inset={[100, 0, 0, 0]}
				className={styles.hope_tattoo}
			/>
			<GrowingImage
				alt='Text tattoo image'
				src='/text_tattoo.jpeg'
				height={885}
				width={720}
				inset={[100, 0, 0, 0]}
				className={styles.text_tattoo}
			/>
			<GrowingImage
				alt='Moon tattoo image'
				src='/moon_tattoo.jpeg'
				height={907}
				width={906}
				inset={[100, 0, 0, 0]}
				className={styles.moon_tattoo}
			/>
		</section>
	)
}
