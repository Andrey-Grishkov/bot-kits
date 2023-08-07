import React, { Dispatch, SetStateAction } from 'react';
import { FC } from 'react';
// import styles from './DropdownRepeat.module.scss';
import styles from '../UI/Dropdown/Dropdown.module.scss';
import { Dropdown } from '../UI/Dropdown/Dropdown';
import { options } from './devConstant';

type DropdownType = {
	repeatSelected: string;
	setRepeatSeleted: Dispatch<SetStateAction<string>>;
};
export const DropdownOperations: FC<DropdownType> = ({repeatSelected, setRepeatSeleted}) => {
//   const [repeatSelected, setRepeatSeleted] = React.useState("");

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