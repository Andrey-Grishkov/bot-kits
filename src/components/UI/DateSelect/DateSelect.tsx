import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DateSelect.scss';
import { Dropdown } from '../Dropdown/Dropdown';

export const DateSelect: React.FC = () => {

  const today: Date = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [timeZoneSelected, setTimeZoneSeleted] = React.useState('UTC+3');

  const options = [ 
    'UTC+2', 
    'UTC+3',
    'UTC+4',
    'UTC+5',
    'UTC+6',
    'UTC+7',
    'UTC+8',
    'UTC+9',
    'UTC+10',
    'UTC+11',
    'UTC+12',    
  ]

  const handleDateChange = (date: Date | Date[]) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    }
  };

  const handleReset = () => {
    setSelectedDate(today);
    setTimeZoneSeleted('UTC+3');
  };

  return (
    <div className="container">
      {<div className="selected">{selectedDate?.toLocaleDateString('ru-RU')}</div>}
      <Calendar onChange={handleDateChange} value={selectedDate} locale="ru-RU" next2Label={null} prev2Label={null}/>
      <svg width="296" height="1" viewBox="0 0 296 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="296" y2="0.5" stroke="#D7DEEA"/>
      </svg>
      <div className="timezone_container">
        <p className="timezone_label">Часовой пояс</p>
        <div className="timezone_selector">
          <Dropdown
            setPayloadSeleted={setTimeZoneSeleted}
            payload={timeZoneSelected}
            optionArr={options}
            name='timezone'
          />
        </div>
      </div>
      <svg width="296" height="1" viewBox="0 0 296 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="296" y2="0.5" stroke="#D7DEEA"/>
      </svg>
      <button className="calendar_reset" type="reset" onClick={handleReset}>Очистить</button>
    </div>
  );
};
