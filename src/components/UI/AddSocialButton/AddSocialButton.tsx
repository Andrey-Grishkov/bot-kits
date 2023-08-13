import styles from "./AddSocialButton.module.scss";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import classNames from "classnames";

interface IaddSocialButtonProps {
    children: ReactNode
    value: string
    variant?: string
    purpose?: 'default' | 'mailing'
    onClick?: (() => void) | ((e: React.SyntheticEvent) => void);
}

export function AddSocialButton({ children, value, purpose = 'default', variant = 'active', onClick }: IaddSocialButtonProps) {
    return (
        <button className={classNames(styles.button, styles[variant], purpose as IaddSocialButtonProps["purpose"] === 'mailing' ? styles.button_mailing : '')} onClick={onClick}>
            <div>
                {children}
            </div>
            {value}
        </button>
    );
}
