import { FC } from 'react';
import styles from './DialoguesList.module.scss';

import SearchIcon from '../../images/icon/20x20/search/search.svg';
import FilterIcon from '../../images/icon/20x20/search/filter.svg';

import { users } from '../Chat/mockData';
import { DialogueListItem } from '../UI/DialogueListItem/DialogueListItem';

export const DialoguesList: FC = () => {
  return (
    <div className={styles['dialogues']}>
      <h1 className={styles['dialogues__title']}>Диалоги</h1>
      <form className={styles['dialogues__form']}>
        <fieldset className={styles['dialogues__fieldset']}>
          <input
            className={styles['dialogues__input']}
            type='text'
            placeholder='Поиск...'
          />
        </fieldset>
        <img
          className={styles['dialogues__search-icon']}
          src={SearchIcon}
          alt='SearhIcon'
        />
        <img
          className={styles['dialogues__filter-icon']}
          src={FilterIcon}
          alt='FilterIcon'
        />
      </form>
      <div className={styles['dialogues__list-wrapper']}>
        {users.map((user, index) => {
            return (
                <DialogueListItem key={index} user={user} />
            )
        })}
      </div>
    </div>
  );
};
