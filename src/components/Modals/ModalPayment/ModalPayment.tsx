import { ButtonMain } from '../../UI/Buttons/Main/ButtonMain';
import { Input } from '../../UI/Input/Input';
import styles from './ModalPayment.module.scss';

import cosmoRocket from '../../../images/modal/cosmoRocket.svg';

import React, { FunctionComponent }  from 'react';

interface IModalPayment {
  title: string;
  buttonText?: string;
  isCancel?: boolean;
}

export const ModalPayment: FunctionComponent<IModalPayment> = ({title, buttonText = '', isCancel = true}) => {
  return (
    <>
        <div className={styles.topBackground}>
            <img className={styles.topImage} src={cosmoRocket} alt="cosmoRocket" />
            <h2 className={styles.title}>{title}</h2>
        </div>


        {/* <div className={styles.header}>
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
        </div> */}
    </>
  )
}