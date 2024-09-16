import { Nav, Navbar, Container } from 'react-bootstrap'

export default function SideNav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Lillith Long</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Connect</Nav.Link>
            <Nav.Link>GitHub</Nav.Link>
            <Nav.Link>LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}