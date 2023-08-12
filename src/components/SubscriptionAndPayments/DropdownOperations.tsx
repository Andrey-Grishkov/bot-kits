import React, { Dispatch, SetStateAction } from "react";
import { FC } from "react";
import stylesDrop from "../UI/Dropdown/Dropdown.module.scss";
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
    <div className={className(stylesDrop.wrapper, styles.dropDown)}>
      <Dropdown
        setPayloadSeleted={setRepeatSeleted}
        payload={repeatSelected}
        optionArr={options}
        name="repeats"
      />
    </div>
  );
};
