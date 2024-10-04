import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import Success from './SuccessModal'
import '../../style/contact.css'
import '../../style/button.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
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
      const response = await fetch('/api/email', {
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
      setFormData({ company: '', name: '', email: '', message: ''})
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
      <Container fluid className="contact-container">
        <Row className="justify-content-center">
          <Col>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Control 
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter Company" 
                  className="fs-5"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name" 
                  className="fs-5"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address" 
                  className="fs-5"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control 
                  required
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message" 
                  className="fs-5"
                />
              </Form.Group>
              <Form.Group className="submit">
                <Button type="submit" disabled={isSubmitting} className="btn-adjusted">
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
                {errorSubmitting && <p className="text-danger mt-3">{errorSubmitting}</p>}
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      <Success show={showSuccess} handleClose={handleCloseSuccess} />
    </>
  )
}