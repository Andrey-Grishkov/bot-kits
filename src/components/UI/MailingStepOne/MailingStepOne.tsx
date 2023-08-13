import React from 'react';
import { FC } from 'react';
import styles from "./MailingStepOne.module.scss";
import { MailingInput } from '../MailingInput/MailingInput';
import { MailingSelect } from '../MailingSelect/MailingSelect';
import { Textarea } from '../Textarea/Textarea';
import { AddSocialButton } from '../AddSocialButton/AddSocialButton';
import photo from '../../../images/icons/photo.svg';
import video from '../../../images/icons/video.svg';
import audio from '../../../images/icons/audio.svg';
import button from '../../../images/icons/button.svg';
import { FunnelSelect } from '../FunnelSelect/FunnelSelect';
import robot from '../../../images/icons/Robot.svg';
import label from '../../../images/icons/Frame250.svg';
import toggle from '../../../images/icons/Group 1190.svg'
import { UploadButton } from '../UploadButton/UploadButton';
import { ButtonOptionsSelect } from '../ButtonOptionsSelect/ButtonOptionsSelect';

export type TMessage = {
  name: string,
  text: string,
  target: string,
  photo: File[],
  video: File[],
  audio: File[],
  button: string,
  funnel: string,
  }

export const MailingStepOne: FC<{
  onChangeInput: ((e:any) => void);
  onChangeSelect: ((e:any) => void);
  onChangeText: ((e:any) => void);
  onChangePhoto: ((data: any) => void);
  onChangeVideo: ((data: any) => void);
  onChangeAudio: ((data: any) => void);
  onChangeButton: ((data:any) => void);
  data: TMessage;
  }> = ({ onChangeInput, onChangeSelect, onChangeText, onChangePhoto, onChangeAudio, onChangeButton, onChangeVideo, data }) => {
    const [showWidget, setShowWidget] = React.useState(true);
    const [addPhoto, setAddPhoto] = React.useState(false);
    const [addVideo, setAddVideo] = React.useState(false);
    const [addAudio, setAddAudio] = React.useState(false);
    const [addButton, setAddButton] = React.useState(false);
    const addingRef = React.useRef<HTMLInputElement>(null);
    const formatTime = (date: Date) => {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    const [currentTime, setCurrentTime] = React.useState(formatTime(new Date()));

    const handleButtonClick = (e: React.SyntheticEvent) => {
      e.preventDefault();
      setCurrentTime(formatTime(new Date()));
    };

    const handleShowWidget = () => {
      setShowWidget(!showWidget);
    };

    const handleAddPhoto = (e:React.SyntheticEvent) => {
      e.preventDefault();
      setAddPhoto(true);
      setAddVideo(false);
      setAddAudio(false);
    };

    const handleAddVideo = (e:React.SyntheticEvent) => {
      e.preventDefault();
      setAddVideo(true);
      setAddAudio(false);
      setAddPhoto(false);
    };

    const handleAddAudio = (e:React.SyntheticEvent) => {
      e.preventDefault();
      setAddAudio(true);
      setAddVideo(false);
      setAddPhoto(false);
    };
    const handleAddButton = (e:React.SyntheticEvent) => {
      e.preventDefault();
      setAddButton(true);
      setAddAudio(false);
      setAddVideo(false);
      setAddPhoto(false);
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (addingRef.current && !addingRef.current.contains(event.target as Node)) {
        setAddButton(false);
        setAddAudio(false);
        setAddVideo(false);
        setAddPhoto(false);
      }
    };

    React.useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

  return (
    <>
      <div className={styles.title_container}>
        <span>1 Шаг	&#10095; </span>
        <span>Создание рассылки</span>
      </div>
      <div className={styles.inputs_container}>
      <MailingInput
        name="name"
        type="text"
        id="1"
        placeholder="Моя рассылка 1"
        value={data.name}
        onChange={onChangeInput}
      />
      <MailingSelect name="name" value={data.target} onChange={onChangeSelect}/>
    </div>
    <Textarea
      id="2"
      value={data.text}
      label="Текст сообщения"
      onChange={onChangeText}
    />
    <div className={styles.media_container}>
      <h3 className={styles.container_title}>Добавить</h3>
      <div className={styles.media_buttons}>
        <AddSocialButton value="Фото" variant='active' onClick={handleAddPhoto}>
          <img src={photo} alt="Добавить фото" />
        </AddSocialButton>
        <AddSocialButton value="Видео" onClick={handleAddVideo}>
          <img src={video} alt="Добавить видео" />
        </AddSocialButton>
        <AddSocialButton value="Аудио" onClick={handleAddAudio}>
          <img src={audio} alt="Добавить аудио" />
        </AddSocialButton>
        <AddSocialButton value="Кнопка" onClick={handleAddButton}>
          <img src={button} alt="Добавить кнопку "/>
        </AddSocialButton>
      </div>
    </div>
    { addPhoto && <div className={styles.upload_block} ref={addingRef} >
      <UploadButton size='M' name='photo' onChange={onChangePhoto}/>
    </div>}
    { addVideo && <div className={styles.upload_block} ref={addingRef}>
      <UploadButton size='M' name='video' onChange={onChangeVideo}/>
    </div>}
    { addAudio && <div className={styles.upload_block} ref={addingRef}>
      <UploadButton size='M' name='audio' onChange={onChangeAudio}/>
    </div>}
    { addButton &&
    <div className={styles.upload_button_block} ref={addingRef}>
      <ButtonOptionsSelect onChange={onChangeButton} />
    </div>}
    <div className={styles.media_container}>
      <h3 className={styles.container_title}>Активировать воронку</h3>
      <FunnelSelect name="name" value={data.funnel} onChange={onChangeSelect}/>
    </div>
    <div className={`${styles.widget_toggle} ${showWidget && styles.widget_toggle_active}`}
          onClick={handleShowWidget}>
      <img src={toggle} alt="Переключатель виджета" className={`${styles.widget_toggle_img} ${
								showWidget && styles.widget_toggle_img_active}`}/>
    </div>
    {showWidget === false ? (<div className={styles.widget_label}>
      <img className={styles.widget_label_img} src={label} alt="Виджет" />
    </div>) :
    (<div className={styles.widget_container}>
      <h4 className={styles.widget_title}>Текстовый виджет</h4>
      <h3 className={styles.widget_name}>{data.name}</h3>
      <svg width="296" height="1" viewBox="0 0 296 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="296" y2="0.5" stroke="#F2F4F8"/>
      </svg>
      <div className={styles.widget_area}>
      <div className={styles.widget_messages}>
        <img src={robot} alt='Бот' />
        { data.text ?
        (<div className={styles.widget_messages__box}>
          <h4 className={styles.widget_messages__title}>Бот</h4>
          <p className={styles.widget_messages__text}>{data.text}</p>
          <p className={styles.widget_messages__time}>{currentTime}</p>
        </div>)
        :
        (<div className={styles.widget_messages__box_elipsis}>
          <p className={styles.widget_messages__text}>...</p>
        </div>)
          }
      </div>
      <button className={styles.widget_button} onClick={handleButtonClick}>Отправить себе</button>
      </div>
      <svg width="296" height="1" viewBox="0 0 296 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="296" y2="0.5" stroke="#F2F4F8"/>
      </svg>
      <div className={styles.widget_footer}>
        <p className={styles.widget_footer_el}>Powered by</p>
        <svg className={styles.widget_footer_el} xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.59232 3.99511C3.76052 3.99511 1.46489 6.26751 1.46489 9.07067V9.58249C1.46489 10.2499 2.01147 10.791 2.68571 10.791H3.07185C3.47052 10.791 3.79598 10.4754 3.80419 10.0808L3.80963 9.81921C3.81145 9.73139 3.86128 9.65145 3.93975 9.61045C4.01823 9.56944 4.11301 9.57381 4.1873 9.62186L4.58886 9.88161C5.80608 10.669 7.37856 10.669 8.59577 9.88161L8.99733 9.62186C9.07162 9.57381 9.1664 9.56944 9.24488 9.61045C9.32336 9.65145 9.37318 9.73139 9.37501 9.81921L9.38045 10.0808C9.38865 10.4754 9.71412 10.791 10.1128 10.791H10.4989C11.1732 10.791 11.7197 10.2499 11.7197 9.58249V9.07067C11.7197 6.26751 9.42412 3.99511 6.59232 3.99511ZM0.976562 9.07067C0.976562 6.00054 3.49082 3.51172 6.59232 3.51172C9.69381 3.51172 12.2081 6.00055 12.2081 9.07067V9.58249C12.2081 10.5169 11.4429 11.2743 10.4989 11.2743H10.1128C9.50559 11.2743 9.00029 10.8351 8.90728 10.2576L8.8629 10.2863C7.48339 11.1786 5.70124 11.1786 4.32173 10.2863L4.27736 10.2576C4.18435 10.8351 3.67904 11.2743 3.07185 11.2743H2.68571C1.74177 11.2743 0.976562 10.5169 0.976562 9.58249V9.07067Z" fill="#243CBB"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.34824 2.65852C2.82048 2.78567 0 5.65671 0 9.17986V9.82553C0 11.0269 0.98384 12.0008 2.19747 12.0008H10.9873C12.201 12.0008 13.1848 11.0269 13.1848 9.82553V9.17986C13.1848 5.65671 10.3643 2.78567 6.83657 2.65852V1.69238H6.34824V2.65852ZM6.59241 3.13752C3.22122 3.13752 0.488326 5.84276 0.488326 9.17986V9.82553C0.488326 10.7599 1.25354 11.5174 2.19747 11.5174H10.9873C11.9313 11.5174 12.6965 10.7599 12.6965 9.82553V9.17986C12.6965 5.84276 9.9636 3.13752 6.59241 3.13752Z" fill="#243CBB"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.59287 0.483387C6.32317 0.483387 6.10454 0.699807 6.10454 0.966774C6.10454 1.23374 6.32317 1.45016 6.59287 1.45016C6.86256 1.45016 7.08119 1.23374 7.08119 0.966774C7.08119 0.699807 6.86256 0.483387 6.59287 0.483387ZM5.61621 0.966774C5.61621 0.43284 6.05347 0 6.59287 0C7.13226 0 7.56952 0.43284 7.56952 0.966774C7.56952 1.50071 7.13226 1.93355 6.59287 1.93355C6.05347 1.93355 5.61621 1.50071 5.61621 0.966774Z" fill="#243CBB"/>
          <ellipse cx="4.33318" cy="7.66668" rx="0.666681" ry="0.666681" fill="#243CBB"/>
          <ellipse cx="9.00017" cy="7.66668" rx="0.666678" ry="0.666681" fill="#243CBB"/>
        </svg>
        <p className={styles.widget_footer_el}>BotKits</p>
      </div>
    </div>)}
    </>
  );
};
