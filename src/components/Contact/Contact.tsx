import React from 'react';
import styles from '@/components/Contact/Contact.module.css';
import { Heading, Button, Avatar, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { ContactProps } from './Contact.types';

function Contact({ title, subtitle, style }: ContactProps) {
  return (
    <div className={styles.contactContainer} style={style}>
      <Heading size="2xl"> {title}</Heading>
      <Text mt={5}>{subtitle}</Text>
      <div className={styles.linksContainer}>
        <Button as={Link} href={'/'} mr={1} className={styles.contactButton}>
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
  );
}

export default Contact;
