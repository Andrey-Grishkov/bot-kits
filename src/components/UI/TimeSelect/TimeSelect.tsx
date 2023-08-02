/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import "./TimeSelect.scss"

export const TimeSelect: React.FC = () => {
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hourRef.current && selectedHour !== null) {
      hourRef.current.scrollTo(0, selectedHour * 32);
    }
  }, [selectedHour]);

  useEffect(() => {
    if (minuteRef.current && selectedMinute !== null) {
      minuteRef.current.scrollTo(0, (selectedMinute - 1) * 32);
    }
  }, [selectedMinute]);

  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(parseInt(event.target.value, 10));
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinute(parseInt(event.target.value, 10));
  };

  const handleSave = () => {
    if (selectedHour !== null && selectedMinute !== null) {
      const timeString = `${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`;
      setTime(timeString);
      console.log('Selected time:', timeString);
    }
  };


  const handleReset = () => {
    setSelectedHour(null);
    setSelectedMinute(null);
  };

  return (
    <div className='timeselect_container'>
      <div className='timeselect_box'>
        <div className='timeselect_flex'>
          <div
            className='timeselect_scroll'
            ref={hourRef}
          >
            {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
              <div
                className='timeselect_slot'
                key={hour}
                style={{
                  backgroundColor: selectedHour === hour ? '#F8F9FB' : '#FFFFFF',
                }}
                onClick={() => setSelectedHour(hour)}
              >
                {hour.toString().padStart(1, '0')}
              </div>
            ))}
          </div>
        </div>
        <svg width="1" height="422" viewBox="0 0 1 422" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="422" x2="0.500018" y2="-2.18557e-08" stroke="#F2F4F8"/>
        </svg>
        <div className='timeselect_flex'>
          <div
            className='timeselect_scroll'
            ref={minuteRef}
          >
            {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
              <div
                className='timeselect_slot'
                key={minute}
                style={{
                  backgroundColor: selectedMinute === minute ? '#F8F9FB' : '#FFFFFF',
                }}
                onClick={() => setSelectedMinute(minute)}
              >
                {minute.toString().padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
      </div>
      <svg width="264" height="1" viewBox="0 0 264 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="264" y2="0.5" stroke="#F2F4F8"/>
      </svg>
      <div className='timeselect_controls'>
        <button className='timeselect_controls__button'onClick={handleReset}>Очистить</button>
        <button className='timeselect_controls__button'onClick={handleSave}>Сохранить</button>
      </div>
    </div>
  );
};
