import styles from "./Mailing.module.scss";
import React from 'react';
import { FC } from 'react';
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { mailings } from "../../utils/data";
import caretBig from "../../images/icons/down big.svg";
import { ButtonTutorial } from "../UI/Buttons/Tutorial/ButtonTutorial";
import cn from 'classnames';
import { MailingStepOne } from "../UI/MailingStepOne/MailingStepOne";

export type TMessage = { 
  name: string, 
  text: string,
  target: string, 
  photo: string, 
  video: string,
  audio: string,
  button: string,
  funnel: string,
  }

export type TMailing = { 
id: string, 
name: string, 
messenger: string, 
sent: string,
conversion: string,
}

export const Mailing: FC = () => {
  const [mailingList, setMailingList] = React.useState<TMailing[]>([]);
  const [expanded, setExpanded] = React.useState(false);
  const [addingMode, setAddingMode] = React.useState(false);
  const [step, setStep] = React.useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setMessages] = React.useState<TMessage[]>([]);
  const [messageData, setMessageData] = React.useState({
    name: "",
    text: "",
    target: "",
    photo: "",
    video: "",
    audio: "",
    button: "",
    funnel: "",
  });

  const handleAdd = () => setAddingMode(true);

  React.useEffect(() => {
    setMailingList(mailings);
  }, []);

  const handleExpand = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

  const handleToStepTwo = () => setStep(2);

  const switchToAddingMode = () => setAddingMode(true);

  const handleExit = () => setAddingMode(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setMessageData({
      ...messageData,
      [name]: value,
    });
  };

  const onChangeSelect = (data: any) => {
    setMessageData({
      ...messageData,
      target: data
    })
  }

  const onChangeText = (data: any) => {
    setMessageData({
      ...messageData,
      text: data
    })
  }
  
  return (
    <>
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Рассылки</h1>
      {addingMode === false && (<ButtonMain  onClick={switchToAddingMode} extraClass={styles.button} theme = 'green' label = 'Cоздать рассылку' size = 'l' />)}
      { (addingMode === false && mailingList.length > 0) && 
      (<div className={styles.field}>
        <div 
          className={styles.list_block}
          style={{ height: expanded ? '168px' : '318px', transition: 'height 0.3s' }}
        >
          <h2 className={styles.subtitle}>Мои рассылки</h2>
          <button onClick={handleExpand} className={styles.button_all}>
					  Все
					  <img
						  className={`${expanded ? styles.img_caret_active : styles.img_caret}` }
						  src={caretBig}
						  alt="Стрелка вниз"
					  />
				  </button>
          <div className={styles.table}>
              <ul className={styles.list_headings}>
                <li>ID</li>
                <li>Название</li>
                <li>Мессенджер</li>
                <li>Отправлено сообщений</li>
                <li>Конверсия</li>
                <li>Статус запуска</li>
              </ul>
              <div className={styles.list_wrapper}>
                <ul className={styles.list}>
                  {mailings.map((el, index) => (
                    <li className={styles.list_item} key={index}>
                      <p className={styles.list_item_text}>{el.id}</p>
                      <p className={styles.list_item_text}>{el.name}</p>
                      <p className={styles.list_item_text}>{el.messenger}</p>
                      <p className={styles.list_item_text}>
                        {(el.sent.length > 1 || el.sent.length === 0) ? `${el.sent} сообщений` : `${el.sent} сообщениe`}
                      </p>
                      <p className={styles.list_item_text}>
                        {`${el.conversion} %`}
                      </p>
                      <p className={ cn(styles.list_item_text, el.status === "started" ? styles.list_item_text_started : styles.list_item_text_stopped) }>
                        {(el.status === "started" ) ? "Запущено" : "Отклонено"}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
        <div className={styles.tutorial_container}>
          <h3 className={styles.tutorial_title}>Как это работает?</h3>
          <div className={styles.tutorial_video_container}>
            <ButtonTutorial type="default" extraClass={styles.tutorial_button} label={"Пошаговая инструкция"}/>
            <ButtonTutorial type="video" extraClass={styles.tutorial_button} label={"Видео"}/>
          </div>
        </div>
      </div>
      )}
      {((addingMode === false && mailingList.length === 0) &&
      <div className={styles.container}>
          <h2 className={styles.subtitle}>Давайте скорее запустим вашу первую рассылку!</h2>
          <p className={styles.text} >Нажмите на кнопку “создать рассылку”</p>
        </div>)} 
      {addingMode === true && (<div className={styles.field_adding}>
        <div className={styles.constructor_block}>
          <form className={styles.form}>
            {step === 1 ? (
              <MailingStepOne onChangeSelect={onChangeSelect} onChangeInput={onChangeInput} data={messageData} onChangeText={onChangeText} />
              ) : (
              <h2>2 Шаг</h2>
            )}
          </form>
        </div>
        <div className={styles.field_buttons}>
        <ButtonMain 
          theme='grey' 
          label="Выйти" 
          size="l" 
          onClick={handleExit}
          extraClass={styles.exit}
        />
        <ButtonMain 
          theme='green' 
          label="Далее" 
          size="l" 
          onClick={handleToStepTwo}
          extraClass={styles.to_step_two}
        />
        </div>
      </div>)}
    </section>
    </>
  );
}