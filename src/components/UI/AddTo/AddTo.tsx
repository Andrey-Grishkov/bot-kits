import React from 'react';
import { FC } from 'react';
import styles from './AddTo.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';

export const AddTo: FC = () => {
  const [typeSelected, setTypeSeleted] = React.useState("");

  const options = [ 
    'Добавить столбец', 
    'Добавить список',
  ]

  return (
    <div className={styles.wrapper}>
        <Dropdown
          setPayloadSeleted={setTypeSeleted}
          payload={typeSelected}
          optionArr={options}
          name='types'
        />
    </div>
  );
};