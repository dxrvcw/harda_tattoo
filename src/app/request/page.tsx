import { Header } from '@/components/Header/Header'
import { HeaderFixed } from '@/components/Header/HeaderFixed'
import { RequestForm } from '@/components/RequestForm/RequestForm'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
	title: 'Request',
}

export default function Page() {
	return (
		<main className='container'>
			<HeaderFixed requiredY={0} />
			<Header showList={false} />
			<div className={styles.text_container}>
				<p className={styles.text}>SEND</p>
				<p className={styles.text}>REQUEST</p>
			</div>
			<RequestForm />
		</main>
	)
}
