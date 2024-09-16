import ProjectInfo from "./Project"
import TechStack from "./TechStack"
import ProjectInfo from "./Project"
import ProjectGallery from "./Gallery"

export default function Projects() {
  return (
    <>
      <div>
        Projects navigation components
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <ProjectInfo />
      </div>
      <div>
        <ProjectGallery />
      </div>
    </>
  )
}