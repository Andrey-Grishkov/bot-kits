import React from 'react';
import cn from 'classnames';
import styles from './ButtonCopy.module.scss';
import { TButtonTypes } from '../../../../types/button';

const getColor = (type: TButtonTypes ) => {
    switch (type) {
      default:
        return '#A6B3C9';
    }
  };

interface IButtonCopy {
    type: TButtonTypes;
    extraClass?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const ButtonCopy = ({
    type = 'default',
    extraClass,
    disabled = false,
    ...rest
}: IButtonCopy) => {
    return (
        <button className={cn(styles.buttonCopy, extraClass)} disabled={disabled} {...rest}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
            >
                <path d="M15.5 2H8.6C8.2 2 7.8 2.2 7.5 2.5C7.2 2.8 7 3.2 7 3.6V16.4C7 16.8 7.2 17.2 7.5 17.5C7.8 17.8 8.2 18 8.6 18H18.4C18.8 18 19.2 17.8 19.5 17.5C19.8 17.2 20 16.8 20 16.4V6.5L15.5 2Z" 
                    stroke={getColor(type)} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M3 7.60001V20.4C3 20.8 3.2 21.2 3.5 21.5C3.8 21.8 4.2 22 4.6 22H14.4" 
                    stroke={getColor(type)} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M15 2V7H20"
                    stroke={getColor(type)}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    )
}
