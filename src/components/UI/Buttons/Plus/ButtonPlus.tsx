import React from 'react';
import cn from 'classnames';
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
    extraClass?: string;
    disabled?: boolean
}

export const ButtonPlus = ({
    type = 'default',
    extraClass,
    disabled = false
}: IButtonPlus) => {
    return (
        <button className={cn(styles.buttonPlus, extraClass)} disabled={disabled}>
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
