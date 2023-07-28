import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

interface IButton {
    /**
        * Является ли это основной кнопкой на странице?
    */
    primary?: boolean;

    /**
        * Текст кнопки
    */
    label: 'Добавить бота' | 'Остановить' | 'Возобновить' | '';

    /**
        * Размер кнопки
    */
    size: 'l' | 'm' | 's';

    /**
        * Цвет кнопки
    */
    backgroundColor?: string;

    /**
        * Доступность кнопки
    */
    disabled?: boolean;
}

/**
 * Кнопка для управления ботом
 */
export const Button = ({
    primary,
    label,
    size,
    backgroundColor,
    disabled
}: IButton) => {
    const sizeClass = styles[`button_size_${size}`];
    const modeClass = primary ? styles.button_type_primary : styles.button_type_secondary;
    return (
        <button 
            type="button"
            className={cn(styles.button, disabled ? styles.button_disabled : '', sizeClass, modeClass)}
            style={{ backgroundColor }}
            disabled={disabled}
        >
            {label}
        </button>
    )
}