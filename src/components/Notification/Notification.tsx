import React, { useState, FC, useEffect } from 'react';
import './Notification.scss';
import letterImage from './images/letter.png';
import passwordImage from './images/password.png';

interface NotificationProps {
  handleOpen: () => boolean;
  imageType: 'letter' | 'password';
}

const Notification: FC<NotificationProps> = ({ handleOpen, imageType = 'letter' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, [handleOpen]);

  const selectedImage = imageType === 'letter' ? letterImage : passwordImage;

  const messageText = imageType === 'letter' 
    ? 'Письмо с подтверждением отправлено тебе на' 
    : 'Ссылка для сброса пароля отправлена тебе на';

  return (
    <div className={`notification__popup ${isVisible ? 'notification__popup--visible' : ''}`}>
      <div className="notification__popup__message">
        {messageText}
        <div className="notification__popup__email">/email!</div>!
      </div>
      <img src={selectedImage} className="notification__popup__image" alt="Уведомление" />
      <button className="notification__popup__close-button" onClick={handleClose} />
    </div>
  );
};

export default Notification;