import WCMainImage from '../../assets/wc/WCMain.png'
import WCCreateImage from '../../assets/wc/WCCreate.jpg'
import WCDesktopImage from '../../assets/wc/WCDesktop.jpg'
import WCDesktopStepsImage from '../../assets/wc/WCDesktopSteps.jpg'
import WCMobileImage from  '../../assets/wc/WCMobile.jpg'
import WCSignupImage from '../../assets/wc/WCSignup.jpg'

export const projects = {
  1: {
    id: 1,
    title: "Witchy Cooking",
    description: "As part of an intensive software development program, I not only mastered the core curriculum but significantly expanded upon it, tailoring the knowledge to my unique vision. I enhanced the project by implementing dynamic form functionality and robust security measures. Going above and beyond the course requirements, I independently learned and integrated advanced deployment techniques, showcasing my ability to self-teach and push the boundaries of my skills.",
    stack: ["Django", "Python", "JavaScript", "PostgreSQL"],
    repo: "https://gitlab.com/LilliDarling/witchycooking",
    link: "https://witchycooking.com",
    images: [
      WCCreateImage,
      WCDesktopImage,
      WCDesktopStepsImage,
      WCMobileImage,
      WCSignupImage
    ],
    mainImage: WCMainImage
  },
  2: {
    id: 2,
    title: "Growing Me",
    description: "Working on this",
    stack: ["FastAPI", "Python", "JavaScript", "React", "MongoDB"],
    repo: "https://github.com/LilliDarling/GrowingMe",
    // link: "https://www.growingme.com",
    images: [
      "../assets/profile.png"
    ],
    mainImage: "../assets/profile.png"
  },
  3: {
    id: 3,
    title: "My Portfolio",
    description: "I designed and built this portfolio to showcase my projects that I have built throughout my career. Currently, since there are very few projects, I am adding the option to view the code here. With this project, I learned and implemented: node.js, React-Bootstrap library, Express, and Nodemailer. I only added a backend to the project because I wanted the ease of access to send an email to me directly instead of just using other links such as LinkedIn or Discord. This allowed me to also pick up some new technology and put it into practice.",
    stack: ["React", "Bootstrap", "node.js", "Nodemailer", "Express"],
    repo: "https://github.com/LilliDarling/portfolio_lilli",
    link: "https://www.LillithLong.pro",
    images: [
      "../assets/profile.png",
    ],
    mainImage: "../assets/profile.png"
  }
}