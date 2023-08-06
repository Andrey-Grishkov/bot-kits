import React, { ReactNode } from "react";
import { FC } from 'react';
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
// import { Subscription } from "./Subscription";

// interface IContainer {
//   children: ReactNode;
//   extraClass?: string;
// }
interface IBalance {
    extraClass?: string;
    balance: number;
  }
//   const devConstant = {
//     subscription: 'бизнес',
//     statusNotActive: 'неактивен',
//     statusActive: 'активен',
//     whyNoSubscription: 'Недостаточно средств',
//     answerSubscription: 'Не удалось продлить подписку',
//     answerPayments: 'Следующее списание',
//     dateAnswerSubscription: new Date("2020-06-16"),
//     dateAnswerPayments: new Date("2020-06-15"),
//     cardBank: '*****1119'
//   }
//   const {subscription , statusNotActive, whyNoSubscription, answerSubscription, dateAnswerSubscription} = devConstant;
// const status = statusNotActive;
// export const Container: FC<IContainer> = ({children, extraClass = ""}) => {
// // console.log("dssdsds", styles.text);
//     return (
//         <div className={ className(styles.container, styles[extraClass]) }>
//             { children }
//         </div>
//     );
//     };
    // export const Balance: FC<IBalance> = ({balance, extraClass = ""}) => {

    //     return (
    //         <div className={ className(styles.balance, styles[extraClass]) }>
    //            <p className={ className(styles.text) }> Баланс </p>
    //            <p className={ className(styles.sum) }>{balance}&#8381;</p>
    //         </div>
    //     );
    //     };
export const BlockBalance: FC<IBalance> = ({balance, extraClass = ""}) => {
    return (

                <>     
                <div className={ className(styles.balance, styles[extraClass]) }>
                <p className={ className(styles.text) }> Баланс </p>
                <p className={ className(styles.sum) }>{balance}&#8381;</p>
             </div>
                <ButtonMain
            theme={'grey'}
            label={'АКТИВИРОВАТЬ ПРОМОКОД'}
            size={'l'}
            extraClass={styles.button} /></>

    );
};