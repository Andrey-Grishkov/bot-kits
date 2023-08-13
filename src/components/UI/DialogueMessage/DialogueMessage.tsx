import { FC } from 'react';
import styles from './DialogueMessage.module.scss';

export interface IDialogueMessageProps {
  type: string;
  icon: string;
  username: string;
  text: string;
  created: string;
  read: string;
}

export const DialogueMessage: FC<IDialogueMessageProps> = ({
  type = 'send',
  icon,
  username,
  text,
  created,
  read,
}) => {
  if (type === 'receive') {
    return (
      <div className={styles['message-receive']}>
        <div className={styles['message-receive__icon']}>
          <img src={icon} alt={icon} />
        </div>
        <div className={styles['message-receive__body']}>
          <div className={styles['message-receive__block']}>
            <div className={styles['message-receive__wrapper']}>
              <p className={styles['message-receive__username']}>{username}</p>
              <p className={styles['message-receive__text']}>{text}</p>
            </div>
            <p className={styles['message-receive__created']}>{created}</p>
          </div>
          <p className={styles['message-receive__read']}>
            Просмотрено в {read}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles['message-send']}>
        <div className={styles['message-send__icon']}>
          <img src={icon} alt={icon} />
        </div>
        <div className={styles['message-send__body']}>
          <div className={styles['message-send__block']}>
            <div className={styles['message-send__wrapper']}>
              <p className={styles['message-send__username']}>{username}</p>
              <p className={styles['message-send__text']}>{text}</p>
            </div>
            <p className={styles['message-send__created']}>{created}</p>
          </div>
          <p className={styles['message-send__read']}>Просмотрено в {read}</p>
        </div>
      </div>
    );
  }
};
