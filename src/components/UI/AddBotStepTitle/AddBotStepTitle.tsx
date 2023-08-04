import React from 'react';
import { FC } from 'react';
import './AddBotStepTitle.scss';

interface IAddBotStepTitle {
  step: string;
  title: string;
}

export const AddBotStepTitle: FC<IAddBotStepTitle> = ({step, title='Ключ доступа'}) => {
  return (
    <div className='title__container'>
      <h2>{`${step}`} Шаг	&#10095; </h2>
      <h2>{title}</h2>
    </div>
  );
};