import styles from './CarouselItem.module.css'

interface ICarouselItem {
	title: string
	text: string
}

export function CarouselItem({ title, text }: ICarouselItem) {
	return (
		<div className={styles.container}>
			<p className={styles.title}>{title}</p>
			<p className={styles.text}>{text}</p>
		</div>
	)
}
