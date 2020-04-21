const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)

	const { name, email, phone, company, message, subject  } = req.body

	const content = {
		to: 'maicon.burn@gmail.com',
		from: 'maicon.burn@gmail.com',
		subject: `${subject} from ${name}`,
		text: `Message from: ${name}\n
                Subject: ${subject}\n
                Phone Number: ${phone}\n
                Company: ${company}\n
                Email: ${email}\n
                Message: ${message}`,
        html: `<p>
                Message from: ${name}<br/ >
                Subject: ${subject}<br />
                Phone Number: ${phone}<br />
                Company: ${company}<br />
                Email: ${email}<br />
                Message: ${message}
                <p>`
	}

	try {
		await sgMail.send(content)
		res.status(200).send('Message sent successfully.')
	} catch (error) {
		console.log('ERROR', error)
		res.status(400).send('Message not sent.')
	}
}