import React from 'react';
import styles from '@/components/Intro/Intro.module.css';
import { Heading, Button, Text, Image, Icon, Avatar } from '@chakra-ui/react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from '@chakra-ui/next-js';

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introText}>
        <Heading size="2xl">
          {' '}
          Hello, I’m Toni, a Software Engineer With 5+ years of experience.
        </Heading>
        <Text mt={5}>
          As an experienced software engineer, I am passionate about writing
          clean and efficient code, collaborating with others to deliver
          high-quality software, and thrive under pressure when taking on new
          challenges.
        </Text>
        <div>
          <Button
            as={Link}
            href={'/'}
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
          <Avatar
            as={Link}
            target="_blank"
            href="https://north-boutique-landing-page.onrender.com"
            mr={2}
            bg="blue.700"
            src="/north-boutique-logo.png"
          />
          <Avatar
            as={Link}
            target="_blank"
            href="https://www.linkedin.com/in/toni-lachmaniucu/"
            mr={2}
            bg="linkedin.400"
            icon={<Icon as={BsLinkedin} />}
          />
          <Avatar
            as={Link}
            target="_blank"
            href="https://github.com/anton2mihail"
            bg="gray.400"
            icon={<Icon as={BsGithub} />}
          />
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
