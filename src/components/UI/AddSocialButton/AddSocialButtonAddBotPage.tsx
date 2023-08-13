import styles from "./AddSocialButton.module.scss";
import React from "react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import classNames from "classnames";

interface IaddSocialButtonProps {
    children: ReactNode;
    value: string;
    variant?: string;
    onclick: (name: string, href: string) => void;
    chosen: string,
    href: string
}

export function AddSocialButtonAddBotPage({
                                              children,
                                              value,
                                              variant = "active",
                                              onclick,
                                              chosen,
                                              href
                                          }: IaddSocialButtonProps) {
    return (
        <button
            className={classNames(
                styles.button,
                styles[variant],
                styles["chosen" + chosen]
            )}
            onClick={() => onclick(value, href)}
        >
            <div>{children}</div>
            {value}
        </button>
    );
}
