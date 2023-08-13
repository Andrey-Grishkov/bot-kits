import { FC } from 'react';
import styles from './UserDetails.module.scss';
import UserIcon from '../../images/icon/40x40/chat-user-icons/user3.svg';

export const UserDetails: FC = () => {
    return (
        <div className={styles['details']}>
            <div className={styles['details__about']}>
                <img className={styles['details__icon']} src={UserIcon} alt='user icon' />
                <p className={styles['details__username']}>Сергей Надеин</p>
                <p className={styles['details__status']}>Пользователь</p>
            </div>
            <div className={styles['details__tabs']}>
                <p className={styles['details__info-tab']}>Информация</p>
                <p className={styles['details__files-tab']}>Файлы</p>
            </div>
            <p className={styles['details__nofiles']}>У вас пока нет загруженных файлов</p>
        </div>
    )
}