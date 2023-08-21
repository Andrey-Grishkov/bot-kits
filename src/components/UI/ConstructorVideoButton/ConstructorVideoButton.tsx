import styles from "./ConstructorVideoButton.module.scss";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface IConstructorVideoButton {
  children: ReactNode
  variant?: string
}

export const ConstructorVideoButton: FC<IConstructorVideoButton> = ({ children, variant = 'active' }) => (
  <button className={classNames(styles.button, styles[variant])}>{children}</button>
);
