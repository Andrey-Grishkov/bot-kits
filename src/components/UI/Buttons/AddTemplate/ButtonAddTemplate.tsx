import React from 'react';
import styles from './buttonAddTemplate.module.css';
import icon from "./answering machine.svg";
import { TButtonTypes } from '../../../../types/button';

const getColor = (type: TButtonTypes ) => {
    switch (type) {
      default:
        return '#CCD4E0';
    }
  };

interface IButtonAddTemplate {
    type: TButtonTypes;
    label: string;
    // icon: string;
    disabled?: boolean
}

export const ButtonAddTemplate = ({
    type = 'default',
    label,
    // icon = "./src/stories/Buttons/AddTemplate/answering machine.svg",
    disabled = false
}: IButtonAddTemplate) => {
    return (
        <div className={styles.buttonAddTemplate__wrapper}>
            <button className={styles.buttonAddTemplate} disabled={disabled}>
                <img className={styles.buttonAddTemplate__mainIcon} src={icon} alt="info-icon" />
                <svg className={styles.buttonAddTemplate__plusIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke={getColor(type)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 12H19" stroke={getColor(type)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <span className={styles.buttonAddTemplate__text}>{label}</span>
        </div>
    )
}