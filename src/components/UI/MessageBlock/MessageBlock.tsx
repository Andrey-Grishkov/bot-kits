import cn from 'classnames';
import classes from './MessageBlock.module.scss';
import { FC, useState } from 'react';

import AttachIcon from './attach.svg';
import EmojiIcon from './emoji.svg';
import AddIcon from './add.svg';

export interface MessageBlockProps {
  type?: 'text';
  size?: string;
  placeholder?: 'Введите сообщение...';
  value?: string;
  disabled?: boolean;
}

export const MessageBlock: FC<MessageBlockProps> = ({ placeholder }) => {
  const containerCn = cn(classes.container);
  const fieldsetCn = cn(classes.fieldset);
  const inputCn = cn(classes.input);

  const [buttons, setButtons] = useState([
    {
      type: 'attach',
      image: '',
    },
    {
      type: 'emoji',
      image: '',
    },
    {
      type: 'add',
      image: '',
    },
  ]);

  return (
    <div className={cn(classes.container)}>
      <fieldset className={fieldsetCn}>
        <input
          className={cn(classes.input)}
          type='text'
          placeholder={placeholder}
        />
      </fieldset>
      <div className={cn(classes.actions)}>
        <img className={cn(classes.icon)} src={AttachIcon} alt='icon' />
        <img className={cn(classes.icon)} src={EmojiIcon} alt='icon' />
        <img className={cn(classes.icon)} src={AddIcon} alt='icon' />
      </div>
    </div>
  );
};
