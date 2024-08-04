import { RequestLinkButton } from '@/components/RequestLinkButton'
import type { Metadata } from 'next'
import styles from './not-found.module.css'

export const metadata: Metadata = {
	title: 'Not Found',
}

export default function Page() {
	return (
		<div className={'container ' + styles.container}>
			<div>
				<p className={styles.title}>Oops...</p>
				<p className={styles.title}>Page Not Found!</p>
			</div>
			<div className={styles.button_container}>
				<RequestLinkButton href='/' text='GO TO WEBSITE' />
			</div>
		</div>
	)
}
