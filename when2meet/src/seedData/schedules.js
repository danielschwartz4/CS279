import ScheduleSelector from 'react-schedule-selector';
import { seed1, seed2, seed3 } from './seeds';

export const Schedule1 = () => {
  return (
    <ScheduleSelector
      selection={seed1}
      numDays={7}
      minTime={9}
      maxTime={18}
      hourlyChunks={2}
      unselectedColor={'rgba(255, 255, 255, 0.2);'}
      selectedColor={'rgba(84, 161, 8, 0.4);'}
      timeFormat={'h:mm A'}
      dateFormat={'ddd'}
    />
  );
};

export const Schedule2 = ({ seed }) => {
  return (
    <ScheduleSelector
      selection={seed2}
      numDays={7}
      minTime={9}
      maxTime={18}
      hourlyChunks={2}
      unselectedColor={'rgba(255, 255, 255, 0.2);'}
      selectedColor={'rgba(84, 161, 8, 0.4);'}
      timeFormat={'h:mm A'}
      dateFormat={'ddd'}
    />
  );
};

export const Schedule3 = ({ seed }) => {
  return (
    <ScheduleSelector
      selection={seed3}
      numDays={7}
      minTime={9}
      maxTime={18}
      hourlyChunks={2}
      unselectedColor={'rgba(255, 255, 255, 0.2);'}
      selectedColor={'rgba(84, 161, 8, 0.4);'}
      timeFormat={'h:mm A'}
      dateFormat={'ddd'}
    />
  );
};
