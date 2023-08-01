import React from "react";
import { FC } from 'react';
import styles from "./BotCard.module.scss";
import copy from "../../../images/icons/copy bot.svg";
import share from "../../../images/icons/share.svg";
import edit from "../../../images/icons/edit.svg";
import trash from "../../../images/icons/trash.svg"
import { SocialButton } from "../SocialButton/SocialButton";

interface IBotCard {
  id: string;
  name: string;
  type: 'alisa' | 'facebook' | 'google' | 'insta' | 'mailru' | 'odnoklassniki' | 'telegram'| 'twitter'| 'viber'| 'vk'| 'web'| 'whatsapp'| 'yandex'| 'youtube';
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
    const handleDelete = () => {
      
    };
  
    return (
      <div
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
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleCopy} >
              <img className={styles.buttonIcon} src={copy} alt="Копировать" />
              <span className={styles.label}>Копировать</span>
            </button>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleShare}>
              <img className={styles.buttonIcon} src={share} alt="Общий доступ" />
              Общий доступ
            </button>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.button} onClick={handleEdit}>
              <img className={styles.buttonIcon} src={edit} alt="Редактировать" />
              Редактировать 
            </button>
          </li>
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
      </div>
    );
  };