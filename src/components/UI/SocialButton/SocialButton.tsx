import React from 'react';
import { FC } from 'react';
import cn from 'classnames';
import styles from './SocialButton.module.scss';

interface ISocialButton {
  type: 'alisa' | 'facebook' | 'google' | 'insta' | 'mailru' | 'odnoklassniki' | 'telegram'| 'twitter'| 'viber'| 'vk'| 'web'| 'whatsapp'| 'yandex'| 'youtube';
  disabled?: boolean;
}

export const SocialButton: FC<ISocialButton> = ({ type, disabled }) => {
    const typeClass = styles[`button_type_${type}`];

  return (
    <button className={ cn(styles.button, disabled ? styles[`button_type_${type}_disabled`] : '', typeClass) }>
    </button>
  );
};