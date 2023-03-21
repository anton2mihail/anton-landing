import { Link } from '@chakra-ui/next-js';
import { Heading, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.project1}>
        <div className={styles.projectContent}>
          <Heading size="xl">North Boutique</Heading>
          <Text mt={5}>Details</Text>
          <Image alt="Screenshot NorthBoutique" />
        </div>
      </div>
      <div className={styles.project2}>
        <div className={styles.projectContent}>
          <Heading size="xl">Fundthrough.com</Heading>
          <Text mt={5}>Details</Text>
          <Image alt="Screenshot NorthBoutique" />
        </div>
      </div>
      <div className={styles.project3}>
        <div className={styles.projectContent}>
          <Heading size="xl">TBA</Heading>
          <Text mt={5}>Details</Text>
          <Image alt="Screenshot NorthBoutique" />
        </div>
      </div>
      <div className={styles.project4}>
        <div className={styles.projectContent}>
          <Heading size="xl">Btc Blockchain Explorer</Heading>
          <Text mt={5}>Details</Text>
          <Image alt="Screenshot NorthBoutique" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
