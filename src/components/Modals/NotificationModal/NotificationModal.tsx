import { Modal } from "../Modal/Modal";
import { FC, useState, useRef, RefObject } from "react";
import styles from "./NotificationModal.module.scss";
import { ButtonCopy } from "../../UI/Buttons/Copy/ButtonCopy";
interface INotificationModalProps {
  onClose: () => void;
  type?: "connect" | "notifications";
}

export const NotificationModal: FC<INotificationModalProps> = ({
  onClose,
  type,
}) => {
  const [isCopiedKey, setIsCopiedKey] = useState(false);
  const [isCopiedLink, setIsCopiedLink] = useState(false);
  const keyInputRef = useRef<HTMLInputElement>(null);
  const enableLinkRef = useRef<HTMLInputElement>(null);
  const disableLinkRef  = useRef<HTMLInputElement>(null);
  const [enableLink, setEnableLink] = useState(
    "/notify 60a280e3f7b15d37975ccb69"
  );
  const [disableLink, setDisableLink] = useState(
    "/disable_notify 60a280e3f7b15d37975ccb69"
  );
  const [accessKey, setAccessKey] = useState(
    "1842016250:AAF8uWUV1wE9B8XxZvfbmRiZkmh1tWXu-Ns"
  );

  const handleCopyKey = async (ref: RefObject<HTMLInputElement>) => {
    setIsCopiedKey(true);
    if (ref.current) {
      navigator.clipboard.writeText(ref.current.value);
    }

    setTimeout(() => {
      setIsCopiedKey(false);
    }, 3000);
  };
  const handleCopylink = async (ref: RefObject<HTMLInputElement>) => {
    setIsCopiedLink(true);
    if (ref.current) {
      navigator.clipboard.writeText(ref.current.value);
    }

    setTimeout(() => {
      setIsCopiedLink(false);
    }, 3000);
  };

  return (
    <>
      {type === "connect" ? (
        <Modal onClose={onClose} extraClass={styles.modal}>
          {isCopiedKey && (
            <div className={styles.copyarea}>
              <p className={styles.copyarea__text}>Ключ доступа скопирован</p>
            </div>
          )}
          <div className={styles.content}>
            <h3 className={styles.content__title}>Иноформация о подключении</h3>
            <div className={styles.content__container}>
              <p className={styles.content__caption}>Название канала</p>
              <p className={styles.content__text}>ChanelName</p>
            </div>
            <div className={styles.content__container}>
              <p className={styles.content__caption}>Название канала</p>
              <div className={styles.content__copy}>
                <input
                  className={styles.content__input}
                  value={accessKey}
                  ref={keyInputRef}
                  readOnly
                />
                <ButtonCopy
                  type="default"
                  onClick={() => {
                    handleCopyKey(keyInputRef);
                  }}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal onClose={onClose} extraClass={styles.modal}>
          {isCopiedLink && (
            <div className={styles.copyarea}>
              <p className={styles.copyarea__text}>Ссылка скопирована</p>
            </div>
          )}
          <div className={styles.content}>
            <h3 className={styles.content__title}>Настройка уведомлений</h3>
            <div className={styles.content__container}>
              <p className={styles.content__caption}>
                Подписаться на уведомления
              </p>
              <div className={styles.content__copy}>
                <input
                  className={styles.content__input}
                  value={enableLink}
                  ref={enableLinkRef}
                  readOnly
                />
                <ButtonCopy
                  type="default"
                  onClick={() => {
                    handleCopylink(enableLinkRef);
                  }}
                />
              </div>
            </div>
            <div className={styles.content__container}>
              <p className={styles.content__caption}>
                Отписаться от уведомлений
              </p>
              <div className={styles.content__copy}>
                <input
                  className={styles.content__input}
                  value={disableLink}
                  ref={disableLinkRef}
                  readOnly
                />
                <ButtonCopy
                  type="default"
                  onClick={() => {
                    handleCopylink(disableLinkRef);
                  }}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
