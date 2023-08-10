import { ButtonMain } from '../../UI/Buttons/Main/ButtonMain';
import { Input } from '../../UI/Input/Input';
import styles from './ModalCommonContent.module.scss';

import React, { FunctionComponent }  from 'react';

interface IModalCommonContent {
  title: string;
}

export const ModalCommonContent: FunctionComponent<IModalCommonContent> = ({title}) => {
  return (
    <>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        {/* <input></input> */}
        <Input placeholder='placeholder'></Input>
        <div className={styles.buttonField}>
          <ButtonMain 
              theme='grey' 
              label = 'Отмена' 
              size = 'l' 
          ></ButtonMain>
          <ButtonMain 
              theme='purple' 
              label = 'Переименовать' 
              size = 'l' 
          ></ButtonMain>
        </div>
    </>
  )
}