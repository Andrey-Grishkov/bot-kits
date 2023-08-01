import React from 'react';
import styles from './buttonPlus.module.css';
import { TButtonTypes } from '../../../../types/button';

const getColor = (type: TButtonTypes ) => {
    switch (type) {
      default:
        return '#060C23';
    }
  };

interface IButtonPlus {
    type: TButtonTypes;
    disabled?: boolean
}

export const ButtonPlus = ({
    type = 'default',
    disabled = false
}: IButtonPlus) => {
    return (
        <button className={styles.buttonPlus} disabled={disabled}>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
            >
                <path 
                    d="M10 2V18" 
                    stroke={getColor(type)} 
                    stroke-width="3" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <path 
                    d="M2 10H18" 
                    stroke={getColor(type)} 
                    stroke-width="3" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    )
}