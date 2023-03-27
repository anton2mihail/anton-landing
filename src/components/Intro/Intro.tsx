import React from 'react';
import styles from '@/components/Intro/Intro.module.css';
import { Heading, Button, Text, Image, Icon, Avatar } from '@chakra-ui/react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from '@chakra-ui/next-js';
import Contact from '../Contact/Contact';

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introTextContainer}>
        <div className={styles.introText}>
          <Contact
            title=" Hello, I’m Toni, a Software Engineer With 5+ years of experience."
            subtitle="As an experienced software engineer, I am passionate about writing
            clean and efficient code, collaborating with others to deliver
            high-quality software, and thrive under pressure when taking on new
            challenges."
            style={{}}
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
