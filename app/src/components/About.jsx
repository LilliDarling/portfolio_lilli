import { useNavigate } from "react-router-dom"
import ConnectButton from "./buttons/ConnectButton"
import { projects } from "./projects/projectsFile"

export default function About() {
  const navigate = useNavigate()

  const latestProjects = Object.values(projects)
    .sort((a, b) => b.id - a.id)
    .slice(0, 3)

  const handleProjectNavigate = (id) => {
    navigate('/projects', { state: { selectedProjectId: id }})
  }
  
  return (
    <>
      <div>
        <div>
          <h1>Me, Myself, & I</h1>
          <p>I have worked in various industries wearing many hats. We are all familiar with the quote “A jack of all trades is a master of none, but oftentimes better than a master of one”. You see, I love Shakespeare, and this quote is a great representation of me. I say this not because I lack wanting to be a master of something but because I find I work more efficiently if I am able to take on many roles.</p>
          <p>Thanks to this philosophy, I have gained many skills necessary that translate into software engineering. Attention to detail, problem solving, and communication are probably three of the biggest skills I have found useful as a Software Engineer.</p>
          <p>My life motto, “Never stop growing”, has propelled me to embrace the challenges of a new career field in something I never thought possible. Quickly developing a proficiency in various areas of software engineering, I have fallen in love with the craft and am beyond excited at the possibilities it has created.</p>
          <p>When I am not nose deep in code, I can oftentimes be found out in the wild enjoying many activities. Snowboarding, reading under a tree, wondering why I went on that 10 mile hike, and playing video games are just a few of these hobbies. I find adventure in everything that I do and will usually have many side quests leading to success.</p>
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
      <div>
        {latestProjects.map((project) => (
          <div key={project.id}>
            <img src={project.mainImage} />
            <h2>{project.title}</h2>
            <button onClick={() => handleProjectNavigate(project.id)}>
              View
            </button>
          </div>
        ))}
      </div>
    </>
  )
}