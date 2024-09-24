import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Success({ show, handleClose }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Success!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your message has been sent off successfully! If I don’t respond within the business day I am probably out. I look forward to hearing more about you and your company or ideas!
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Home</Button>
      </Modal.Footer>
    </Modal>
  )
}