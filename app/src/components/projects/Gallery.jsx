import { Image, Container, Row, Col } from 'react-bootstrap'
import "../../style/projects.css"

export default function ProjectGallery({ project }) {
  return (
    <Container>
      <Row className="gallery-row">
        {project.images.map((image, index) =>(
          <Col key={index} xs={12} md={6} lg={3} className="gallery-col">
            <Image src={image} fluid className="gallery-image" />
          </Col>
        ))}
      </Row>
    </Container>
  )
}