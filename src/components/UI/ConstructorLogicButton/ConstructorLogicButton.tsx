import styles from "./ConstructorLogicButton.module.scss";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface IconstructorLogicButton {
  children: ReactNode
  value: string
  variant?: string
}

export const ConstructorLogicButton: FC<IconstructorLogicButton> = ({
  children,
  value,
  variant = 'active' 
}) => <button className={classNames(styles.button, styles[variant])}>{children}{value}</button>;
