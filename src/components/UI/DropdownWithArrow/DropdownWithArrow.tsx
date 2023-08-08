import React from 'react';
import { FC } from 'react';
import styles from './DropdownWithArrow.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';

export const DropdownWithArrow: FC = () => {
  const [optionsSelected, setOptionsSeleted] = React.useState("");

  const options = [ 
    'Переменная 1', 
    'Переменная 2',
    'Переменная 3',
    'Переменная 4',
    'Переменная 5',
  ]

  return (
    <div className={styles.wrapper}>
      <Dropdown
        setPayloadSeleted={setOptionsSeleted}
        payload={optionsSelected}
        optionArr={options}
        name='options'
      />
    </div>
  );
};