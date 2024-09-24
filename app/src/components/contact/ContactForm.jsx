import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import Success from './SuccessModal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorSubmitting, setErrorSubmitting] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorSubmitting(null)

    try {
      const response = await fetch('http://localhost:3000/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setShowSuccess(true)
      setFormData({ name:'', email: '', message: ''})
    } catch (error) {
      setErrorSubmitting(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control 
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name or Company" 
          />
          <Form.Control 
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address" 
          />
          <Form.Control 
            required
            type="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter message" 
          />
        </Form.Group>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
        {errorSubmitting && <p>{errorSubmitting}</p>}
      </Form>

      <Success show={showSuccess} handleClose={handleCloseSuccess} />
    </>
  )
}