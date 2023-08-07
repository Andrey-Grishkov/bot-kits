import React from 'react';
import { FC } from 'react';
import './AccountSettingButton.scss';
import settings from '../../../images/icons/settings.svg';
import payment from '../../../images/icons/payment.svg';
import logOut from '../../../images/icons/log out.svg';

export const AccountSettingButton: FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setOpen(false);
    }
  };
  const handleSettings= () => {
    
  };
  const handleSubscribe = () => {
    
  };
  const handleLogout = () => {
    
  };


  return (
    <div className='dropdown'>
      <button 
        onClick={handleOpen} 
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
        handleClose(e)}
        className='dropdown-button'></button>
        {open ? (
        <ul className='menu'>
          <li className='menuItem'>
            <button className='button' onClick={handleSettings} >
              <img className='buttonIcon' src={settings} alt="Настройки аккаунта" />
              <span className='label'>Настройки аккаунта</span>
            </button>
          </li>
          <li className='menuItem'>
            <button className='button' onClick={handleSubscribe} >
              <img className='buttonIcon' src={payment} alt="Подписка и платежи" />
              <span className='label'>Подписка и платежи</span>
            </button>
          </li>
          <svg width="244" height="1" viewBox="0 0 244 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="244" y2="0.5" stroke="#D7DEEA"/>
          </svg>
          <li className='menuItem'>
            <button className='button' onClick={handleLogout} >
              <img className='buttonIcon' src={logOut} alt="Выйти" />
              <span className='label'>Выйти</span>
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};