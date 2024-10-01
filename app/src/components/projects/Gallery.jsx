import { Image, Container, Row, Col } from 'react-bootstrap'
import "../../style/projects.css"

export default function ProjectGallery({ project }) {
  return (
    <Container className="m-0 w-100">
      <Row className="gallery-row">
        {project.images.map((image, index) =>(
          <Col key={index} xs={12} md={6} lg={2} className="gallery-col">
            <Image src={image} fluid className="gallery-image" />
          </Col>
        ))}
      </Row>
    </Container>
  )
}