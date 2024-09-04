import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const sendContactEmail = async ({ name, email, message }: EmailData) => {
  const msg = {
    to: "your-email@example.com", // Seu email de destino
    from: "no-reply@example.com", // Seu email de origem
    subject: `New contact message from ${name}`,
    text: message,
    html: `<p>You have a new contact message from ${name} (${email}):</p><p>${message}</p>`,
  };

  await sgMail.send(msg);
};

export default sendContactEmail;
