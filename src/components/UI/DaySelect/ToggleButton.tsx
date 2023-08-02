import React, { useState } from 'react';
import styles from './ToggleButton.module.scss'

export type DaysOfWeek = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс';

interface GroupToggleButtonProps {
  selectedDays: DaysOfWeek[];
  onChange: (selectedDays: DaysOfWeek[]) => void;
}

const ToggleButton: React.FC<GroupToggleButtonProps> = ({ selectedDays, onChange }) => {
  const [days, setDays] = useState<DaysOfWeek[]>(selectedDays);

  const handleDayToggle = (day: DaysOfWeek) => {
    const updatedDays = days.includes(day)
      ? days.filter((selectedDay) => selectedDay !== day)
      : [...days, day];
    setDays(updatedDays);
    onChange(updatedDays);
  };

  const isDaySelected = (day: DaysOfWeek) => days.includes(day);

  const dayButtons: DaysOfWeek[] = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс',
  ];

  return (
    <div className={styles.container}>
      {dayButtons.map((day) => (
        <button
          key={day}
          onClick={() => handleDayToggle(day)}
          style={{ 
            backgroundColor: isDaySelected(day) ? '#ECEFFF' : '#F8F9FB',
            color: isDaySelected(day) ? '#243CBB' : '#A6B3C9',
            fontWeight: isDaySelected(day) ? '600' : '400' }}
          className={styles.button}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
