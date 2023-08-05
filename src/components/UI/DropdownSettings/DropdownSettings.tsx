import React from 'react';
import { FC } from 'react';
import styles from './DropdownSettings.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';

export const DropdownSettings: FC = () => {
  const [settingSelected, setSettingSeleted] = React.useState("");

  const options = [ 
    'По дням', 
    'По неделям',
    'По месяцам',
    'По годам',
  ]

  return (
       <div className={styles.wrapper}>
        <Dropdown
          setPayloadSeleted={setSettingSeleted}
          payload={settingSelected}
          optionArr={options}
          name='settings'
        />
    </div>
  );
};