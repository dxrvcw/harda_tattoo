import Image from 'next/image'

import { AppearingText } from '../AppearingText'
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
				priority
				width={720}
				height={720}
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
					<AppearingText text='HARDA' className={styles.footer_title} />
					<span className={styles.footer_second_title}>
						TATOO ARTIST <br /> BASED IN NOVYI ROZDIL
					</span>
				</div>
				<AppearingText className={styles.footer_title} text='TATTOO' />
			</div>
		</section>
	)
}
