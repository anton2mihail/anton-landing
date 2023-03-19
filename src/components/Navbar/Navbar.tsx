import React from 'react';
import styles from '@/components/Navbar/Navbar.module.css';
import { Avatar, Button } from '@chakra-ui/react';
import handleClickScroll from '@/utilities/scrollIntoView';
import { NavbarProps } from './Navbar.types';

function Navbar({ activeSection, setActiveSection }: NavbarProps) {
	const styleByActive = (name: string) => {
		return activeSection === name ? { color: 'black' } : { color: '#727272' };
	};

	return (
        <div className={styles.navbarContainer}>
            <div className={styles.avatarNavbar}>
                <Avatar mr={2} size='xs' name='Toni' src='/public/lightbluecircleicon.png'/> Toni
            </div>
            <div className={styles.actionsNavbar}>
			<Button
				style={styleByActive('home')}
				onClick={() => {
					setActiveSection('home');
					handleClickScroll('home', 'smooth');
				}}
				colorScheme="gray"
				variant="ghost"
			>
				Home
			</Button>
			<Button
				style={styleByActive('projects')}
				onClick={() => {
					setActiveSection('projects');
					handleClickScroll('projects', 'smooth');
				}}
				colorScheme="gray"
				variant="ghost"
			>
				Projects
			</Button>
			<Button
				style={styleByActive('contact')}
				onClick={() => {
					setActiveSection('contact');
					handleClickScroll('contact', 'smooth');
				}}
				colorScheme="gray"
				variant="ghost"
			>
				Content
                </Button>
                </div>
		</div>
	);
}

export default Navbar;
