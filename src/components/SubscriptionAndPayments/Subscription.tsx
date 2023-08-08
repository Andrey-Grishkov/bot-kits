import React, { ReactNode } from "react";
import { FC } from "react";
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { devConstant } from "./devConstant";
import { element } from "prop-types";

const {
  subscription,
  statusActive,
  whyNoSubscription,
  answerSubscription,
  dateAnswerSubscription,
  cardBank,
  answerPayments,
} = devConstant;
type Subscription = {
  status: string;
};
export const Subscription: FC<Subscription> = ({ status }) => {
  let element = <></>;
  switch (status) {
    case "неактивен":
      element = (
        <>
          <div className={className(styles.titleSubscription)}>
            <h3 className={className(styles.titleTextSubscription)}>
              {subscription}
            </h3>
            <h4
              className={className(styles.titleTextStatus, styles.redColorText)}
            >
              {status}
            </h4>
          </div>
          <p className={className(styles.answerText)}>
            {answerSubscription + dateAnswerSubscription}
          </p>
          <p className={className(styles.answerText)}>{whyNoSubscription}</p>
          <ButtonMain
            theme={"green"}
            label={"АКТИВИРОВАТЬ ПОДПИСКУ"}
            size={"l"}
            extraClass={styles.buttonActivedSubscription}
          />
        </>
      );
      break;

    case "активен": // if (x === 'value2')
      element = (
        <>
          <div className={className(styles.titleSubscription)}>
            <h3
              className={className(
                styles.titleTextSubscription,
              )}
            >
              {subscription}
            </h3>
            <h4 className={className(styles.titleTextStatus, styles.greenColorText)}>{status}</h4>
          </div>
          <p className={className(styles.answerText)}>{answerPayments}</p>
          <div className={className(styles.titleSubscription)}>
            <p className={className(styles.answerData)}>
              {dateAnswerSubscription}
            </p>
            <p className={className(styles.cardNum)}>{cardBank}</p>
          </div>
          <ButtonMain
            theme={"grey"}
            label={"отменить"}
            size={"l"}
            extraClass={styles.buttonCancel}
          />
        </>
      );
      break;

    default:
      element = (
        <>
          <div className={className(styles.titleSubscription)}>
            <h4 className={className(styles.titleTextStatus)}>
              {"У вас нет активных подписок"}
            </h4>
          </div>
          <p className={className(styles.answerText)}>
            {"Выберите оптимальный тариф для себя"}
          </p>
          <ButtonMain
            theme={"green"}
            label={"ВЫБРАТЬ ТАРИФ"}
            size={"l"}
            extraClass={styles.buttonActivedSubscription}
          />
        </>
      );
      break;
  }
  return element;
  //   );
};
