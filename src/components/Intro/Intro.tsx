import React from 'react';
import styles from '@/components/Intro/Intro.module.css';
import { IntroProps } from './intro.types';
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Image,
  Icon,
  Avatar,
} from '@chakra-ui/react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Intro({}: IntroProps) {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introText}>
        <Heading size="xl">
          {' '}
          Hello, I’m Toni, a Software Engineer With 5+ years of experience.
        </Heading>
        <Text>View a summary of all your customers over the last month.</Text>
        <div>
          <Button
            mr={1}
            style={{
              background: '#1D1D1D',
              color: '#fff',
              height: '50px',
              borderRadius: '30px',
              paddingRight: 'auto',
              paddingLeft: 'auto',
              width: '175px',
              marginRight: '1rem',
            }}>
            Contact Me
          </Button>
          <Avatar mr={2} bg="linkedin.400" icon={<Icon as={BsLinkedin} />} />
          <Avatar bg="gray.400" icon={<Icon as={BsGithub} />} />
        </div>
      </div>
      <div className={styles.introImage}>
        <Image
          style={{ borderRadius: '5%' }}
          boxSize="450px"
          objectFit="cover"
          src="/introimage.jpg"
        />
      </div>
    </div>
  );
}

export default Intro;
