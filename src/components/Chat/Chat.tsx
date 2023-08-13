import { FC } from 'react';
import styles from './Chat.module.scss';
import { DialoguesList } from '../DialoguesList/DialoguesList';
import { DialogueContainer } from '../DialogueContainer/DialogueContainer';
import { UserDetails } from '../UserDetails/UserDetails';

export const Chat: FC = () => {
  return (
    <div className={styles.chat}>
      <div className={styles['chat__dialogues-list']}>
        <DialoguesList />
      </div>
      <div className={styles['chat__dialogue-container']}>
        <DialogueContainer />
      </div>
      <div className={styles['chat__user-details']}>
        <UserDetails />
      </div>
    </div>
  );
};
