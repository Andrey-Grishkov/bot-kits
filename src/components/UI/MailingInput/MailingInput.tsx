import cn from 'classnames';
import classes from './MailingInput.module.scss';
import { FC } from 'react';

export interface InputProps {
  type?: 'text';
  placeholder?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
}

export const MailingInput: FC<InputProps> = ({ placeholder='Моя рассылка 1', value, error, disabled }) => {

  const fieldsetCn = cn(classes.fieldset);
  const inputCn = cn(classes.input);
  const errorInputCn = cn(classes.errorBorder);
  const errorMessageCn = cn(classes.error);

  let inputClasses = inputCn;
   
  if (error) {
    inputClasses += ` ${errorInputCn}`;
  }

  return (
    <fieldset className={fieldsetCn}>
      <input
        className={inputClasses}
        type='text'
        name='input'
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {error && (
        <p id='error' className={errorMessageCn}>Вы ввели неправильное значение</p>
      )}
    </fieldset>
  );
};