import React from "react";
import { FC } from "react";
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { Subscription } from "./Subscription";
import { BlockBalance } from "./BlockBalance";
import { Container } from "./Container";
import { devConstant } from "./devConstant";
import { Payments } from "./Payments";

const {
  balance,
  statusActive
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
          label={"СМЕНИТЬ ТАРИФ"}
          size={"l"}
          extraClass={className(styles.buttonChangeTariff, styles.switchDesktop)}
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
      <ButtonMain
          theme={"green"}
          label={"СМЕНИТЬ ТАРИФ"}
          size={"l"}
          extraClass={className(styles.buttonChangeTariff, styles.switchMobile)}
        />
    </div>
  );
};
