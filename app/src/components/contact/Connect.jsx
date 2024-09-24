import Contact from "./ContactForm"
import { ListGroup } from "react-bootstrap"

export default function Connect() {
  return (
    <>
      <div>
        <Contact />
      </div>
      <div>
        <h1>Connect with Me!</h1>
        <p>If you would like to work with me or just shoot ideas feel free to send me a message here or link up with me through one of the links below! I am always looking for new collabs and innovative solutions in software engineering.</p>
        <div>
          <ListGroup>
            <ListGroup.Item>Discord</ListGroup.Item>
            <ListGroup.Item>Telegram</ListGroup.Item>
            <ListGroup.Item>LinkedIn</ListGroup.Item>
            <ListGroup.Item>GitHub</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  )
}