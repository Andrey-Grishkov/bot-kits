import React, { ReactNode } from "react";
import { FC } from 'react';
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { Subscription } from "./Subscription";
import { BlockBalance } from "./BlockBalance";

interface IContainer {
  children: ReactNode;
  extraClass?: string;
}
interface IBalance {
    extraClass?: string;
    balance: number;
  }
  const devConstant = {
    subscription: 'бизнес',
    statusNotActive: 'неактивен',
    statusActive: 'активен',
    whyNoSubscription: 'Недостаточно средств',
    answerSubscription: 'Не удалось продлить подписку',
    answerPayments: 'Следующее списание',
    dateAnswerSubscription: new Date("2020-06-16"),
    dateAnswerPayments: new Date("2020-06-15"),
    cardBank: '*****1119'
  }
  const {subscription , statusNotActive, whyNoSubscription, answerSubscription, dateAnswerSubscription} = devConstant;
const status = statusNotActive;
export const Container: FC<IContainer> = ({children, extraClass = ""}) => {
    return (
        <div className={ className(styles.container, styles[extraClass]) }>
            { children }
        </div>
    );
    };
