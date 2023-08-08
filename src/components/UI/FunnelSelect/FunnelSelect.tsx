import React, { BaseSyntheticEvent } from 'react';
import { FC } from 'react';
import styles from './FunnelSelect.module.scss';

export interface IFunnelSelect {
  onChange: (item: any) => void;
	name: string;
	value: string;
}


export const FunnelSelect: FC<IFunnelSelect> = ({onChange, name, value  }) => {
  const [ulElemActive, setUlElemActive] = React.useState(false);
	const [funnelActive, setFunnelActive] = React.useState(false);
  const [funnelNotActive, setFunnelNotActive] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");

	const options: string[] = [
    'Воронка 1', 
    'Воронка 2',
    'Воронка 3',
  ]

  const handleClick = (e: BaseSyntheticEvent) => {
		e.stopPropagation();

    setUlElemActive(true);
	};

	React.useEffect(() => {
		const handleClickPad = () => {
			setUlElemActive(false);
		};

		document.addEventListener("click", handleClickPad);

		return () => document.removeEventListener("click", handleClickPad);
	}, []);

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setFunnelActive(true);
    setFunnelNotActive(false);
  };

  const handleNotActiveClick = (): void => {
    setSelectedOption("not-active");
    setFunnelActive(false);
    setFunnelNotActive(true);
};

	React.useEffect(() => {
		onChange(selectedOption);
		}, [selectedOption]);
    

  return (
    <>
    <div onClick={handleClick} className={styles.container}>
    {funnelActive ? (<div className={styles.titleSelected}>
      {selectedOption}
      <svg className={styles.tick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#243CBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>) : 
    (<div className={styles.titleSelect}>
       Активировать
      </div>)}
    <ul className={`${styles.ul} ${ulElemActive && styles.ulActive} ${options.length > 2 && styles.ulScroll }`}>
      {options.map((item, index) => (
        <li 
          key={index}
          value={item}
          onClick={() => handleOptionClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
    </div>
    {funnelNotActive ? (<div className={styles.titleSelected}>
      Не активировать
      <svg className={styles.tick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#243CBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>) : 
    (<div className={styles.titleSelect} onClick={handleNotActiveClick }>
       Не активировать
      </div>)}
</>
  );
};