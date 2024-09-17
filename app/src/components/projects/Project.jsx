export default function ProjectInfo({ project }) {

  return (
    <div>
      <div>
        <h2><a href={project.link}>{project.title}</a></h2>
      </div>
      <div>
        <p>{project.description}</p>
      </div>
      <div>
        <a href={project.repo}>View Repository</a>
      </div>
    </div>
  )
}