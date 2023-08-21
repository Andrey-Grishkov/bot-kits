import { FC } from 'react';
import styles from './DialogueListItem.module.scss';

export interface IUser {
  id: number;
  name: string;
  icon: string;
  inactive: string;
}

export interface IDialogueListItemProps {
  user: IUser;
}

export const DialogueListItem: FC<IDialogueListItemProps> = ({ user }) => {
    return (
        <div className={styles.item}>
            <div className={styles['item__icon-wrapper']}>
                <img src={user.icon} alt={user.name} />
            </div>
            <div className={styles['item__username-wrapper']}>
                <p className={styles['item__username']}>{user.name}</p>
                <p className={styles['item__usertext']}>Какой-то текст.</p>
            </div>
            <div className={styles['item__date-wrapper']}>{user.inactive}</div>
        </div>
    )
}