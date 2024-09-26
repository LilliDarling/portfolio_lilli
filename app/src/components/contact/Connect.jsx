import Contact from "./ContactForm"
import { ListGroup, Image } from "react-bootstrap"

import discordImage from "../../assets/icons/discord.png"
import telegramImage from "../../assets/icons/telegram.png"
import linkedinImage from "../../assets/icons/linkedin.png"
import githubImage from "../../assets/icons/github.png"

export default function Connect() {
  return (
    <>
      <div>
        <Contact />
      </div>
      <div>
        <h1>Connect with Me!</h1>
        <p>If you would like to work with me or just shoot ideas feel free to send me a message here or link up with me through one of the links below! I am always looking for new collabs and innovative solutions in software engineering.</p>
        <div>
          <ListGroup>
            <ListGroup.Item action href="https://discordapp.com/users/814526671549235209" target="_blank">
              <Image src={discordImage} alt="Discord" />
            </ListGroup.Item>
            <ListGroup.Item action href="https://t.me/@Lilli_Darling" target="_blank">
              <Image src={telegramImage} alt="Telegram" />
            </ListGroup.Item>
            <ListGroup.Item action href="https://www.linkedin.com/in/lillith-long/" target="_blank">
              <Image src={linkedinImage} alt="LinkedIn" />
            </ListGroup.Item>
            <ListGroup.Item action href="https://github.com/LilliDarling" target="_blank">
              <Image src={githubImage} alt="GitHub" />
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  )
}