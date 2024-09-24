import { useEffect, useRef } from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import ConnectButton from './buttons/ConnectButton';

import bootstrapImage from '/src/assets/icons/bootstrap.png'
import djangoImage from '/src/assets/icons/django.png'
import doImage from '/src/assets/icons/do.png'
import dockerImage from '/src/assets/icons/docker.png'
import fastapiImage from '/src/assets/icons/fastapi.png'
import gitImage from '/src/assets/icons/git.png'
import kubernetesImage from '/src/assets/icons/kubernetes.png'
import mongoImage from '/src/assets/icons/mongo.png'
import postgresImage from '/src/assets/icons/postgres.png'
import pythonImage from '/src/assets/icons/python.png'
import reactImage from '/src/assets/icons/react.png'
import sqlImage from '/src/assets/icons/sql.png'
import tailwindImage from '/src/assets/icons/tailwind.png'
import vueImage from '/src/assets/icons/vue.png'
import profileImage from '/src/assets/profile.png'

export default function Home() {
  const roles = [
    "A Snowboarder",
    "A Hiker",
    "An Herbalist",
    "A Cat Mom",
    "An Entreprenuer",
    "A World Traveler",
    "A Gamer"
  ]

  const roleRef = useRef(null)

  useEffect(() => {
    const roleElement = roleRef.current
    let currentIndex = 0

    const updateRole = () => {
      const nextIndex = (currentIndex + 1) % roles.length
      const nextRole = roles[nextIndex]

      roleElement.animate(
        [
          { opacity: 1, transform: 'translateY(0)' },
          { opacity: 0, transform: 'translateY(-20px)' }
        ],
        {duration: 500, fill: 'forwards'}
      ).onfinish = () => {
        roleElement.textContent = nextRole;
        roleElement.animate(
          [
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          { duration: 500, fill: 'forwards' }
        );
      };

      currentIndex = nextIndex

    };
    const intervalId = setInterval(updateRole, 2000);
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <div>Hi,<br/>I'm Lillith<br/>A Software Engineer</div>
      <div><span ref={roleRef}>{roles[0]}</span></div>
      <ConnectButton />
      <div>
        <div>
          <ListGroup>
            <ListGroup.Item>
              <Image src={bootstrapImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={djangoImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={doImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={dockerImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={fastapiImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={gitImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={kubernetesImage} />
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <ListGroup>
            <ListGroup.Item>
              <Image src={mongoImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={postgresImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={pythonImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={reactImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={sqlImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={tailwindImage} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Image src={vueImage} />
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div>
        <Image src={profileImage} />
      </div>
    </div>
  )
}