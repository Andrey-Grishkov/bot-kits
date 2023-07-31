import React, { useState, FC, useEffect } from 'react';
import image from './images/bot-kit.png';
import './Notification.scss';

interface NotificationProps {
  text: string;
  handleOpen: () => void;
}

const Notification: FC<NotificationProps> = ({ text, handleOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  // Эффект открытия уведомления
  useEffect(() => {
    handleOpen();
  }, [handleOpen]);

  return (
    <div className={`notification__popup ${isVisible ? 'notification__popup--visible' : ''}`}>
      <p className="notification__message">
        {text} <span className="notification__email">/email!</span>!
      </p>
      <img src={image} className="notification__image" alt="Бот" />
      <div className="notification__close-button" onClick={handleClose}></div>
    </div>
  );
};

export default Notification;
