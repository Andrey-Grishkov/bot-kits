import React, { FC } from 'react';
import './Notification.scss';
import ReactDOM from 'react-dom';
import passwordImg from './images/password.png';
import letterImg from './images/letter.png';

interface NotificationProps {
  setVisible: (value: boolean) => void;
  imageType: 'letter' | 'password';
  visible: boolean;
}

const Notification: FC<NotificationProps> = ({ setVisible, imageType, visible }) => {

  const handleClose = () => {
    setVisible(false);
  };

  const message = imageType === 'letter'
    ? 'Ссылка для подтверждения отправлена тебе на'
    : 'Ссылка для сброса пароля отправлена тебе на';

  // Определение выбранного изображения
  const selectedImage = imageType === 'letter' ? letterImg : passwordImg;

  const portalElement = document.getElementById('portal');

  if (!portalElement) {
    return null; 
  }

  return ReactDOM.createPortal(
    <div className={`notification__popup ${visible ? 'notification__popup--visible' : ''}`}>
      <div className="notification__popup__message">
        {message}
        <div className="notification__popup__email">/email!</div>
      </div>
      <img src={selectedImage} className="notification__popup__image" alt="Уведомление" />
      <button className="notification__popup__close-button" onClick={handleClose} />
    </div>,
    portalElement  
  );  
}

export default Notification;
