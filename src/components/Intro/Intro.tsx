import React from 'react';
import styles from '@/components/Intro/Intro.module.css';
import { IntroProps } from './intro.types';

function Intro({ }: IntroProps) {
    return (
        <div className={styles.introContainer}></div>
    )
}

export default Intro
