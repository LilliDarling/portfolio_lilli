const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

app.post('/api/email', async (req, res) => {
  const { name, email, message } = req.body

  let transporter = nodemailer.createTransport({
    host: "replace-smtp-host",
    port: 587,
    secure: false,
    auth: {
      user: 'enter-email@gmail.com',
      pass: 'enter-password'
    }
  })

  try {
    let info = await transporter.sendMail({
      from: '"Portfolio Site", <enter-email@gmail.com>',
      to: "enter-email@gmail.com",
      subject: "New Connect Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    resizeTo.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(3000)