import cn from 'classnames';
import classes from './MailingInput.module.scss';
import { FC } from 'react';

export interface InputProps {
  name?: string;
  type?: string;
  id: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MailingInput: FC<InputProps> = ({ placeholder='Моя рассылка 1', value, error, disabled, onChange, name, id,  ...rest }) => {

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
        name={name}
        type='text'
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {error && (
        <p id='error' className={errorMessageCn}>Вы ввели неправильное значение</p>
      )}
    </fieldset>
  );
};