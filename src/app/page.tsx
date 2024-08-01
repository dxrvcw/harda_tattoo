import { About } from '@/components/About/About'
import { Approach } from '@/components/Approach/Approach'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { HeaderFixed } from '@/components/Header/HeaderFixed'
import { HeaderHero } from '@/components/HeaderHero/HeaderHero'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { PreCare } from '@/components/PreCare/PreCare'
import { Spacer } from '@/components/Spacer'

export default function Home() {
	return (
		<main className='container'>
			<Header showList />
			<HeaderFixed requiredY={500} />
			<HeaderHero />
			<Spacer height={100} />
			<About />
			<Spacer height={70} />
			<Portfolio />
			<Spacer height={100} />
			<Approach />
			<Spacer height={120} />
			<PreCare />
			<Spacer height={250} />
			<Contact />
			<Spacer height={50} />
			<Footer />
		</main>
	)
}
