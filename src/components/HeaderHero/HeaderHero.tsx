import Image from 'next/image'

import { RequestLinkButton } from '../RequestLinkButton'
import styles from './HeaderHero.module.css'

export function HeaderHero() {
	return (
		<section className={styles.header_hero}>
			<div className={styles.spacer}></div>
			<Image
				className={styles.background_image}
				alt='Background image'
				src='/flower_tree.png'
				width={1200}
				height={1200}
			/>

			<div className={styles.header_hero_title}>
				<p className={styles.title_text}>
					I FEEL YOUR ENERGY AND TRANSFER IT TO THE MOST EXPENSIVE CANVAS IN THE
					WORLD –
				</p>
				<Image
					className={styles.title_image}
					alt='Title text'
					src='/yourbody.webp'
					width={495}
					height={174}
				/>
				<RequestLinkButton href='/request' text='SEND REQUEST' />
			</div>
			<div className={styles.footer}>
				<div className={styles.footer_top}>
					<span className={styles.footer_title}>HARDA</span>
					<span className={styles.footer_second_title}>
						TATOO ARTIST <br /> BASED IN NOVYI ROZDIL
					</span>
				</div>
				<p className={styles.footer_title}>TATTOO</p>
			</div>
		</section>
	)
}
