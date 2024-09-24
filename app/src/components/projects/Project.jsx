import { Button } from "react-bootstrap"

export default function ProjectInfo({ project }) {
  return (
    <div>
      <div>
        <h2>{project.title}</h2>
      </div>
      <Button
        href={project.link}
        target="_blank"
      >
        Visit
      </Button>
      <div>
        <p>{project.description}</p>
      </div>
      <div>
        <Button 
          href={project.repo}
          target='_blank'
        >
          View Repository
        </Button>
      </div>
    </div>
  )
}