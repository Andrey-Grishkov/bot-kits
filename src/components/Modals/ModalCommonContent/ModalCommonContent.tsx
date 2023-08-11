import { ButtonMain } from '../../UI/Buttons/Main/ButtonMain';
import { Input } from '../../UI/Input/Input';
import styles from './ModalCommonContent.module.scss';

import React, { FunctionComponent }  from 'react';

interface IModalCommonContent {
  title: string;
  buttonText?: string;
  isCancel?: boolean;
}

export const ModalCommonContent: FunctionComponent<IModalCommonContent> = ({title, buttonText = '', isCancel = true}) => {
  return (
    <>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <Input size='small' placeholder='placeholder'></Input>
        <div className={styles.buttonField}>
            {isCancel && 
              <ButtonMain 
                  theme='grey' 
                  label = 'Отмена' 
                  size = 'l' 
              ></ButtonMain>
            }
            <ButtonMain 
                theme='purple' 
                label={buttonText} 
                size = 'l' 
            ></ButtonMain>
        </div>
    </>
  )
}