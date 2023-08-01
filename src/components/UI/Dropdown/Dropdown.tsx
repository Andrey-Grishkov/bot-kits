import {
	useEffect,
	useState,
	FC,
	BaseSyntheticEvent,
	SetStateAction,
	Dispatch,
} from "react";
import styles from "./Dropdown.module.scss";
import caret from "../../../images/icons/down.svg";

type DropdownType = {
	payload: string;
	setPayloadSeleted: Dispatch<SetStateAction<string>>;
	optionArr: Array<string>;
	name: string
};

export const Dropdown: FC<DropdownType> = ({ payload, setPayloadSeleted, optionArr, name }) => {
	const readOnly = () => null;
	const [ulElemActive, setUlElemActive] = useState(false);
	const [imageActive, setImageActive] = useState(false);

	const handleClick = (e: BaseSyntheticEvent) => {
		e.stopPropagation();
		const currentElem = e.target;

		setActive(true);

		if (currentElem.closest("ul")) {
			setPayloadSeleted(currentElem.textContent);
			setActive(false);
		}
	};

	const setActive = (payLoad: boolean) => {
		setUlElemActive(payLoad);
		setImageActive(payLoad);
	};

	useEffect(() => {
		const handleClickPad = () => {
			setActive(false);
		};

		document.addEventListener("click", handleClickPad);

		return () => document.removeEventListener("click", handleClickPad);
	}, []);

	return (
		<>
			<div onClick={handleClick} className={styles.container}>
				{payload ? (<div className={styles.titleSelected}>
					{payload}
					<img
						className={`${styles.imgCaret} ${
							imageActive && styles.imgCaretActive
						}`}
						src={caret}
						alt="Стрелка вниз"
					/>
				</div>) : 
				(<div className={styles.titleSelect}>
					{optionArr[0]}
						<img
							className={`${styles.imgCaret} ${
								imageActive && styles.imgCaretActive
							}`}
							src={caret}
							alt="Стрелка вниз"
						/>
					</div>)}
				<ul className={`${styles.ul} ${ulElemActive && styles.ulActive} ${optionArr.length > 3 && styles.ulScroll }`}>
					{optionArr.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
			<select
				name={name}
				id="#"
				value={payload}
				onChange={readOnly}
				className={styles.selectOriginal}
			>
				{optionArr.map((item, index) => (
					<option value={item} key={index}>
						{item}
					</option>
				))}
			</select>
		</>
	);
};