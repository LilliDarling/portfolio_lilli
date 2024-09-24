import TechStack from "./TechStack"
import ProjectInfo from "./Project"
import ProjectGallery from "./Gallery"
import { projects } from "./projectsFile"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Nav, ListGroup } from "react-bootstrap"

export default function Projects() {
  const location = useLocation()

  const [selectedProjectId, setSelectedProjectId] = useState(
    location.state?.selectedProjectId || Object.keys(projects)[0]
  )

  useEffect(() => {
    if (location.state?.selectedProjectId) {
      setSelectedProjectId(location.state.selectedProjectId)
    }
  }, [location])

  const selectedProject = projects[selectedProjectId]

  return (
    <>
      <div>
        <Nav variant='tabs'>
          <Nav.Item>
            <ListGroup horizontal>
              {Object.values(projects).map((project) => (
                <ListGroup.Item
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  {project.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <TechStack project={selectedProject} />
      </div>
      <div>
        <ProjectInfo project={selectedProject} />
      </div>
      <div>
        <ProjectGallery project={selectedProject} />
      </div>
    </>
  )
}