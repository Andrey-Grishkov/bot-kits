import styles from './AddSocialButton.module.scss';
import { ReactNode } from 'react';
import classNames from 'classnames';

interface IaddSocialButtonProps {
    children: ReactNode
    value: string
    variant?: string
}

export function AddSocialButton({ children, value, variant = 'active' }: IaddSocialButtonProps) {
    return (
        <button className={classNames(styles.button, styles[variant])} >
            <div>
                {children}
            </div>
            {value}
        </button>
    );
}
