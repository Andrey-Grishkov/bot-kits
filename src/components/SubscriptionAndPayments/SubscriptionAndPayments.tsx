import React from "react";
import { FC } from "react";
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { Subscription } from "./Subscription";
import { BlockBalance } from "./BlockBalance";
import { Container } from "./Container";
// import { DropdownOperations } from "./DropdownOperations";
import { devConstant } from "./devConstant";
import { Payments } from "./Payments";

const {
  balance,
  statusActive,
} = devConstant;

export const SubscriptionAndPayments: FC = () => {
  const [status, setStatusActive] = React.useState("");
  // React.useEffect(() => {
  //   setStatusActive(statusActive);
  // }, [status]);
  return (
    <div className={className(styles.section)}>
      <div className={className(styles.title)}>
        <h2 className={className(styles.titleText)}>Подписка и платежи</h2>
        <ButtonMain
          theme={"green"}
          label={"СМЕНИТЬ ТАРИФ"}
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
      <div 
      className={className(styles.devExtraClass)}
      >
        <p>кнопки разработчика:  </p>
        <ButtonMain
          onClick={() => setStatusActive('неактивен')}
          theme={"green"}
          label={'неактивен'}
          size={"s"}
          extraClass={styles.buttonDEV}
        />
                <ButtonMain
          onClick={() => setStatusActive('новый')}
          theme={"green"}
          label={'новый'}
          size={"s"}
          extraClass={styles.buttonDEV}
        />
                <ButtonMain
          onClick={() => setStatusActive('активен')}
          theme={"green"}
          label={'активен'}
          size={"s"}
          extraClass={styles.buttonDEV}
        />
      </div>
    </div>
  );
};
