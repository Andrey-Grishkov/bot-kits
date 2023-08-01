import React from 'react';
import cn from 'classnames';
import styles from './buttonMain.module.css';

interface IButtonMain {
    /**
        * Является ли это основной кнопкой на странице?
    */
    type: 'primary' | 'secondary';

    /**
        * Текст кнопки
    */
    label: string;

    /**
        * Размер кнопки
    */
    size: 'l' | 's';

    /**
        * Цвет кнопки
    */
    buttonColor?: string;

    /**
        * Цвет текста
    */
    textColor?: string;

    extraClass?: string;
    /**
        * Доступность кнопки
    */
    disabled?: boolean;
}

/**
 * Кнопка для управления ботом
 */
export const ButtonMain = ({
    type = 'primary',
    label = 'Добавить бота',
    size = 'l',
    buttonColor = 'purple',
    textColor = '#FFFFFF',
    extraClass,
    disabled = false
}: IButtonMain) => {
    // const modeClass = type === 'primary' ? styles.button_type_primary : styles.button_type_secondary;
    const typeClass = styles[`button_type_${type}`];
    const sizeClass = styles[`button_size_${size}`];
    const colorClass = styles[`button_color_${buttonColor}`];
    return (
        <button 
            type="button"
            className={cn(styles.button, disabled ? styles.button_disabled : '', typeClass, sizeClass, colorClass, extraClass)}
            // style={{ backgroundColor, color: textColor }}
            disabled={disabled}
        >
            {label}
        </button>
    )
}