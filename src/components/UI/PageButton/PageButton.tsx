import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import classes from './PageButton.module.scss';
import { AddPageIcon } from '../LoadPageButton/AddPageIcon';
import PageIconDefault from './PageIconDefault.png';
import PageIconSelected from './PageIconSelected.png';

export interface PageButtonProps {
  type?: 'button';
  title: string;
  size?: string;
  selected?: boolean;
  disabled?: boolean;
  isLoad?: boolean;
}

export const PageButton: FC<PageButtonProps> = ({
  title,
  type = 'button',
  size = 'sm',
  selected = false,
  disabled,
  isLoad,
}) => {
  let buttonCn = cn(classes.button);
  let buttonMdCn = cn(classes.button_md);
  let buttonSelectedCn = cn(classes.button_selected);
  let buttonTitleCn = cn(classes.title);

  const [btnClasses, setBtnClasses] = useState(buttonCn);
  const [titleColor, setTitleColor] = useState(buttonTitleCn);

  useEffect(() => {
    if (size === 'md') {
      setBtnClasses(buttonCn + ' ' + buttonMdCn);
    }

  });


  const onMouseOver = () => {
    if (!disabled) {
      setTitleColor(cn(classes.title_hover));
    }
  };

  const onMouseOut = () => {
    if (!disabled) {
      setTitleColor(cn(classes.title));
    }
  };

  return (
    <button
      className={selected ? `${btnClasses} ${buttonSelectedCn}` : `${btnClasses}`}
      type={type}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      disabled={disabled}
    >
      <img
        className={
          disabled ? cn(classes.icon_disabled) : cn(classes.icon_default)
        }
        src={selected ? PageIconSelected : PageIconDefault}
        alt='PageIconDefault'
      />
      <span className={disabled ? cn(classes.title_disabled) : titleColor}>
        {title} {selected}
      </span>
    </button>
  );
};
