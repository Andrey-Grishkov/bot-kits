import { ButtonMain } from '../../UI/Buttons/Main/ButtonMain';
import styles from './ModalAddBot.module.scss';

import React, { FunctionComponent }  from 'react';

interface IModalAddBot {
  title: string;
  icon?: string;
}

export const ModalAddBot: FunctionComponent<IModalAddBot> = ({title, icon = 'answeringMachine.svg',}) => {
  return (
    <>
        <div className={styles.header}>
          <img className={styles.headerIcon} src={require(`./${icon}`)} alt="info-icon" />
          <h3 className={styles.title}>{title}</h3>
        </div>
        
        <p className={styles.text}>Бот ответит стандартным сообщением на запрос от человека. 
            Подходит для всех мессенджеров. 
            Шаблон возможно изменить под ваши цели.
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