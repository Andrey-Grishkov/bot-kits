import React from 'react';
import { FC } from 'react';
import './Helper.scss';

interface IHelper {
  text: string;
  type: 'vertical' | 'horizontal'
}

export const Helper: FC<IHelper> = ({text='Helper', type='vertical' }) => {
    
  return (
    <div className={`helper__container-${type}`}>
      <p className='helper'>{text}</p>
      <svg className={`helper__stroke-${type}`} width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.378906 0.378702L4.62155 4.62134L0.378906 8.86398L0.378906 0.378702Z" fill="#2E293D"/>
      </svg>
    </div>
  );
};