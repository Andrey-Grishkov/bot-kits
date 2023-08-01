import styles from "./ConstructorLogicBackGround.module.scss";
import { FC, ReactNode } from "react";

interface IconstructorBackground {
  children: ReactNode;
}

export const ConstructorBackground: FC<IconstructorBackground> = ({
  children,
}) => <div className={styles.container}>{children}</div>;
