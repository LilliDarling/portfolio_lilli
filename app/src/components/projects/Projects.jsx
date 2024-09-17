import TechStack from "./TechStack"
import ProjectInfo from "./Project"
import ProjectGallery from "./Gallery"
import { projects } from "./projectsFile"
import { useState } from "react"

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(Object.keys(projects)[0])

  const selectedProject = projects[selectedProjectId]

  return (
    <>
      <div>
        <nav>
          <ul>
            {Object.values(projects).map((project) => (
              <li
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </nav>
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