import cn from 'classnames';
import classes from './LoadPageButton.module.scss';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { AddPageIcon } from './AddPageIcon';
import { IPage } from '../AddPageField/AddPageField';
// import AddIcon from './add.svg';

export interface LoadPageButtonProps {
  type?: 'button';
  title?: string;
  // onClick?: (page: IPage) => void;
  onClick?: () => void;
  // page: IPage;
  size?: string;
  error?: 'Вы ввели неправильное значение' | 'Ошибка';
  disabled?: boolean;
}

export const LoadPageButton: FC<LoadPageButtonProps> = ({
  onClick,
  // page,
  type = 'button',
  title,
  size = 'xl',
  disabled,
}) => {
  let buttonCn = cn(classes.button);
  let buttonMdCn = cn(classes.button_md);
  let buttonSmCn = cn(classes.button_sm);
  let buttonTitleCn = cn(classes.title);
  const buttonTitleOverCn = cn(classes.title_hover);

  const [btnClasses, setBtnClasses] = useState(buttonCn);
  const [titleColor, setTitleColor] = useState(buttonTitleCn);
  const [iconOpacity, setIconOpacity] = useState(0.5);

  

  useEffect(() => {
    if (size === 'md') {
      setBtnClasses(buttonCn + ' ' + buttonMdCn);
    }

    if (size === 'sm') {
      setBtnClasses(buttonCn + ' ' + buttonSmCn);
    }
  });

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
      className={btnClasses}
      type={type}
      // onClick={() => onClick!(page)}
      onClick={() => onClick!()}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      disabled={disabled}
    >
      <AddPageIcon opacity={iconOpacity} />
      <span className={disabled ? cn(classes.title_disabled) : titleColor}>
        {title}
      </span>
    </button>
  );
};
