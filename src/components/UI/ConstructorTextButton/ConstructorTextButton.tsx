import styles from "./ConstructorTextButton.module.scss";
import { ReactNode, useState, useEffect } from "react";
import classNames from "classnames";

interface IconstructorTextButton {
  value: string;
  variant?: string;
}

export function ConstructorTextButton({  value,  variant = "active",}: IconstructorTextButton) {
  return <button className={classNames(styles.button, styles[variant])}>{value}</button>;
}
