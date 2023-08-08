import { templates } from '../../../utils/data';
import { ButtonMain } from '../../UI/Buttons/Main/ButtonMain';
import styles from './ModalAddBot.module.scss';

import React, { FunctionComponent }  from 'react';

interface IModalAddBot {
  keyName: string;
  title: string;
  icon?: string;
}

export const ModalAddBot: FunctionComponent<IModalAddBot> = ({keyName, title, icon = 'answeringMachine.svg'}) => {
  const keyProps = templates.find(element => element.keyName === keyName);

  return (
    <>
        <div className={styles.header}>
          <img className={styles.headerIcon} src={keyProps?.icon} alt="info-icon" />
          <h3 className={styles.title}>{keyProps?.name}</h3>
        </div>
        
        <p className={styles.text}>{keyProps?.desc}
        </p>
        <ol className={styles.list}>
            <li className={styles.listElement}>Что настроено в шаблоне</li>
            <li className={styles.listElement}>Что настроено в шаблоне</li>
            <li className={styles.listElement}>Что настроено в шаблоне</li>
            <li className={styles.listElement}>Что настроено в шаблоне</li>
        </ol>
        <div className={styles.buttonField}>
            <ButtonMain 
                theme='grey' 
                label = 'Отмена' 
                size = 'l' 
            ></ButtonMain>
            <ButtonMain 
                theme='green' 
                label = 'Добавить бота' 
                size = 'l' 
        ></ButtonMain>
        </div>
    </>
  )
}