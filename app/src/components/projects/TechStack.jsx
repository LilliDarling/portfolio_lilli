
export default function TechStack({ project }) {
  return (
    <>
      <div>
        <h3>
          Tech Stack:
        </h3>
        <div>
          {project.stack.map((stack, index) =>(
            <span key={index}>{stack}</span>
          ))}
        </div>
      </div>
    </>
  )
}