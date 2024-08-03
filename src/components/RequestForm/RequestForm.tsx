'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { Form } from '../FormComponents/Form'
import { IInput } from '../FormComponents/Input'
import { RequestLinkButton } from '../RequestLinkButton'
import styles from './RequestForm.module.css'

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

interface IStep {
	title: string
	inputs: Omit<IInput, 'value' | 'onChange'>[]
	buttonText: string
	errorMessage: string
}

const steps: IStep[] = [
	{
		title: 'TO KNOW MORE ABOUT YOU',
		inputs: [
			{
				label: 'WHAT IS YOUR FULL NAME?',
				name: 'fullName',
				placeholder: 'JANE DOE',
				type: 'text',
				required: true,
			},
			{
				label: 'YOUR AGE?',
				name: 'age',
				placeholder: '18',
				type: 'number',
				required: true,
			},
		],
		buttonText: 'NEXT: LET`S TALK ABOUT TATTOO',
		errorMessage: 'PLEASE FILL IN ALL THE FIELDS. IT`S IMPORTANT FOR ME',
	},
	{
		title: 'TO PLAN YOUR FUTURE TATTOO',
		inputs: [
			{
				label: 'PLACEMENT FOR YOUR TATTOO',
				name: 'placement',
				placeholder: 'FOREARM, LOWER BACK...',
				type: 'text',
				required: true,
			},
			{
				label: 'APPROX. SIZE IN CM',
				name: 'size',
				placeholder: '18',
				type: 'number',
				required: true,
			},
			{
				label: 'DO YOU HAVE ANY SKIN DISEASES?',
				name: 'diseases',
				placeholder: 'NO / YES, ...',
				type: 'text',
				required: true,
			},
		],
		buttonText: 'NEXT: TO CREATE YOUR DREAM TATTOO TOGETHER',
		errorMessage: 'PLEASE FILL IN ALL THE FIELDS. IT`S IMPORTANT FOR ME',
	},
	{
		title: 'TO CREATE YOUR DREAM TATTOO TOGETHER',
		inputs: [
			{
				label: 'DESCRIBE YOUR IDEA',
				name: 'idea',
				placeholder:
					'I WOULD LOVE TO HAVE A TATTOO OF A TREE WITH ROOTS THAT EXTEND INTO THE EARTH AND BRANCHES THAR REACH TOWARDS THE SKY...',
				additionalLabel:
					'PLEASE PROVIDE A DETAILED DESCRIPTION OF YOUR TATTOO IDEA SO WE CAN GIVE YOU A FASTER ESTIMATE ON AVAILABLE DATES AND TIMES.',
				element: 'textarea',
				required: true,
			},
			{
				label: 'ATTACH REFERENCES SIMILAR TO YOUR IDEA',
				name: 'ideaReferences',
				additionalLabel:
					'IT CAN BE ALSO FROM MY WORKS OR OTHER VISUAL REFERENCES THAT WILL HELP TO UNDERSTAND YOUR IDEA BETTER',
				type: 'file',
				required: true,
			},
		],
		buttonText: 'NEXT: LET`S SCHEDULE AN APPOINTMENT',
		errorMessage: 'PLEASE FILL IN ALL THE FIELDS. IT`S IMPORTANT FOR ME',
	},
	{
		title: 'TO SCHEDULE YOUR APPOINTMENT WITH EASE',
		inputs: [
			{
				label: 'WHEN WOULD YOU LIKE TO GET AN APPOINTMENT?',
				name: 'appointmentTime',
				placeholder: '22-27 OF AUGUST, I WOULD PREFER MONDAYS OR SUNDAYS',
				element: 'textarea',
				required: true,
			},
		],
		buttonText: 'NEXT: LET`S SCHEDULE AN APPOINTMENT',
		errorMessage: 'PLEASE FILL IN ALL THE FIELDS. IT`S IMPORTANT FOR ME',
	},
	{
		title: 'AND FINALLY REACH YOU <3',
		inputs: [
			{
				label: 'YOUR PHONE NUMBER',
				name: 'phoneNumber',
				placeholder: '+38 (012) 345 67 89',
				type: 'text',
				required: true,
			},
			{
				label: 'YOUR EMAIL',
				name: 'email',
				placeholder: 'JANEDOE@GMAIL.COM',
				type: 'text',
				required: false,
			},
			{
				label: 'ADDITIONAL INFORMATION',
				name: 'additionalInfo',
				placeholder: 'TELEGRAM, INSTAGRAM, WHATSAPP...',
				type: 'text',
				required: false,
			},
		],
		buttonText: 'FINISH',
		errorMessage: 'PLEASE FILL IN ALL THE FIELDS. IT`S IMPORTANT FOR ME',
	},
]

export function RequestForm() {
	const [step, setStep] = useState(1)

	const [formData, setFormData] = useState<IFormData & { [key: string]: any }>(
		initialFormData
	)
	const [error, setError] = useState(false)

	const nextStep = async () => {
		const requiredFields = steps[step - 1].inputs
			.filter(input => input.required)
			.map(input => input.name)

		if (
			requiredFields.some(field => {
				if (field === 'ideaReferences') {
					return !formData[field]?.length
				}
				return !formData[field]
			})
		) {
			setError(true)
			return
		}
		setError(false)
		setStep(step + 1)

		if (step === steps.length) {
			// TODO: implement telegram bot logic
			console.log('Sending data...')
		}
	}

	const previousStep = () => {
		setStep(prev => {
			if (prev > 1) return prev - 1
			return prev
		})
	}

	if (step > steps.length)
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
			<div
				className={styles.progress_bar}
				style={{ width: (step * 100) / steps.length + '%' }}
			/>
			<div className={styles.step_text}>
				<p>
					STEP {step}/{steps.length}
				</p>
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
			<Form<IFormData>
				key={steps[step - 1].title}
				title={steps[step - 1].title}
				buttonText={steps[step - 1].buttonText}
				inputs={steps[step - 1].inputs}
				isError={error}
				onSubmit={nextStep}
				formData={formData}
				setFormData={setFormData}
				errorMessage={steps[step - 1].errorMessage}
			/>
		</div>
	)
}
