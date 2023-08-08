import React, { BaseSyntheticEvent, useState } from 'react';
import styles from './MailingSelect.module.scss';
import caret from "../../../images/icons/down.svg";

export const MailingSelect: React.FC = () => {
  const options: string[] = ['Все пользователи   ', 'Список 1   ', 'Список 2   ', 'Список 3   '];
	const [ulElemActive, setUlElemActive] = useState(false);
	const [imageActive, setImageActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = (e: BaseSyntheticEvent) => {
		e.stopPropagation();

    setUlElemActive(true);
		setImageActive(true);
	};

	React.useEffect(() => {
		const handleClickPad = () => {
			setUlElemActive(false);
		  setImageActive(false);
		};

		document.addEventListener("click", handleClickPad);

		return () => document.removeEventListener("click", handleClickPad);
	}, []);

  const handleOptionClick = (option: string): void => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div onClick={handleClick} className={styles.container}>
				{selectedOptions.length > 0 ? (<div className={styles.titleSelected}>
					{selectedOptions}
					<img
						className={`${styles.imgCaret} ${
							imageActive && styles.imgCaretActive
						}`}
						src={caret}
						alt="Стрелка вниз"
					/>
				</div>) : 
				(<div className={styles.titleSelect}>
					Список рассылки
						<img
							className={`${styles.imgCaret} ${
								imageActive && styles.imgCaretActive
							}`}
							src={caret}
							alt="Стрелка вниз"
						/>
					</div>)}
				<ul className={`${styles.ul} ${ulElemActive && styles.ulActive} ${options.length > 2 && styles.ulScroll }`}>
					{options.map((item, index) => (
						<li 
              key={index} 
              onClick={() => handleOptionClick(item)}
              className={`${selectedOptions.includes(item) ? styles.selected : ''}`}
            >
              {item}
              {selectedOptions.includes(item) && 
              <svg className={styles.tick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#243CBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              }
            </li>
					))}
				</ul>
			</div>
  );
};