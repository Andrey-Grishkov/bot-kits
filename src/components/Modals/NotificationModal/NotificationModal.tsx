import { Modal } from '../Modal/Modal'
import {FC, useState} from 'react'
import styles from './NotificationModal.module.scss'
import { ButtonCopy } from '../../UI/Buttons/Copy/ButtonCopy'
interface INotificationModalProps {
    onClose: () => void,
}

export  const NotificationModal: FC<INotificationModalProps> = ({onClose}) => {
    const [accessKey, setAccessKey] = useState('1842016250:AAF8uWUV1wE9B8XxZvfbmRiZkmh1tWXu-Ns')
    
    const handleCopy = (text: string)  => {
        navigator.clipboard.writeText(text)
    }

    return (
        <Modal onClose={onClose} extraClass={styles.modal}>
            <div className={styles.content}>
                <h3 className={styles.content__title}>Иноформация о подключении</h3>
                <div className={styles.content__container}>
                    <p className={styles.content__caption}>Название канала</p>
                    <p className={styles.content__text}>ChanelName</p>
                </div>
                <div className={styles.content__container}>
                    <p className={styles.content__caption}>Название канала</p>
                    <div className={styles.content__copy}>
                        <input className={styles.content__input} value={accessKey} readOnly/>
                        <ButtonCopy type='default' />
                    </div>
                   
                </div>
            </div>
        </Modal>
    )
}