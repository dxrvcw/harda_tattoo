import Image from 'next/image'
import { GrowingImage } from '../GrowingImage'
import styles from './About.module.css'

export function About() {
	return (
		<section id='about' className={styles.about_container}>
			<p className={styles.about_title}>ABOUT ME</p>
			<GrowingImage
				src={'/me.jpg'}
				alt='Portrait of me'
				height={400}
				width={300}
				className={styles.portrait}
				inset={[0, 0, 100, 0]}
			/>
			<Image
				src={'/hey.svg'}
				alt='Hey, I`m Sofia'
				width={371}
				height={97}
				className={styles.hey}
			/>
			<Image
				src={'/mymain.svg'}
				alt='My main'
				width={324}
				height={101}
				className={styles.my_main}
			/>
			<Image
				src={'/inspiration.svg'}
				alt='Inspiration is you'
				width={388}
				height={86}
				className={styles.inspiration}
			/>
			<article className={styles.article}>
				<p className={styles.article_text}>
					I like to work with people and create something from zero what is
					going to stay forever on the human body. I do freehand and freestyle
					tattoos - it's about freedom and feeling.
				</p>
				<p className={styles.article_text}>
					Everyone has their own special energy's which i read in our first 15
					min when we meet: how you smile, how you speak, how you feel yourself.
					There comes an image in my head where i already can see the future
					design for your project.
				</p>
			</article>
		</section>
	)
}
