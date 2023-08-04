import React, { FC } from 'react';
import './AuthButton.scss'
import Notification from '../../Notification/Notification';

interface AuthButtonProps {
    visible?: boolean;
    notificationType?: 'letter' | 'password';
    setVisible: (value: boolean) => void;
}

export const AuthButton: FC<AuthButtonProps> = ({ visible, notificationType = 'password', setVisible }) => {

    let buttonText = notificationType !== 'password' ? 'СОЗДАТЬ АККАУНТ' : 'СБРОСИТЬ ПАРОЛЬ';

    const handleClick = () => {
        setVisible(true);
    }

    return (
        <div>
            <button className="auth-button" onClick={handleClick}>
                {buttonText}
            </button>
            {visible && <Notification setVisible={setVisible} imageType={notificationType} visible={visible} />}
        </div>
    )
}