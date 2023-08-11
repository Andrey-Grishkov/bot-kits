import React, { useState } from 'react';
import { FC } from 'react';
import styles from './Textarea.module.scss';

type TextType = 'bold' | 'italic' | 'code';

interface ITextarea {
  extraClass?: string,
  extraInputClass?: string,
  id: string,
  label?: string,
  value: string;
  onChange: (newValue: string) => void;
}

export const Textarea: FC<ITextarea> = ({
  extraClass = "",
  extraInputClass = "",
  id,
  label,
  onChange,
  value
}) => {

  const [emojiBoxOpen, setEmojiBoxOpen] = useState(false);
  const [styleBoxOpen, setStyleBoxOpen] = useState(false);
  const [text, setText] = useState<string>('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [code, setCode] = useState(false);

  const handleToggle = (e:React.SyntheticEvent, textType: TextType) => {
    e.preventDefault();
    let formattedText = text;

    switch (textType) {
      case 'bold':
        setBold(!bold);
        break;
      case 'italic':
        setItalic(!italic);
        break;
      case 'code':
        setCode(!code);
        break;
      default:
        break;
    }

    setText(formattedText);
  };

  const handleStyleBoxOpen = (e:React.FocusEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setStyleBoxOpen(true);
  }

  const handleReset = (e:React.SyntheticEvent) => {
    e.preventDefault();
    setText('');
    onChange('');
  };

  const handleEmojiOpen= (e:React.SyntheticEvent) => {
    e.stopPropagation();
    setEmojiBoxOpen(!emojiBoxOpen);
  }

  const handleEmojiInsert = (event:React.SyntheticEvent, emoji: string) => {
    event.preventDefault();
    onChange(value + emoji);
    setEmojiBoxOpen(false);
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStyleBoxOpen(true);
    const newValue = event.target.value;
    setText(newValue);
    if (newValue.length <= 4096) {
      onChange(newValue);
    }
  };

  const charCount = value.length;
  const charLimit = 4096;

	React.useEffect(() => {
		const handleClickPad = () => {
			setEmojiBoxOpen(false);
      setStyleBoxOpen(false);
		};

		document.addEventListener("click", handleClickPad);

		return () => document.removeEventListener("click", handleClickPad);
	}, []);

  return (
     <div className={`${styles.content} ${extraClass}`}>
      <div className={styles.area_buttons}>
        <div className={styles.area_button}>
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
            <path id="Vector" d="M7.03699 1.88184H4.81477C4.18514 1.88184 3.70366 2.36332 3.70366 2.99295V6.69665L1.85181 8.5485L3.70366 10.4004V14.1041C3.70366 14.7337 4.18514 15.2152 4.81477 15.2152H7.03699" stroke="#A6B3C9" strokeWidth="2" strokeMiterlimit="10"/>
            <path id="Vector_2" d="M12.9629 15.2152H15.1851C15.8147 15.2152 16.2962 14.7337 16.2962 14.1041V10.4004L18.1481 8.5485L16.2962 6.69665V2.99295C16.2962 2.36332 15.8147 1.88184 15.1851 1.88184H12.9629" stroke="#A6B3C9" strokeWidth="2" strokeMiterlimit="10"/>
            </g>
          </svg>
        </div>
        <div className={styles.area_button} onClick={handleEmojiOpen}>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="icon / 24x24 / constructor / emoji">
            <path id="Vector" d="M9.99996 18.8825C14.6023 18.8825 18.3333 15.1515 18.3333 10.5492C18.3333 5.94678 14.6023 2.21582 9.99996 2.21582C5.39759 2.21582 1.66663 5.94678 1.66663 10.5492C1.66663 15.1515 5.39759 18.8825 9.99996 18.8825Z" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_2" d="M6.66663 13.0488C6.66663 13.0488 7.91663 14.7155 9.99996 14.7155C12.0833 14.7155 13.3333 13.0488 13.3333 13.0488" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_3" d="M6.66663 8.04883H6.67496" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_4" d="M13.3334 8.04883H13.3417" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
        </div>
      </div>
        {emojiBoxOpen === true && (
          <div className={styles.emojis}>
            <button  className={styles.area_button} onClick={(e) => handleEmojiInsert(e, '😄')}>😄</button>
            <button  className={styles.area_button} onClick={(e) => handleEmojiInsert(e, '🎉')}>🎉</button>
            <button  className={styles.area_button} onClick={(e) => handleEmojiInsert(e, '🌟')}>🌟</button>
          </div>
        )}
        { styleBoxOpen && (<div className={styles.text_styles}>
          <button className={styles.style_button} onClick={(e)=> handleToggle(e,'bold')}>
            {bold ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.55779V4H19V7.55779" stroke="#060C23" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M12.1074 4V20.0909" stroke="#060C23" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M8 20.01H16" stroke="#060C23" strokeWidth="3" strokeMiterlimit="10"/>
              </svg>) : 
            (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.55779V4H19V7.55779" stroke="#A6B3C9" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M12.1074 4V20.0909" stroke="#A6B3C9" strokeWidth="3" strokeMiterlimit="10"/>
              <path d="M8 20.01H16" stroke="#A6B3C9" strokeWidth="3" strokeMiterlimit="10"/>
            </svg>)}
          </button>
          <button className={styles.style_button} onClick={(e)=> handleToggle(e,'italic')}>
            {italic ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.0263 4H9.97363" stroke="#060C23" strokeWidth="2" strokeMiterlimit="10" stroke-Linecap="round"/>
              <path d="M14.0263 20H5.97363" stroke="#060C23" strokeWidth="2" strokeMiterlimit="10" stroke-Linecap="round"/>
              <path d="M14.4097 4L9.40967 20" stroke="#060C23" strokeWidth="2" strokeLinecap="round" stroke-Linejoin="round"/>
              </svg>) : 
            (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.0263 4H9.97363" stroke="#A6B3C9" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
              <path d="M14.0263 20H5.97363" stroke="#A6B3C9" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
              <path d="M14.4097 4L9.40967 20" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>)}
          </button>
          <button className={styles.style_button} onClick={(e)=> handleToggle(e,'code')}>
            {code ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="icon / 24x24 / markdown / code">
              <path id="Vector" d="M18 16L22 12L18 8" stroke="#060C23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path id="Vector_2" d="M6 8L2 12L6 16" stroke="#060C23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path id="Vector_3" d="M14.5 4L9.5 20" stroke="#060C23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </svg>) : 
            (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="icon / 24x24 / markdown / code">
              <path id="Vector" d="M18 16L22 12L18 8" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path id="Vector_2" d="M6 8L2 12L6 16" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path id="Vector_3" d="M14.5 4L9.5 20" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </svg>)}
          </button>
          <button className={styles.style_button} type="reset" onClick={(e) => handleReset(e)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="icon / 24x24 / constructor / delete">
            <path id="Vector" d="M3 6H5H21" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_2" d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line id="Line 58" x1="12" y1="11" x2="12" y2="17" stroke="#A6B3C9" strokeWidth="2" strokeLinecap="round"/>
            </g>
            </svg>
          </button>
        </div>)}
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        className={`${styles.input} ${styles.textarea} ${extraInputClass}`}
        onChange={handleTextAreaChange}
        style={{
          fontWeight: bold ? 'bold' : '400',
          fontStyle: italic ? 'italic' : 'normal',
          textIndent: code ? '20px' : '0px',
          fontFamily:   code ?  "Courier New" : "Open Sans",
        }}
      >
        Введите текст
      </textarea>
      <p className={styles.charCount}>
        {charCount}/{charLimit}
      </p>
    </div>
  );
};