require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()

const corsOps = {
  origin: process.env.REACT_URL,
  optionsSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOps))

app.post('/api/email', async (req, res) => {
  const { company, name, email, message } = req.body

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    let infoToOwner = await transporter.sendMail({
      from: '"Portfolio Site", <' + process.env.EMAIL_USER + '>',
      to: process.env.EMAIL_USER,
      subject: "New Connect Form Submission",
      text: `Company: ${company}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Company:</strong> ${company}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`
    })

    let infoToUser = await transporter.sendMail({
      from: '"Lillith Long" <' + process.env.EMAIL_USER + '>',
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