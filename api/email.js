
import express, { json } from 'express'
import { createTransport } from 'nodemailer'
import cors from 'cors'
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"

const app = express()
const ssmClient = new SSMClient({ region: "us-east-2" })

async function getParameter(name) {
  const command = new GetParameterCommand({
    Name: name,
    WithDecryption: true
  });
  const response = await ssmClient.send(command);
  return response.Parameter.Value;
}

async function initializeServer() {
  const REACT_URL = await getParameter('REACT_URL')
  const SMTP_HOST = await getParameter('SMTP_HOST')
  const EMAIL_USER = await getParameter('EMAIL_USER')
  const EMAIL_PASS = await getParameter('EMAIL_PASS')
  const BACKEND_URL = await getParameter('BACKEND_URL')

  const corsOps = {
    origin: [REACT_URL, BACKEND_URL],
    optionsSuccessStatus: 200
  }

  app.use(json())
  app.use(cors(corsOps))

  const transporter = createTransport({
    service: 'gmail',
    host: SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  })


  app.post('/api/email', async (req, res) => {
    const { company, name, email, message } = req.body

    try {
      let infoToOwner = await transporter.sendMail({
        from: `"Portfolio Site" <${EMAIL_USER}>`,
        to: EMAIL_USER,
        subject: "New Connect Form Submission",
        text: `Company: ${company}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Company:</strong> ${company}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>`
      })

      let infoToUser = await transporter.sendMail({
        from: `"Portfolio Site" <${EMAIL_USER}>`,
        to: email,
        subject: "Thank you for your message",
        text:`Dear ${name},\n\nThank you for reaching out. I have received your message and will get back to you as soon as possible.\n\nCheers!\nLilli`,
        html: `<p>Dear ${name},</p>
              <p> Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
              <p>Cheers!<br/>Lilli Long</p>`
      })

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' })
    }
  })

  app.listen(3000)
}

initializeServer().catch(error => {
  console.error('Failed to initialize server:', error)
  process.exit(1)
})
