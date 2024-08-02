'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { Button } from '../FormComponents/Button'
import { Input } from '../FormComponents/Input'
import { RequestLinkButton } from '../RequestLinkButton'
import styles from './RequestForm.module.css'

interface IRequestForm {}

interface IFormData {
	fullName: string
	age: string
	placement: string
	size: string
	diseases: string
	idea: string
	ideaReferences: FileList | null
	appointmentTime: string
	phoneNumber: string
	email: string
	additionalInfo: string
}

const initialFormData: IFormData = {
	fullName: '',
	age: '',
	placement: '',
	size: '',
	diseases: '',
	idea: '',
	ideaReferences: null,
	appointmentTime: '',
	phoneNumber: '',
	email: '',
	additionalInfo: '',
}

export function RequestForm({}: IRequestForm) {
	const [step, setStep] = useState(1)
	const [isFinished, setIsFinished] = useState(false)

	const [formData, setFormData] = useState<IFormData>(initialFormData)
	const [error, setError] = useState(false)

	useEffect(() => {
		console.log(formData)
	}, [formData])

	const nextStep = () => {
		switch (step) {
			case 1:
				if (formData.age && formData.fullName) {
					setStep(2)
					setError(false)
				} else setError(true)
				break
			case 2:
				if (formData.placement && formData.size && formData.diseases) {
					setStep(3)
					setError(false)
				} else setError(true)
				break
			case 3:
				if (
					formData.idea &&
					formData.ideaReferences &&
					formData.ideaReferences.length > 0
				) {
					setStep(4)
					setError(false)
				} else setError(true)
				break
			case 4:
				if (formData.appointmentTime) {
					setStep(5)
					setError(false)
				} else setError(true)
				break
			case 5:
				if (formData.phoneNumber) {
					setIsFinished(true)
					setError(false)
				} else setError(true)
				break
		}
	}
	const previousStep = () => {
		setStep(prev => {
			if (prev > 1) return prev - 1
			return prev
		})
	}

	if (isFinished)
		return (
			<div className={styles.finish_container}>
				<p className={styles.finish_title}>THANK YOU!</p>
				<p className={styles.finish_text}>
					I WILL CONTACT YOU AS SOON AS POSSIBLE (USUALLY IT TAKES FROM 1 TO 3
					DAYS) AND WE WILL PLAN A SESSION FOR YOU!
				</p>
				<RequestLinkButton href='/' text='BACK TO WEBSITE' />
			</div>
		)

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
				{step === 1 && (
					<>
						<p className={styles.form_title}>TO KNOW MORE ABOUT YOU</p>
						<Input
							label='WHAT IS YOUR FULL NAME?'
							name='name'
							placeholder='JANE DOE'
							type='text'
							required={true}
							value={formData.fullName}
							onChange={e =>
								setFormData(prev => ({ ...prev, fullName: e.target.value }))
							}
						/>
						<Input
							label='YOUR AGE?'
							name='age'
							placeholder='18'
							type='number'
							required={true}
							value={formData.age}
							onChange={e =>
								setFormData(prev => ({ ...prev, age: e.target.value }))
							}
						/>
						<Button onClick={nextStep}>NEXT: LET`S TALK ABOUT TATTOO</Button>
					</>
				)}
				{step === 2 && (
					<>
						<p className={styles.form_title}>TO PLAN YOUR FUTURE TATTOO</p>
						<Input
							label='PLACEMENT FOR YOUR TATTOO'
							name='placement'
							placeholder='FOREARM, LOWER BACK...'
							type='text'
							required={true}
							value={formData.placement}
							onChange={e =>
								setFormData(prev => ({ ...prev, placement: e.target.value }))
							}
						/>
						<Input
							label='APPROX. SIZE  IN CM'
							name='size'
							placeholder='18'
							type='number'
							required={true}
							value={formData.size}
							onChange={e =>
								setFormData(prev => ({ ...prev, size: e.target.value }))
							}
						/>
						<Input
							label='DO YOU HAVE ANY SKIN DISEASES?'
							name='diseases'
							placeholder='NO / YES, ...'
							type='text'
							required={true}
							value={formData.diseases}
							onChange={e =>
								setFormData(prev => ({ ...prev, diseases: e.target.value }))
							}
						/>
						<Button onClick={nextStep}>
							NEXT: TO CREATE YOUR DREAM TATTOO TOGETHER
						</Button>
					</>
				)}
				{step === 3 && (
					<>
						<p className={styles.form_title}>
							TO CREATE YOUR DREAM TATTOO TOGETHER
						</p>
						<Input
							label='DESCRIBE YOUR IDEA'
							name='idea'
							placeholder='I WOULD LOVE TO HAVE A TATTOO OF A TREE WITH ROOTS THAT EXTEND INTO THE EARTH AND BRANCHES THAR REACH TOWARDS THE SKY...'
							additionalLabel='PLEASE PROVIDE A DETAILED DESCRIPTION OF YOUR TATTOO IDEA SO WE CAN GIVE YOU A FASTER ESTIMATE ON AVAILABLE DATES AND TIMES.'
							element='textarea'
							required={true}
							value={formData.idea}
							onChange={e =>
								setFormData(prev => ({ ...prev, idea: e.target.value }))
							}
						/>
						<Input
							label='ATTACH REFERENCES SIMILAR TO YOUR IDEA'
							name='ideaReferences'
							additionalLabel='IT CAN BE ALSO FROM MY WORKS OR OTHER VISUAL REFERENCES THAT WILL HELP TO UNDERSTAND YOUR IDEA BETTER'
							required={true}
							type='file'
							onChange={e =>
								setFormData(prev => ({ ...prev, ideaReferences: e.fileList }))
							}
						/>
						<Button onClick={nextStep}>
							NEXT: LET`S SCHEDULE AN APPOINTMENT
						</Button>
					</>
				)}
				{step === 4 && (
					<>
						<p className={styles.form_title}>
							TO SCHEDULE YOUR APPOINTMENT WITH EASE
						</p>
						<Input
							label='WHEN WOULD YOU LIKE TO GET AN APPOINTMENT?'
							name='time'
							placeholder='22-27 OF AUGUST, I WOULD PREFER MONDAYS OR SUNDAYS'
							element='textarea'
							required={true}
							value={formData.appointmentTime}
							onChange={e =>
								setFormData(prev => ({
									...prev,
									appointmentTime: e.target.value,
								}))
							}
						/>
						<Button onClick={nextStep}>AND FINALLY REACH YOU</Button>
					</>
				)}
				{step === 5 && (
					<>
						<p className={styles.form_title}>AND FINALLY REACH YOU {'<3'}</p>
						<Input
							label='YOUR PHONE NUMBER'
							name='phoneNumber'
							placeholder='+38 (012) 345 67 89'
							type='text'
							required={true}
							value={formData.phoneNumber}
							onChange={e =>
								setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))
							}
						/>
						<Input
							label='YOUR EMAIL'
							name='email'
							placeholder='JANEDOE@GMAIL.COM'
							type='text'
							required={false}
							value={formData.email}
							onChange={e =>
								setFormData(prev => ({ ...prev, email: e.target.value }))
							}
						/>
						<Input
							label='ADDITIONAL INFORMATION'
							name='additionalInfo'
							placeholder='TELEGRAM, INSTAGRAM, WHATSAPP...'
							type='text'
							required={false}
							value={formData.additionalInfo}
							onChange={e =>
								setFormData(prev => ({
									...prev,
									additionalInfo: e.target.value,
								}))
							}
						/>
						<Button onClick={nextStep}>FINISH</Button>
					</>
				)}
				{error && (
					<p className={styles.error_message}>
						PLEASE FILL IN ALL THE FIELDS. IT`S IMPORTANT FOR ME
					</p>
				)}
			</div>
		</div>
	)
}
