import React, { ReactNode } from "react";
import { FC } from 'react';
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { Subscription } from "./Subscription";
import { BlockBalance } from "./BlockBalance";
import { Container } from "./Container";

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
export const SubscriptionAndPayments: FC = () => {
    return (
        <div className={ className(styles.section) }>
            <div className={ className(styles.title) }>
                <h2 className={ className(styles.titleText) }>
                    Подписка и платежы
                </h2>
                <ButtonMain  
                theme = {'green'}
                label = {'сменить тариф'}
                size = {'l'}
                extraClass = {styles.buttonChangeTariff}
                />
            </div>
        <div className={ className(styles.block) }>
            <Container extraClass = "subscription">
            <Subscription />
            </Container>
            {/* <Container extraClass = "subscription">
                <div className={ className(styles.titleSubscription) }>
                <h3 className={ className(styles.titleTextSubscription) }>
                    {subscription}
                </h3>
                <h4 className={ className(styles.titleTextStatus) }>
                    {status}
                </h4>
                </div>
                
            </Container> */}
            <Container extraClass = "containerBalans">
            <BlockBalance balance={0}/>
            </Container>
            {/* <Container extraClass = "containerBalans">
                <Balance balance={0} />
                <ButtonMain  
                theme = {'grey'}
                label = {'АКТИВИРОВАТЬ ПРОМОКОД'}
                size = {'l'}
                extraClass = {styles.button}
                />
            </Container> */}
        </div>
        </div>
    );
};
