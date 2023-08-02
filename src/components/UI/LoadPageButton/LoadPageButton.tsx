import cn from 'classnames';
import classes from './LoadPageButton.module.scss';
import { FC, MouseEventHandler, useState } from 'react';
import { AddPageIcon } from './AddPageIcon';
// import AddIcon from './add.svg';

export interface LoadPageButtonProps
  extends MouseEventHandler<HTMLButtonElement> {
  type?: 'button';
  handleClick: () => void;
  size?: string;
  value?: string;
  error?: 'Вы ввели неправильное значение' | 'Ошибка';
  disabled?: boolean;
  children: any;
}

export const LoadPageButton: FC<LoadPageButtonProps> = ({
  handleClick,
  type = 'button',
  disabled,
  children,
}) => {
  const buttonCn = cn(classes.button);
  let buttonTitleCn = cn(classes.title);
  const buttonTitleOverCn = cn(classes.title_hover);

  const [titleColor, setTitleColor] = useState(buttonTitleCn);
  const [iconOpacity, setIconOpacity] = useState(0.5);

  const onMouseOver = () => {
    if (!disabled) {
      setTitleColor(cn(classes.title_hover));
      setIconOpacity(1);
    }
  };

  const onMouseOut = () => {
    if (!disabled) {
      setTitleColor(cn(classes.title));
      setIconOpacity(0.5);
    }
  };

  return (
    <button
      className={buttonCn}
      type={type}
      onClick={handleClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      disabled={disabled}
    >
      <AddPageIcon opacity={iconOpacity} />
      <span className={disabled ? cn(classes.title_disabled) : titleColor}>
        Загрузить страницу
      </span>
      {/* {children} */}
    </button>
  );
};
