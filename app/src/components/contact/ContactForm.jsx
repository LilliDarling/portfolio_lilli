import { Form } from 'react-bootstrap'

export default function Contact() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name or Company</Form.Label>
        <Form.Control type="text" placeholder="Enter Name or Company" />
      </Form.Group>
      <Form.Group>'
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email address" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control type="textarea" placeholder="Enter message" />
      </Form.Group>
    </Form>
  )
}