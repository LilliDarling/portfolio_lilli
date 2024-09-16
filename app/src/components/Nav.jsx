import { Nav, Navbar, Container } from 'react-bootstrap'

export default function SideNav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Lillith Long</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link href="/connect">Connect</Nav.Link>
            <Nav.Link href="https://github.com/LilliDarling">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/lillith-long/">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}