import React from 'react';
import { FC } from 'react';
import styles from './NumberSelect.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';

export const NumberSelect: FC = () => {
  const [numberSelected, setNumberSeleted] = React.useState("");

  const options = [ 
    '10', 
    '20',
    '30',
  ]

  return (
    <div className={styles.wrapper}>
        <Dropdown
          setPayloadSeleted={setNumberSeleted}
          payload={numberSelected}
          optionArr={options}
          name='numbers'
        />
    </div>
  );
};