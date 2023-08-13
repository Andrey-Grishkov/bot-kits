import { FC } from 'react';
import styles from './DialogueContainer.module.scss';

import SearchIcon from '../../images/icon/24x24/common/search.svg';
import PlayIcon from '../../images/icon/24x24/common/play.svg';
import TrashIcon from '../../images/icon/24x24/common/trash.svg';
import HidePanelIcon from '../../images/icon/40x40/chat/hide-panel.svg';
import { MessageBlock } from '../UI/MessageBlock/MessageBlock';
import SendIcon from '../../images/icon/40x40/chat/send.svg';

import { users } from '../Chat/mockData';
import { messages } from '../Chat/mockData';
import {
  DialogueMessage,
  IDialogueMessageProps,
} from '../UI/DialogueMessage/DialogueMessage';

export interface IMessage {
  id: number;
  chat_id: number;
  userId: number;
  text: string;
  replyTo: number;
  created: string;
  read: string;
}

const currentUser = users[2];
let currentChatMessages: Array<IMessage> = [];

messages.forEach((message) => {
  if (message.chat_id === 3) {
    currentChatMessages.push(message);
  }
});
// console.log(currentChatMessages);

export const DialogueContainer: FC = () => {
  return (
    <div className={styles.dialogue}>
      <div className={styles['dialogue__header']}>
        <div className={styles['dialogue__icon-wrapper']}>
          <img src={currentUser.icon} alt={currentUser.name} />
        </div>
        <p className={styles['dialogue__username']}>{currentUser.name}</p>
        <ul className={styles['dialogue__actions']}>
          <li className={styles['dialogue__action-item']}>
            <img src={SearchIcon} alt='search' />
          </li>
          <li className={styles['dialogue__action-item']}>
            <img src={PlayIcon} alt='play' />
          </li>
          <li className={styles['dialogue__action-item']}>
            <img src={TrashIcon} alt='delete' />
          </li>
        </ul>
      </div>
      <div className={styles['dialogue__messages']}>
        {currentChatMessages.map((message, index) => {
            let type = 'send' || 'receive';
            (index % 2) === 0 ? type = 'receive' : type = 'send';
            return (<DialogueMessage 
                key={index}
                type={type}
                icon={currentUser.icon} // для примера
                username={currentUser.name} // для примера
                text={message.text}
                created={message.created}
                read={message.read}
                />)
        })}
        <img className={styles['dialogue__hide-icon']} src={HidePanelIcon} alt='hide' />
      </div>
      <div className={styles['dialogue__send-wrapper']}>
        <MessageBlock placeholder='Введите сообщение...' />
        <img className={styles['dialogue__send-button']} src={SendIcon} alt='send' />
      </div>
    </div>
  );
};
