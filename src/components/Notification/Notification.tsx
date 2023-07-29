import React, { useState } from 'react';
import image from './images/Component 29.png';
import './Notification.scss';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <>
      {/* Опциональна9 кнопка дл9 отображени9*/}
      <button onClick={handleOpen}>Показать уведомление</button>
      <div className={`notification__popup ${isVisible ? 'notification__popup--visible' : ''}`}>
        <p className="notification__message">
          Письмо с подтверждением отправлено тебе на <span className="notification__email">/email!</span>!
        </p>
        <img src={image} className="notification__image" alt="Бот" />
        <button className="notification__close-button" onClick={handleClose}>x</button>
      </div>
    </>
  );
};

export default Notification;
