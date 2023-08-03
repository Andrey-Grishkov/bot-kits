import cn from 'classnames';
import classes from './Input.module.scss';
import { FC } from 'react';

export interface InputProps {
  type?: 'text';
  size?: string;
  placeholder?: string;
  value?: string;
  error?: 'Вы ввели неправильное значение' | 'Ошибка';
  disabled?: boolean;
}

export const Input: FC<InputProps> = ({ size, placeholder, value, error, disabled }) => {

  const fieldsetCn = cn(classes.fieldset);
  const inputCn = cn(classes.input);
  const inputSmallCn = cn(classes.input_small);
  const errorInputCn = cn(classes.errorBorder);
  const errorMessageCn = cn(classes.error);

  let inputClasses = inputCn;
   
  if (error) {
    inputClasses += ` ${errorInputCn}`;
  }

  if (size === 'small') {
    inputClasses += ` ${inputSmallCn}`;
  }

  return (
    <fieldset className={fieldsetCn}>
      <input
        // className={error ? `${inputCn} ${errorInputCn}` : `${inputCn}`}
        className={inputClasses}
        type='text'
        name='input'
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {error && (
        <p id='error' className={errorMessageCn}>{error}</p>
      )}
    </fieldset>
  );
};
