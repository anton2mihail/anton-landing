import { Link } from '@chakra-ui/next-js';
import { Heading, Text, Button, Image, Icon, Avatar } from '@chakra-ui/react';
import React from 'react';
import styles from './CapstoneForProject.module.css';
import { BsArrowUpRight } from 'react-icons/bs';
import { CapstoneForProjectProps } from './CapstoneForProject.types';

function CapstoneForProject({ text, link }: CapstoneForProjectProps) {
  return (
    <div className={styles.container}>
      <Text mb={0}>{text}</Text>
      <div className={styles.iconPositioning}>
        <Avatar
          as={Link}
          target="_blank"
          href={link}
          bg="white"
          icon={<Icon color={'black'} as={BsArrowUpRight} />}
        />
      </div>
    </div>
  );
}

export default CapstoneForProject;
