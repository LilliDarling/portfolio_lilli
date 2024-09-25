import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import LogoImage from '../assets/icons/logo.png'
import '../style/sidenav.css'
import { useState } from 'react'

export default function SideNav() {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const closeNav = () => {
    setExpanded(false)
  }

  return (
    <Navbar expanded={expanded} className={`sidebar-nav flex-column ${expanded ? 'expanded' : ''}`} expand="lg">
      <Container fluid className="d-flex flex-column h-100 p-0">
        <Navbar.Brand>
          <Image src={LogoImage} alt="Lillith Long" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleExpanded}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link href="/" onClick={closeNav}>Home</Nav.Link>
            <Nav.Link href="/about" onClick={closeNav}>About</Nav.Link>
            <Nav.Link href="projects" onClick={closeNav}>Projects</Nav.Link>
            <Nav.Link href="/connect" onClick={closeNav}>Connect</Nav.Link>
            <Nav.Link href="https://github.com/LilliDarling" onClick={closeNav}>GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/lillith-long/" onClick={closeNav}>LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}