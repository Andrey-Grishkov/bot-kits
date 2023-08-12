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
          <h2 className={styles.title}>{title}</h2>
          <img className={styles.topImage} src={cosmoRocket} alt="cosmoRocket" />
        </div>

        <section className={styles.content}>
          <h4 className={styles.content__header}>Выбери тариф</h4>
          <div className={styles.content__buttons}>
            <button className={styles.content__button}>
              <span className={styles.button__text}>Старт</span>
              <div className={styles.button__costArea}>
                <span className={styles.button__cost}>390</span>
                <span className={styles.button__currency}>руб</span>
              </div>
            </button>
            <button className={styles.content__button}>
              <span className={styles.button__text}>Стандарт</span>
              <div className={styles.button__costArea}>
                <span className={styles.button__cost}>790</span>
                <span className={styles.button__currency}>руб</span>
              </div>
            </button>
            <button className={styles.content__button}>
              <span className={styles.button__text}>Бизнес</span>
              <div className={styles.button__costArea}>
                <span className={styles.button__cost}>1390</span>
                <span className={styles.button__currency}>руб</span>
              </div>
            </button>
          </div>
          <div className={styles.content__desc}>
            <p className={styles.content__descMain}>Цены на тарифы указаны за 1 месяц пользования.</p>
            <p className={styles.content__descDefault}>Оплата будет автоматически взиматься каждый месяц до тех пор, пока вы не отмените подписку.</p>
          </div>
        </section>

        <div className={styles.bottom}>
          <div className={styles.bottom__buttonsSection}>
            <div className={styles.buttonsSection__cost}>
              <span className={styles.button__text}>К оплате</span>
              <div>
                <span className={styles.button__costLarge}>790</span>
                <span className={styles.button__currency}>руб</span>
              </div>
            </div>
            <div className={styles.buttonsSection__controls}>
              <ButtonMain theme='purple'label='Оплатить через' size='l'></ButtonMain>
              <ButtonMain theme='grey'label='запросить счёт' size='l'></ButtonMain>
            </div>
          </div>
          
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