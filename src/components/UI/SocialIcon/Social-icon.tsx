import styles from './Social-icon.module.scss'
import { FC } from "react";
import googleLogo from "../../../vendor/icons/google_icon.svg";
import yandexLogo from '../../../vendor/icons/yandex_icon.svg';
import facebookLogo from '../../../vendor/icons/facebook_icon.svg'
import mailruLogo from '../../../vendor/icons/mailru_icon.svg';
import telegramLogo from '../../../vendor/icons/telegram_icon.svg'
import odnoklassnikiLogo from '../../../vendor/icons/ok_icon.svg'
import vkLogo from '../../../vendor/icons/vk_icon.svg'
interface ISocialIcon {
  type:
    | "gmail"
    | "telegram"
    | "facebook"
    | "ok"
    | "vk"
    | "mailru"
    | "gmail"
    | "yandex";
}
export const SocialIcon: FC<ISocialIcon> = ({ type }) => {
  return (
    <li className={styles.item}>
    {type === "gmail" && (
      <img src={googleLogo} alt="иконка гугла" className={styles.icon} />
    )}
    {type === "telegram" && (
      <img src={telegramLogo} alt="иконка телеграм" className={styles.icon} />
    )}
    {type === "facebook" && (
      <img src={facebookLogo} alt="иконка фейсбука" className={styles.icon} />
    )}
    {type === "mailru" && (
      <img src={mailruLogo} alt="иконка мэйлру" className={styles.icon} />
    )}
    {type === "yandex" && (
      <img src={yandexLogo} alt="иконка яндекса" className={styles.icon} />
    )}
     {type === "ok" && (
      <img src={odnoklassnikiLogo} alt="иконка ОК" className={styles.icon} />
    )}
     {type === "vk" && (
      <img src={vkLogo} alt="иконка ВК" className={styles.icon} />
    )}
  </li>
   
  );
};
