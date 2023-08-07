import React, { ReactNode } from "react";
import { FC } from "react";
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { Subscription } from "./Subscription";
import { BlockBalance } from "./BlockBalance";
import { Container } from "./Container";
import { DropdownOperations } from "./DropdownOperations";
import { devConstant } from "./devConstant";
import { Payments } from "./Payments";

const {
  subscription,
  balance,
  statusActive,
  whyNoSubscription,
  answerSubscription,
  dateAnswerSubscription,
} = devConstant;

export const SubscriptionAndPayments: FC = () => {
  const [status, setStatusActive] = React.useState("");
  React.useEffect(() => {
    setStatusActive(statusActive);
  }, [status]);
  return (
    <div className={className(styles.section)}>
      <div className={className(styles.title)}>
        <h2 className={className(styles.titleText)}>Подписка и платежи</h2>
        <ButtonMain
          theme={"green"}
          label={"сменить тариф"}
          size={"l"}
          extraClass={styles.buttonChangeTariff}
        />
      </div>

      <div className={className(styles.blockInfo)}>
        <div className={className(styles.block)}>
          <Container extraClass="subscription">
            <Subscription status={status} />
          </Container>
          <Container extraClass="containerBalans">
            <BlockBalance balance={balance} />
          </Container>
        </div>
        <Container extraClass="payments">
          <Payments />
        </Container>
      </div>
    </div>
  );
};
