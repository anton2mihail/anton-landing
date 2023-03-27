import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

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
      <div id="projects" className={styles.projects}>
        <Projects />
      </div>
      <div id="contact" className={styles.contact}>
        <Contact
          title={'Want to work together?'}
          subtitle={
            'Feel free to reach out for collaborations or just a friendly hello'
          }
          style={{
            marginTop: '1rem',
            gridTemplateRows: '1fr 1fr 0.2fr',
            borderRadius: '5%',
            backgroundImage: "url('/introBackgound.jpg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow:
              '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
    </div>
  );
}

export default Home;
