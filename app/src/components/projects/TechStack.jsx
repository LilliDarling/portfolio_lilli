import { Container, Col, Row, Badge } from "react-bootstrap"
import "../../style/projects.css"

export default function TechStack({ project }) {
  return (
    <Container className="tech-stack my-3">
      <Row>
        <Col className="d-flex flex-column align-items-start">
          <h3 className="mb-2 fs-2 desktop">
            Tech Stack:
          </h3>
          <div className="stack-items">
            {project.stack.map((stack, index) =>(
              <Badge 
                key={index}
                bg="transparent"
                text="dark"
                className="stack-item mb-1"
              >
                {stack}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}