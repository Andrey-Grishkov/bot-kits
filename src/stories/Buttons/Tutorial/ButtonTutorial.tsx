import React from 'react';
import cn from 'classnames';
import coverIcon from "./tutorial.svg";
import styles from './buttonTutorial.module.css';

const getColor = (type: 'default' ) => {
    switch (type) {
    //   case 'disabled':
    //     return '#D7DEEA';
      default:
        return '#A6B3C9';
    }
  };

interface IButtonTutorial {
    type: 'default';
    label: string;
    disabled?: boolean;
}

export const ButtonTutorial = ({
    type,
    label,
    disabled = false
}: IButtonTutorial) => {
    return (
        <button className={styles.buttonTutorial}
        >
            <div className={styles.buttonTutorial_iconsArea}>
                <svg className={cn(styles.buttonTutorial_icon)} xmlns="http://www.w3.org/2000/svg" width="149" height="76" viewBox="0 0 149 76" fill="none">
                    <circle cx="86.5" cy="86.5" r="86.5" transform="matrix(-1 0 0 1 149 -48)" fill="#E4E9F1"/>
                </svg>
                <svg className={cn(styles.buttonTutorial_icon, styles.buttonTutorial_test )} xmlns="http://www.w3.org/2000/svg" width="83" height="69" viewBox="0 0 83 69" fill="none">
                    <path d="M2 109C45.6305 109 81 73.9533 81 30.7211M75.5131 2C77.1081 6.00503 78.3793 10.1717 79.295 14.4683" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <img className={styles.buttonTutorial_mainIcon} src={coverIcon} alt="cover-icon" />
            </div>
            {/* <img className={styles.loader_icon} src={coverIcon} alt="cover-icon" /> */}

            <span className={styles.buttonTutorial__textArea}>{label}</span>
        </button>
    )
}