import { FC, useState } from 'react';
import cn from 'classnames';
import classes from './PageButton.module.scss';
import PageIconDefault from './PageIconDefault.png';
import PageIconSelected from './PageIconSelected.png';

export interface PageButtonProps {
  type?: 'button';
  title: string;
  selected?: boolean;
  disabled?: boolean;
}

export const PageButton: FC<PageButtonProps> = ({
  title,
  type = 'button',
  selected = false,
  disabled,
}) => {
  const buttonCn = cn(classes.button);
  let buttonSelectedCn = cn(classes.button_selected);
  let buttonTitleCn = cn(classes.title);

  const [titleColor, setTitleColor] = useState(buttonTitleCn);

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
      className={selected ? `${buttonCn} ${buttonSelectedCn}` : `${buttonCn}`}
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
