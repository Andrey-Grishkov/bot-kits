import { FC } from "react";
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
interface IBalance {
  extraClass?: string;
  balance: number;
}
export const BlockBalance: FC<IBalance> = ({ balance, extraClass = "" }) => {
  return (
    <>
      <div className={className(styles.balance, styles[extraClass])}>
        <p className={className(styles.text)}> Баланс </p>
        <p className={className(styles.sum)}>{balance}&#8381;</p>
      </div>
      <ButtonMain
        theme={"grey"}
        label={"АКТИВИРОВАТЬ ПРОМОКОД"}
        size={"l"}
        extraClass={styles.button}
      />
    </>
  );
};
