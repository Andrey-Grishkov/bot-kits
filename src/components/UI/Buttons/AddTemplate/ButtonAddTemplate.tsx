import React, { useState } from 'react';
import cn from 'classnames';
import styles from './ButtonAddTemplate.module.scss';
import { templates } from '../../../../utils/data';
import { Modal } from '../../../Modals/Modal/Modal';
import { ModalAddBot } from '../../../Modals/ModalAddBot/ModalAddBot';
// import answeringMachine from './answering machine.svg'

export type TButtonTypes = 'default';

const getColor = (type: TButtonTypes ) => {
    switch (type) {
      default:
        return '#CCD4E0';
    }
  };


//   const getTemplate = (buttonTemplate: any) => {
//     switch (buttonTemplate) {
//       case '1':
//         return templates[0]
//       default:
//         return '#CCD4E0';
//     }
//   };

interface IButtonAddTemplate {
    type: TButtonTypes;
    label: string;
    // icon: string;
    keyName: string;
    extraClass?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const ButtonAddTemplate = ({
    type = 'default',
    label,
    // icon,
    keyName,
    extraClass,
    onClick,
    disabled = false,
    ...rest
}: IButtonAddTemplate) => {
    const [popup, setPopup] = useState(false);

    const icon = templates.find(element => element.keyName === keyName)?.icon;
    return (
        <>
            <div className={cn(styles.buttonAddTemplate__wrapper, extraClass)}>
                <button className={styles.buttonAddTemplate} onClick={() => setPopup(true)} disabled={disabled} {...rest} >
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
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                        <path 
                            d="M5 12H19" 
                            stroke={getColor(type)} 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <span className={styles.buttonAddTemplate__text}>{label}</span>
            </div>
            {popup &&
                <Modal onClose={() => setPopup(false)}>
                    <ModalAddBot keyName={keyName} title='Бот автоответчик'></ModalAddBot>
                </Modal>
            }
        </>
    )
}

// require(`../../assets/${data[counter].image}.jpg`