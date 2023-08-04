import { ButtonMain } from '../UI/Buttons/Main/ButtonMain';
import styles from './ModalCommonContent.module.scss';

import React, { FunctionComponent }  from 'react';

interface IModalCommonContent {
  
}

export const ModalCommonContent: FunctionComponent<IModalCommonContent> = () => {
  return (
    <>
        <input></input>
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