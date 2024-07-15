import { HeaderHero } from '@/components/HeaderHero/HeaderHero'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main + ' container'}>
			<HeaderHero />
		</main>
	)
}
