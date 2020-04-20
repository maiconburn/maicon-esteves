import sgMail from '@sendgrid/mail'

export default async function Mail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message } = req.body

  const content = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: `New Portfolio Message From - ${email}`,
    text: message,
    html: `<strong>${message}</strong>`,
  }
  sgMail
    .send(content)
    .then(() => {}, error => {
        console.error(error);
        res.status(200).send('Message sent successfully.')
        if (error.response) {
        console.error(error.response.body)
        res.status(400).send('Message not sent.')
        }
    })
}