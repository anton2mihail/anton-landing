import { Link } from '@chakra-ui/next-js';
import { Heading, Text, Button, Image, Icon, Avatar } from '@chakra-ui/react';
import React from 'react';
import styles from './Projects.module.css';
import CapstoneForProject from '../ui/CapstoneForProject';

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.project1}>
        <div className={styles.projectContent}>
          <Heading size="sm">North Boutique</Heading>
          <CapstoneForProject
            text="North Boutique Landing Page"
            link="https://north-boutique-landing-page.onrender.com"
          />
          <Image alt="Screenshot NorthBoutique" />
        </div>
      </div>
      <div className={styles.project2}>
        <div className={styles.projectContent}>
          <Heading size="sm">FundThrough</Heading>
          <CapstoneForProject
            text="Marketing site for FundThrough Inc."
            link="https://www.fundthrough.com/"
          />
          <Image
            mt={5}
            src="/fundthrough-1.png"
            alt="Screenshot Fundthrough Homepage"
          />
          <Image
            mt={1}
            src="/fundthrough-4.png"
            alt="Screenshot Fundthrough Homepage"
          />
        </div>
      </div>
      <div className={styles.project3}>
        <div className={styles.projectContent}>
          <Heading size="xl">TBA</Heading>
          <CapstoneForProject
            text="North Boutique Landing Page"
            link="https://north-boutique-landing-page.onrender.com"
          />
          <Image alt="Screenshot NorthBoutique" />
        </div>
      </div>
      <div className={styles.project4}>
        <div className={styles.projectContent}>
          <Heading size="xl">Block Explorer</Heading>
          <CapstoneForProject
            text="Blockchain Explorer For Btc"
            link="https://north-boutique-landing-page.onrender.com"
          />
          <Image alt="Screenshot NorthBoutique" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
