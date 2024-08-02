import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'
import styles from './Input.module.css'

interface IInput {
	label: string
	type?: string
	name: string
	className?: string
	placeholder?: string
	required?: boolean
	value?: string
	onChange: (e: any) => void
	element?: 'input' | 'textarea'
	additionalLabel?: string
}

export function Input({
	label,
	type = 'text',
	name,
	className,
	placeholder,
	required = false,
	value,
	onChange,
	element = 'input',
	additionalLabel,
}: IInput) {
	const inputProps = {
		id: name,
		type,
		className: `${className} ${styles.input}`,
		required,
		placeholder,
		value,
		onChange,
	}

	const textareaProps = {
		...inputProps,
		rows: 15,
	}

	return (
		<div className={styles.container}>
			<label htmlFor={name} className={styles.label}>
				{label}
				{required && <span style={{ color: 'rgb(182, 75, 75)' }}>*</span>}
			</label>
			{additionalLabel && (
				<label htmlFor={name} className={styles.additionalLabel}>
					{additionalLabel}
				</label>
			)}
			{element === 'input' && type !== 'file' ? (
				<input
					{...inputProps}
					style={type === 'number' ? { width: '30%' } : { width: '100%' }}
				/>
			) : element === 'input' && type === 'file' ? (
				<div style={{ marginTop: 13 }}>
					<Upload onChange={onChange} listType='picture' id={name}>
						<Button icon={<UploadOutlined />} className={styles.fileButton}>
							Upload
						</Button>
					</Upload>
				</div>
			) : (
				<textarea
					{...textareaProps}
					style={{
						height: 150,
						padding: '10px 15px',
						resize: 'none',
						fontFamily: 'inherit',
						width: '100%',
					}}
				/>
			)}
		</div>
	)
}
