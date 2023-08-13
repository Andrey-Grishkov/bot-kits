import React from 'react';
import { FC } from 'react';
import './Message.scss';

interface IMessage {
  text: string;
}

export const Message: FC<IMessage> = ({ text = "Сcылка скопирована"}) => {
  return (
    <div className='message__container'>
      <p className='message'>{text}</p>
    </div>
  );
};