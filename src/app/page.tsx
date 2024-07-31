import { About } from '@/components/About/About'
import { Approach } from '@/components/Approach/Approach'
import { HeaderHero } from '@/components/HeaderHero/HeaderHero'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { PreCare } from '@/components/PreCare/PreCare'
import { Spacer } from '@/components/Spacer'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main + ' container'}>
			<HeaderHero />
			<Spacer height={100} />
			<About />
			<Spacer height={70} />
			<Portfolio />
			<Spacer height={70} />
			<Approach />
			<Spacer height={70} />
			<PreCare />
			<Spacer height={250} />
		</main>
	)
}
