import React from 'react';
import cn from 'classnames';
import styles from './ButtonAddTemplate.module.scss';
import answeringMachine from './answering machine.svg'

export type TButtonTypes = 'default';

const getColor = (type: TButtonTypes ) => {
    switch (type) {
      default:
        return '#CCD4E0';
    }
  };

interface IButtonAddTemplate {
    type: TButtonTypes;
    label: string;
    icon: string;
    extraClass?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const ButtonAddTemplate = ({
    type = 'default',
    label,
    icon,
    extraClass,
    disabled = false,
    ...rest
}: IButtonAddTemplate) => {
    return (
        <div className={cn(styles.buttonAddTemplate__wrapper, extraClass)}>
            <button className={styles.buttonAddTemplate} disabled={disabled} {...rest} >
                <img className={styles.buttonAddTemplate__mainIcon} src={icon} alt="info-icon" />
                <svg
                    className={styles.buttonAddTemplate__plusIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M12 5V19"
                        stroke={getColor(type)}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M5 12H19"
                        stroke={getColor(type)}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <span className={styles.buttonAddTemplate__text}>{label}</span>
        </div>
    )
}

// require(`../../assets/${data[counter].image}.jpg`
