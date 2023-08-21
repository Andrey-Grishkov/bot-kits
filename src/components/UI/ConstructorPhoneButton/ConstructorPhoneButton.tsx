import styles from "./ConstructorPhoneButton.module.scss";
import classNames from "classnames";
import { SvgPhoneConstructor, SvgTrashCan } from './SvgIcons'

export const ConstructorPhoneButton = () => (
  <div className={classNames(styles.container)}>
    <button>
        <SvgPhoneConstructor/>
    </button>
    <button>
        <SvgTrashCan/>
    </button>
  </div>
);
