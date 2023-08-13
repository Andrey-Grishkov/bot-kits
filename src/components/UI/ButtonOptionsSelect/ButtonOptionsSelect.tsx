import React from 'react';
import { FC } from 'react';
import styles from './ButtonOptionsSelect.module.scss';
import horizontal from '../../../images/icons/horizontal.svg';
import horizontalAct from '../../../images/icons/horizontalAct.svg';
import vertical from '../../../images/icons/vertical.svg';
import verticalAct from '../../../images/icons/verticalAct.svg';


export interface IButtonOptionsSelect {
  onChange: (item: any) => void;
}

interface Button {
  name: string;
  type: 'horizontal' | 'vertical' | "";
}


export const ButtonOptionsSelect: FC<IButtonOptionsSelect> = ({onChange}) => {
  const [selectedButton, setSelectedButton] = React.useState<Button>(
    { name: "", type: "" },
  );
	const [direction, setDirection] = React.useState("");
  const [horizontalActive, setHorizontalActive] = React.useState(false);
  const [verticalActive, setVerticalActive] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleHorizontalClick = () => {
    setHorizontalActive(true);
    setDirection("horizontal");
    setVerticalActive(false);
    setInputValue("");
  };

  const handleVerticalClick = () => {
    setHorizontalActive(false);
    setVerticalActive(true);
    setDirection("vertical");
    setInputValue("");
  };

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
  setSelectedButton({
    name: inputValue,
    type: direction as Button["type"],
  })
};

	React.useEffect(() => {
		onChange(selectedButton);
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [selectedButton]);
    

  return (
    <div className={styles.container}>
      <p className={styles.container_title}>Инлайн кнопка</p>
      {horizontalActive ? 
        (<div className={styles.direction__wrapper}>
          <div className={`${styles.direction} ${horizontalActive && styles.direction_selected}`}>
            <img src={horizontalAct} alt="Горизонтальное направление"/>
            Горизонтальный инлайн
            <svg className={styles.tick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#243CBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <fieldset className={styles.fieldset}>
            <input className={styles.input}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Введите название"
            />
          </fieldset>
        </div>)
        : 
        (<button type="button" className={styles.direction} onClick={handleHorizontalClick}>
          <img src={horizontal} alt="Горизонтальное направление"/>
          Горизонтальный инлайн
        </button>
        )}

      {verticalActive ? 
        (<div className={styles.direction__wrapper}>
          <div className={`${styles.direction} ${verticalActive && styles.direction_selected}`}>
            <img src={verticalAct} alt="Вертикальное направление"/>
            Вертикальный инлайн
            <svg className={styles.tick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#243CBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <fieldset className={styles.fieldset}>
            <input className={styles.input}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Введите название"
            />
          </fieldset>
        </div>)
        : 
        (<button type="button" className={styles.direction} onClick={handleVerticalClick}>
          <img src={vertical} alt="Вертикальное направление"/>
          Вертикальный инлайн
        </button>
      )}
    </div>
  );
};