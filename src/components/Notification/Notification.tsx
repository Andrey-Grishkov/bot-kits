import React, { useState, FC, useEffect } from 'react';
import './Notification.scss';
import letterImage from './images/letter.png';
import passwordImage from './images/password.png';

interface NotificationProps {
  handleOpen: () => boolean;
  imageType?: 'letter' | 'password';
}

const Notification: FC<NotificationProps> = ({ handleOpen, imageType }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    handleOpen();
  }, [handleOpen]);

  let selectedImage;
  if (imageType === 'letter') {
    selectedImage = letterImage;
  } else if (imageType === 'password') {
    selectedImage = passwordImage;
  }

  return (
    <div className={`notification__popup ${isVisible ? 'notification__popup--visible' : ''}`}>
      <div className="notification__message">
        {imageType === 'letter' ? 'Письмо с подтверждением отправлено тебе на' : 'Ссылка для сброса пароля отправлена тебе на'}<div className="notification__email">/email!</div>!
      </div>
        <img src={selectedImage} className="notification__image" alt="Уведомление" />
      <div className="notification__close-button" onClick={handleClose}></div>
    </div>
  );
};

export default Notification;
