import React from "react";
import { FC } from 'react';
import styles from "./BotCard.module.scss";
import copy from "../../../images/icons/copy bot.svg";
import share from "../../../images/icons/share.svg";
import edit from "../../../images/icons/edit.svg"
import link from "../../../images/icons/link.svg"
import info from "../../../images/icons/info.svg"
import notification from "../../../images/icons/notifications setting.svg"
import trash from "../../../images/icons/trash.svg"
import { SocialButton } from "../SocialButton/SocialButton";

interface IBotCard {
  id: string;
  name: string;
  type: string;
  //type: 'alisa' | 'facebook' | 'google' | 'insta' | 'mailru' | 'odnoklassniki' | 'telegram'| 'twitter'| 'viber'| 'vk'| 'web'| 'whatsapp'| 'yandex'| 'youtube';
}

export const BotCard: FC<IBotCard> = ({ id, name = "", type }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const handleClose = (event: React.FocusEvent<HTMLButtonElement>): void => {
      if (event.currentTarget === event.target) {
        setOpen(false);
      }
    };
    const handleCopy = () => {
      
    };
    const handleShare = () => {
      
    };
    const handleEdit = () => {
      
    };
    const handleLink = () => {
      
    };
    const handleGetInfo = () => {
      
    };
    const handleNotify = () => {
      
    };
    const handleDelete = () => {
      
    };
  
    return (
      <article
        id={id}
        className={styles.content}
      >
        <div className={styles.dropdown}>
          <button 
          onClick={handleOpen} 
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          handleClose(e)}
          className={styles.dropbtn}></button>
          {open ? (
        <ul className={styles.menu}>
          <li className={styles.menuItemFixed}>
            <button className={styles.button} onClick={handleCopy} >
              <img className={styles.buttonIcon} src={copy} alt="Копировать" />
              <span className={styles.label}>Копировать бота</span>
            </button>
          </li>
          <svg width="244" height="1" viewBox="0 0 244 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="244" y2="0.5" stroke="#D7DEEA"/>
          </svg>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleShare}>
              <img className={styles.buttonIcon} src={share} alt="Общий доступ" />
              Общий доступ
            </button>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleEdit}>
              <img className={styles.buttonIcon} src={edit} alt="Переименовать" />
              Переименовать
            </button>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleLink}>
              <img className={styles.buttonIcon} src={link} alt="Получить ссылку" />
              Получить ссылку 
            </button>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleGetInfo}>
              <img className={styles.buttonIcon} src={info} alt="Информация" />
              Информация 
            </button>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleNotify}>
              <img className={styles.buttonIcon} src={notification} alt="Настройка уведомлений" />
              Настройка уведомлений 
            </button>
          </li>
          <svg width="244" height="1" viewBox="0 0 244 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="244" y2="0.5" stroke="#D7DEEA"/>
          </svg>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleDelete}>
              <img className={styles.buttonIcon}  src={trash} alt="Удалить" />
              Удалить
            </button>
          </li>
        </ul>
      ) : null}
        </div>
       <SocialButton type={type}/>
        <p className={styles.name}>
          {name}
        </p>
      </article>
    );
  };