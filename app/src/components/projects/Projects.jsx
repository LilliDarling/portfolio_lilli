import TechStack from "./TechStack"
import ProjectInfo from "./Project"
import ProjectGallery from "./Gallery"
import { projects } from "./projectsFile"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Nav, ListGroup, Container, Row, Col, Offcanvas, Button } from "react-bootstrap"
import "../../style/projects.css"

export default function Projects() {
  const location = useLocation()
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [selectedProjectId, setSelectedProjectId] = useState(
    location.state?.selectedProjectId || Object.keys(projects)[0]
  )

  useEffect(() => {
    if (location.state?.selectedProjectId) {
      setSelectedProjectId(location.state.selectedProjectId)
    }
  }, [location])

  const selectedProject = projects[selectedProjectId]

  const handleClose = () => setShowOffcanvas(false)
  const handleShow = () => setShowOffcanvas(true)

  return (
    <Container fluid className="projects-container">
      <Row className="desktop-nav d-none d-md-flex">
        <Nav variant='tabs' className="w-100">
          {Object.values(projects).map((project) => (
            <Nav.Item key={project.id}>
              <Nav.Link
                active={selectedProjectId === project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className="fs-4"
              >
                {project.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Row>

      <Row className="d-md-none">
        <Col className="d-flex justify-content-end mb-3">
          <Button onClick={handleShow} className="mobile-menu-btn btn-lg p-1 w-100">
            <span className="navbar-toggler-icon w-100 ps-3 pe-3">
              Select Project
            </span>
          </Button>
        </Col>
      </Row>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start" className="mobile-project-nav">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-1">Projects</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {Object.values(projects).map((project) => (
              <ListGroup.Item
                className="fs-3 selected"
                key={project.id}
                active={selectedProjectId === project.id}
                onClick={() => {
                  setSelectedProjectId(project.id)
                  handleClose()
                }}
              >
                {project.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      <Row className="mt-3">
        <Col md={9} className="order-1 order-md-2">
            <ProjectInfo project={selectedProject} />
        </Col>
        <Col md={2} className="order-2 order-md-1 mb-1 mb-md-0 me-4">
            <TechStack project={selectedProject} />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
            <ProjectGallery project={selectedProject} />
        </Col>
      </Row>

    </Container>
  )
}