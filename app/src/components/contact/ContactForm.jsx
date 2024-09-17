import { Form } from 'react-bootstrap'

export default function Contact() {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Enter Name or Company" />
        <Form.Control type="email" placeholder="Enter email address" />
        <Form.Control type="textarea" placeholder="Enter message" />
      </Form.Group>
    </Form>
  )
}