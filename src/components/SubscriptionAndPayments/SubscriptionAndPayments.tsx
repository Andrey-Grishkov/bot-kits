import React, { ReactNode } from "react";
import { FC } from 'react';
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { Subscription } from "./Subscription";
import { BlockBalance } from "./BlockBalance";
import { Container } from "./Container";

  export const devConstant = {
    subscription: 'Бизнес',
    statusNotActive: 'неактивен',
    statusActive: 'активен',
    whyNoSubscription: 'Недостаточно средств',
    answerSubscription: 'Не удалось продлить подписку ',
    answerPayments: 'Следующее списание',
    dateAnswerSubscription: "15/06/2020",
    dateAnswerPayments: "2020-06-15",
    cardBank: '*****1119',
    balance: 0
  }
  const {subscription , balance , statusNotActive, whyNoSubscription, answerSubscription, dateAnswerSubscription} = devConstant;
const status = statusNotActive;
export const SubscriptionAndPayments: FC = () => {
    return (
        <div className={ className(styles.section) }>
            <div className={ className(styles.title) }>
                <h2 className={ className(styles.titleText) }>
                    Подписка и платежи
                </h2>
                <ButtonMain  
                theme = {'green'}
                label = {'сменить тариф'}
                size = {'l'}
                extraClass = {styles.buttonChangeTariff}
                />
            </div>
        
        <div className={ className(styles.blockInfo) }>
        <div className={ className(styles.block) }>
            <Container extraClass = "subscription">
            <Subscription />
            </Container>
            <Container extraClass = "containerBalans">
            <BlockBalance balance={balance}/>
            </Container>
        </div >
        <Container extraClass = "payments">
            </Container>
        </div>
        </div>
    );
};
