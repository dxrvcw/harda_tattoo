import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './Button'
import styles from './Form.module.css'
import { IInput, Input } from './Input'

interface IForm<T> {
	title: string
	inputs: Omit<IInput, 'value' | 'onChange'>[]
	buttonText: string
	onSubmit: () => void
	isError: boolean
	errorMessage: string
	formData: T
	setFormData: (arg0: any) => void
}

export function Form<T>({
	title,
	inputs,
	buttonText,
	onSubmit,
	isError,
	formData,
	setFormData,
	errorMessage,
}: IForm<T>) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles.form}
			>
				<p className={styles.form_title}>{title}</p>
				{inputs.map(input => (
					<Input
						key={input.name}
						{...input}
						value={(formData as any)[input.name]}
						onChange={e =>
							setFormData(
								(prev: T) =>
									({
										...prev,
										[input.name]:
											input.type !== 'file' ? e.target.value : e.fileList,
									} as T)
							)
						}
					/>
				))}
				<Button onClick={onSubmit}>{buttonText}</Button>
				{isError && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.error_message}
					>
						{errorMessage}
					</motion.p>
				)}
			</motion.div>
		</AnimatePresence>
	)
}
