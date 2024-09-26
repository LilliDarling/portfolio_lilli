import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import '../style/sidenav.css'
import { useState } from 'react'

import LogoImage from '../assets/icons/logo.png'
import homeImage from '../assets/icons/home.png'
import aboutImage from '../assets/icons/about.png'
import connectImage from '../assets/icons/connect.png'
import projectsImage from '../assets/icons/projects.png'
import githubImage from '../assets/icons/github.png'
import linkedinImage from '../assets/icons/linkedin.png'

export default function SideNav() {
  const [expanded, setExpanded] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 1050 })

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const closeNav = () => {
    setExpanded(false)
  }

  return (
    <Navbar 
      expanded={expanded} 
      className={`sidebar-nav ${expanded ? 'expanded' : ''} ${isDesktop ? 'desktop' : 'mobile'}`} 
      expand={isDesktop ? true : "lg"}>
      <Container fluid className="d-flex flex-column h-100 p-0">
        <div className="nav-header d-flex justify-content-between align-items-center p-3">
          <Navbar.Brand>
            <Image src={LogoImage} alt="Lillith Long" className="logo ms-2" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleExpanded}
            className="me-3"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <div className="nav-links mb-5">
              <Nav.Link href="/" onClick={closeNav} className="nav-item mb-3">
                <Image src={homeImage} alt="Home" />
                <span className="nav-label">Home</span>
              </Nav.Link>
              <Nav.Link href="/about" onClick={closeNav} className="nav-item mb-3">
                <Image src={aboutImage} alt="About" />
                <span className="nav-label">About</span>
              </Nav.Link>
              <Nav.Link href="/projects" onClick={closeNav} className="nav-item mb-3">
                <Image src={projectsImage} alt="Projects" />
                <span className="nav-label">Projects</span>
              </Nav.Link>
              <Nav.Link href="/connect" onClick={closeNav} className="nav-item mb-3">
                <Image src={connectImage} alt="Connect" />
                <span className="nav-label">Connect</span>
              </Nav.Link>
            </div>
            <div className="social-links">
              <Nav.Link href="https://github.com/LilliDarling" onClick={closeNav} target="_blank" className="nav-item mb-3">
                <Image src={githubImage} alt="GitHub" />
                <span className="nav-label">GitHub</span>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/lillith-long/" onClick={closeNav} target="_blank" className="nav-item">
                <Image src={linkedinImage} alt="LinkedIn" />
                <span className="nav-label">LinkedIn</span>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}