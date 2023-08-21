import {FC, Dispatch, SetStateAction } from "react";
import styles from "./SubscriptionAndPayments.module.scss";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { options } from "./devConstant";
import className from "classnames";

type DropdownType = {
  repeatSelected: string;
  setRepeatSeleted: Dispatch<SetStateAction<string>>;
};
export const DropdownOperations: FC<DropdownType> = ({
  repeatSelected,
  setRepeatSeleted,
}) => {
  return (
    <div className={className(styles.dropDown)}>
      <Dropdown
        setPayloadSeleted={setRepeatSeleted}
        payload={repeatSelected}
        optionArr={options}
        name="repeats"
      />
    </div>
  );
};
