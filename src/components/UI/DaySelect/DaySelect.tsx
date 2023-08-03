import React from 'react';
import ToggleButton from './ToggleButton';
import { DaysOfWeek } from './ToggleButton'

export const DaySelect: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mailingDays, setMailingDays] = React.useState<DaysOfWeek[]>([]);

  const handleChange = (selectedDays: DaysOfWeek[]) => {
    setMailingDays(selectedDays);
  };

  return (
    <div>
      <ToggleButton selectedDays={[]} onChange={handleChange} />
    </div>
  );
};