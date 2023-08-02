import React, { FC, useState } from 'react';
import './AuthButton.scss'
import Notification from '../../Notification/Notification';

interface AuthButtonProps {
    isValidate?: () => Promise<boolean>;
    disableCondition?: () => boolean;
    type: 'register' | 'login' | 'reset';
    notificationType?: 'letter' | 'password';
}

const AuthButton: FC<AuthButtonProps> = ({ isValidate, disableCondition, type = 'register', notificationType = 'password' }) => {
    const [isDisable, setDisable] = useState(disableCondition ? disableCondition() : true);
    const [showNotification, setShowNotification] = useState(false);

    const handleClick = async () => {
        if (type !== 'login' && isValidate) {
            const isValid = await isValidate();
            setDisable(!isValid);
            setShowNotification(isValid && type === 'reset');
        }
    }

    let buttonText = 'Создать аккаунт';
    if (type === 'login') buttonText = 'Войти';
    if (type === 'reset') buttonText = 'Сбросить пароль';

    return (
        <div>
            <button className="auth-button" onClick={handleClick} disabled={type !== 'login' && isDisable}>
                {buttonText}
            </button>
            {showNotification && <Notification handleOpen={() => false} imageType={notificationType} />}
        </div>
    )
}

export default AuthButton;  