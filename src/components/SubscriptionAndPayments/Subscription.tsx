import React, { ReactNode } from "react";
import { FC } from 'react';
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { devConstant } from "./devConstant";


const {subscription , statusNotActive, whyNoSubscription, answerSubscription, dateAnswerSubscription} = devConstant;
const status = statusNotActive;

export const Subscription: FC = () => {
    return (
        <><div className={className(styles.titleSubscription)}>
            <h3 className={className(styles.titleTextSubscription)}>
                {subscription}
            </h3>
            <h4 className={className(styles.titleTextStatus)}>
                {status}
            </h4>
        </div>
        <p className={className(styles.answerText)}>
            {answerSubscription + dateAnswerSubscription}
        </p>
        <p className={className(styles.answerText)}>
            {whyNoSubscription}
        </p>
        <ButtonMain
                theme={'green'}
                label={'АКТИВИРОВАТЬ ПОДПИСКУ'}
                size={'l'}
                extraClass={styles.buttonActivedSubscription} /></>
    );
};
