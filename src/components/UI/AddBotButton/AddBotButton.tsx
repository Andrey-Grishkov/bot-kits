import styles from './AddBotButton.module.scss';
import { ReactNode } from 'react';
import classNames from 'classnames';

interface IaddSocialButtonProps {
  children: ReactNode
  value: string
  variant?: string
}

export function AddBotButton({children, value, variant = 'active'}: IaddSocialButtonProps) {
  return (
    <button className={ classNames(styles.button, styles[variant]) }>
      <div>
        {children}
      </div>
      {value}
    </button>
  );
}
