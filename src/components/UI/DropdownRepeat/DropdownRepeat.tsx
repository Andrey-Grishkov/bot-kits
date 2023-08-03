import React from 'react';
import { FC } from 'react';
import styles from './DropdownRepeat.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';


export const DropdownRepeat: FC = () => {
  const [repeatSelected, setRepeatSeleted] = React.useState("");

  const options = [ 
    'Без повтора', 
    'Каждый день',
    'Каждую неделю',
    'Каждый месяц',
    'Каждый год',
    'Свой вариант',
  ]


  return (
     <div className={styles.wrapper}>
        <Dropdown
          setPayloadSeleted={setRepeatSeleted}
          payload={repeatSelected}
          optionArr={options}
          name='repeats'
        />
    </div>
  );
};