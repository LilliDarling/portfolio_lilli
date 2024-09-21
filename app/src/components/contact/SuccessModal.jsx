import { Modal, } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success({ show, handleClose }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/home")
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
        <Button onCLick={handleClick}>Home</Button>
      </Modal.Footer>
    </Modal>
  )
}