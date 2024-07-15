import styles from './Spacer.module.css'

interface ISpacer {
	height: number
}

export function Spacer({ height }: ISpacer) {
	return <div className={styles.spacer} style={{ height: height }} />
}
