import Image from 'next/image'
import { AppearingText } from '../AppearingText'
import { RequestLinkButton } from '../RequestLinkButton'
import styles from './Contact.module.css'

export function Contact() {
	return (
		<section id='contact' className={styles.contact_container}>
			<p className={styles.contact_title}>CONTACT</p>
			<div className={styles.address_block}>
				<p className={styles.subtitle}>Address</p>
				<p className={styles.text}>123 Street, Novyi Rozdil, Lvivska obl.</p>
			</div>
			<div className={styles.email_block}>
				<p className={styles.subtitle}>Email me</p>
				<a
					className={styles.link}
					type='email'
					href='mailto:hardatattoo@gmail.com'
				>
					hardatattoo@gmail.com
				</a>
			</div>
			<div className={styles.insta_block}>
				<p className={styles.subtitle}>Watch me on insta</p>
				<a className={styles.link} href='#'>
					@hardatattoo
				</a>
			</div>
			<div className={styles.illustration_container}>
				<Image
					alt='Background flower illustration'
					src={'/three_flowers.png'}
					width={1000}
					height={1000}
				/>
			</div>
			<article className={styles.article}>
				<p className={styles.article_text}>
					LET ME MAKE YOUR LIFE EASIER, BETTER AND BEAUTIFUL WITH MY LANGUAGE OF
					SPEAKING TO THIS WORLD
				</p>
				<RequestLinkButton href='/request' text='SEND REQUEST' />
			</article>
			<div className={styles.big_words}>
				<AppearingText
					text='HARDA'
					className={styles.big_word + ' ' + styles.first_word}
				/>
				<AppearingText text='TATOO' className={styles.big_word} />
			</div>
		</section>
	)
}
