import WCMainImage from '../../assets/wc/WCMain.png'
import WCCreateImage from '../../assets/wc/WCCreate.jpg'
import WCDesktopImage from '../../assets/wc/WCDesktop.jpg'
import WCDesktopStepsImage from '../../assets/wc/WCDesktopSteps.jpg'
import WCMobileImage from  '../../assets/wc/WCMobile.jpg'
import WCSignupImage from '../../assets/wc/WCSignup.jpg'

import TSDesignImage from '../../assets/tripsitter/TSDesign.png'
import TSHomeImage from '../../assets/tripsitter/TSHome.png'
import TSLoginImage from '../../assets/tripsitter/TSLogin.png'
import TSMyTripsImage from '../../assets/tripsitter/TSMyTrips.png'
import TSWireframeImage from '../../assets/tripsitter/TSWireframe.png'

import PWireframeImage from '../../assets/portfolio/PWireframe.png'
import PDesktopImage from '../../assets/portfolio/PDesktop.png'
import PMobileImage from '../../assets/portfolio/PMobile.png'

import ScraperImage from '../../assets/scraper.png'

import GMDarkArticleImage from '../../assets/gm/GMDarkArticle.png'
import GMDarkDesktopImage from '../../assets/gm/GMDarkDesktop.png'
import GMDarkHomeImage from '../../assets/gm/GMDarkHome.png'
import GMDarkLibraryImage from '../../assets/gm/GMDarkLibrary.png'
import GMDarkPodcastImage from '../../assets/gm/GMDarkPodcast.png'
import GMLightDesktopImage from '../../assets/gm/GMLightDesktop.png'
import GMMobileImage from '../../assets/gm/GMMobile.png'


export const projects = {
  1: {
    id: 1,
    title: "Token Scrape",
    description: "This was the first working script that I have made in my career development. During a software engineering program, the students were told that we could create a scraper to input the token drop that was used to verify that we were in class on time. I was one of 2 people who took on this challenge. Using Selenium and my first programming language, Python, I wrote a script that would spin up a new browser, log me in, go through the respective pages to where the token is dropped, refresh and search the page for the token, grab that token as soon as it is released, input the token into the correct field and finally submit it. I had a virtual enviornment created that I would activate and run python main.py while I went to make my coffee. I did run into one issue after a few months of using this script. I needed to update the script to use 64-bit since my pc had gone through an update itself. To work through this issue, I used stack-overflow and did use Claude.ai to figure out where exactly the issue was coming from in my system. ",
    stack: ["Python", "Selenium"],
    repo: "https://github.com/LilliDarling/hack-reactor-token-scrape",
    images: [],
    mainImage: ScraperImage
  },
  2: {
    id: 2,
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
  3: {
    id: 3,
    title: "Tripsitter",
    description: "This project was created as a final in the intensive software engineering program. Assigned teams were to create a application from the ground up. Our requirements were to follow Agile Methodologies, use FastAPI and React, have a database, login/signup funcionalities, and complete the project within 5 weeks. My team came up with this project and to help us with UI/UX structure, I created the wireframe and design using Figma. Throughout the project, our team mob programmed and pair programmed. We regularly held scrum meetings daily, utilized eachother and other resources, and actively worked to document through GitLab, journals, and other documentation.",
    stack: ["FastAPI", "React", "Redux", "Python", "JavaScript", "PostgreSQL"],
    repo: "https://gitlab.com/travel-hackers/tripsitter",
    images: [
      TSDesignImage,
      TSHomeImage,
      TSLoginImage,
      TSMyTripsImage,
      TSWireframeImage
    ],
    mainImage: TSHomeImage
  },
  4: {
    id: 4,
    title: "Growing Me",
    description: "I created the design for this project 1.5 years ago to use with learning software engineering as well as a place to share my professional career journey. After completing my adventure through a software engineering program, I have slowly started working on this project as a developer. Currently, I am working with MongoDB, FastAPI, and the ODMantic library to develop and test REST API connections needed on the backend. I have searched through several repositories, documentation, and libraries for the structure that I am currently using but ultimately came up empty. The current structure is more organized and readable, easily allowing me to find and solve bugs within the code when necessary. I chose to use MongoDB as the database because it made more sense to use a document database over a relational database for the articles themselves. The size of the articles will vary and I wanted to have flexibility with the overall look as well as ease of editing. Eventually I will add the frontend element using Vue.js and Tailwind. The overall goal of the site is to be able to add articles, podcasts, photos, and a store using a third API connection to a platform like Etsy. I will be deploying with AWS and using Kubernetes as well as Docker.",
    stack: ["FastAPI", "Python", "MongoDB", "ODMantic"],
    repo: "https://github.com/LilliDarling/GrowingMe",
    images: [
      GMDarkArticleImage,
      GMDarkDesktopImage,
      GMDarkHomeImage,
      GMDarkLibraryImage,
      GMDarkPodcastImage,
      GMLightDesktopImage,
      GMMobileImage
    ],
    mainImage: GMDarkPodcastImage
  },
  5: {
    id: 5,
    title: "My Portfolio",
    description: "You're looking at it 😉. I designed and built this portfolio to showcase my projects that I have built throughout my career. Currently, since there are very few projects, I am adding the option to view the code here. With this project, I learned and implemented: node.js, React-Bootstrap library, Express, and Nodemailer. I only added a backend to the project because I wanted the ease of access to send an email to me directly instead of just using other links such as LinkedIn or Discord. This allowed me to also pick up some new technology and put it into practice.",
    stack: ["React", "Bootstrap", "node.js", "Nodemailer", "Express"],
    repo: "https://github.com/LilliDarling/portfolio_lilli",
    images: [
      PWireframeImage,
      PDesktopImage,
      PMobileImage
    ],
    mainImage: PDesktopImage
  }
}