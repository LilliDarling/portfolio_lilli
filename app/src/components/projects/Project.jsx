import { Button, Container, Col, Row } from "react-bootstrap"
import "../../style/button.css"
import "../../style/projects.css"

export default function ProjectInfo({ project }) {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <h1>{project.title}</h1>
          {project.link &&
            <div className="buttons mx-1">
              <Button
                href={project.link}
                target="_blank"
                className="btn-adjusted mb-3"
              >
                Visit
              </Button>
            </div>
          }
          <p>{project.description}</p>
          <div className="buttons mx-1">
            <Button 
              href={project.repo}
              target='_blank'
              className="btn-adjusted mb-3"
            >
              View Repository
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}