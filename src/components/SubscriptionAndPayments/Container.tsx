import React, { ReactNode } from "react";
import { FC } from "react";
import styles from "./SubscriptionAndPayments.module.scss";
import className from "classnames";

interface IContainer {
  children: ReactNode;
  extraClass?: string;
}
export const Container: FC<IContainer> = ({ children, extraClass = "" }) => {
  return (
    <div className={className(styles.container, styles[extraClass])}>
      {children}
    </div>
  );
};
