import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Intro from '@/components/Intro/Intro';

function Home() {
  const [activeSection, setActiveSection] = useState<
    'home' | 'projects' | 'contact'
  >();
  useEffect(() => {
    setActiveSection('home');
  }, []);

  return (
    <div id="home" className={styles.home}>
      <div className={styles.navbar}>
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div className={styles.intro}>
        <Intro />
      </div>
      <div id="projects" className={styles.projects}></div>
      <div id="contact" className={styles.contact}></div>
    </div>
  );
}

export default Home;
