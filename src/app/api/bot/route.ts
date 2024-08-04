import { Bot, InputFile } from 'grammy'
import { NextRequest, NextResponse } from 'next/server'

const token = process.env.BOT_API_KEY
const chatId = process.env.CHAT_ID

if (!token)
	throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')
if (!chatId) throw new Error('CHAT_ID environment variable not found.')

const bot = new Bot(token)

export const POST = async (req: NextRequest) => {
	try {
		const formData = await req.formData()

		await sendMessageToTelegram(bot, formData, chatId)

		return NextResponse.json({ status: 'success' })
	} catch (error) {
		console.error('Error handling form submission:', error)
		return NextResponse.json({ status: 'error' }, { status: 500 })
	}
}

async function sendMessageToTelegram(
	bot: Bot,
	formData: FormData,
	chatId: string
) {
	const fullName = formData.get('fullName') as string
	const age = formData.get('age') as string
	const placement = formData.get('placement') as string
	const size = formData.get('size') as string
	const diseases = formData.get('diseases') as string
	const idea = formData.get('idea') as string
	const appointmentTime = formData.get('appointmentTime') as string
	const phoneNumber = formData.get('phoneNumber') as string
	const email = formData.get('email') as string
	const additionalInfo = formData.get('additionalInfo') as string

	// Handle file uploads
	const ideaReferences = formData.getAll('ideaReferences')

	const botMessage = `
		🔴🔼🔼🔼🔼🔼🔴
		<b>📋 New Form Submission:</b>

		<b>👤 Name:</b> ${fullName}
		<b>🎂 Age:</b> ${age}
		<b>📍 Placement:</b> ${placement}
		<b>📏 Size:</b> ${size}
		<b>🩺 Diseases:</b> ${diseases ? diseases : 'None'}
		<b>💡 Idea:</b> ${idea}
		<b>🗓️ Appointment Time:</b> ${appointmentTime}
		<b>📞 Phone Number:</b> ${phoneNumber}
		<b>📧 Email:</b> ${email}
		<b>📝 Additional Info:</b> ${additionalInfo ? additionalInfo : 'None'}
	`

	const mediaGroup: { type: 'photo'; media: InputFile }[] = []
	for (const entry of ideaReferences) {
		if (entry instanceof File) {
			const fileBuffer = Buffer.from(await entry.arrayBuffer())
			const inputFile = new InputFile(fileBuffer, entry.name)
			mediaGroup.push({ type: 'photo', media: inputFile })
		}
	}

	if (mediaGroup.length > 0) {
		await bot.api.sendMediaGroup(chatId, mediaGroup)
	}

	await bot.api.sendMessage(chatId, botMessage, {
		parse_mode: 'HTML',
	})
}
