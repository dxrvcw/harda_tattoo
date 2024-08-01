'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import styles from './RequestForm.module.css'

interface IRequestForm {}

export function RequestForm({}: IRequestForm) {
	const [step, setStep] = useState(5)

	const previousStep = () => {
		setStep(prev => {
			if (prev > 1) return prev - 1
			return prev
		})
	}

	return (
		<div className={styles.form_container}>
			<div className={styles.progress_bar} style={{ width: step * 20 + '%' }} />
			<div className={styles.step_text}>
				<p>STEP {step}/5</p>
				<AnimatePresence>
					{step > 1 && (
						<motion.button
							onClick={previousStep}
							className={styles.back_button}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.6 }}
						>
							<HiArrowLeft size={20} />
						</motion.button>
					)}
				</AnimatePresence>
			</div>
			<div className={styles.form}>
				{step === 1 && '1'}
				{step === 2 && '2'}
				{step === 3 && '3'}
				{step === 4 && '4'}
				{step === 5 && '5'}
			</div>
		</div>
	)
}
