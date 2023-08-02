import cn from 'classnames';
import classes from './AddPageField.module.scss';
import { FC } from 'react';

export interface IAddPageFieldProps {
  type?: 'text';
  size?: string;
  placeholder?: string;
  value?: string;
  error?: 'Вы ввели неправильное значение' | 'Ошибка';
  disabled?: boolean;
}

export const AddPageField: FC<IAddPageFieldProps> = () => {
    return (
        <div className=''></div>
    )
}