import { Image } from 'react-bootstrap'

export default function ProjectGallery({ project }) {
  return (
    <div>
      {project.images.map((image, index) =>(
        <Image
          key={index}
          src={image}
        />
      ))}
    </div>
  )
}