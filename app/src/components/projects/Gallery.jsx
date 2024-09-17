export default function ProjectGallery({ project }) {
  return (
    <div>
      {project.images.map((images, index) =>(
        <span key={index}>{images}</span>
      ))}
    </div>
  )
}