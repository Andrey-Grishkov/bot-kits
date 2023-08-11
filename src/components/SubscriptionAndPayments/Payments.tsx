import className from "classnames";
import { DropdownOperations } from "./DropdownOperations";
import { devConstant, options, payArray, tableHead } from "./devConstant";
import { Dispatch, FC, SetStateAction } from "react";
import React from "react";
import styles from "./SubscriptionAndPayments.module.scss";

const {
  subscription,
  balance,
  statusActive,
  whyNoSubscription,
  answerSubscription,
  dateAnswerSubscription,
} = devConstant;
const status = statusActive;

export const Payments: FC = () => {
  const [repeatSelected, setRepeatSeleted] = React.useState("Все");
  return (
    <>
      <div className={className(styles.titlePay)}>
        <h2 className={className(styles.titleTableText)}>История платежей</h2>

        <DropdownOperations
          repeatSelected={repeatSelected}
          setRepeatSeleted={setRepeatSeleted}
        />
      </div>
      <table className={".tableHead"}>
        <thead>
        <tr className={styles.table__trHead}>
          <td className={styles.table__trHead}> {tableHead.data}</td>
          <td> {tableHead.sum}</td>
          <td> {tableHead.operation}</td>
          <td> {tableHead.annotation}</td>
          <td> {tableHead.statusPay}</td>
        </tr>
        </thead>
        <tbody>
        {payArray.map(
          (item, index) =>
            index <= 10 &&
            (repeatSelected === options[0] ||
              repeatSelected === item.operation) && (
              <tr className={styles.table__tr} key={index}>
                <td className={styles.table__tr}>
                  {" "}
                  {item.data.d + " " + item.data.h}
                </td>
                <td> {item.sum}&#8381;</td>
                <td> {item.operation}</td>
                <td> {item.annotation}</td>
                <td
                  className={
                    item.status === "Отклонено" ? styles.redColorText : ""
                  }
                >
                  {item.status}
                </td>
              </tr>
            )
        )}
        </tbody>
      </table>
    </>
  );
};
