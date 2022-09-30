import ScheduleSelector from 'react-schedule-selector';

const ScheduleSelectorComponent = ({ schedule, handleChange }) => {
  return (
    <ScheduleSelector
      selection={schedule}
      numDays={7}
      minTime={9}
      maxTime={18}
      hourlyChunks={2}
      timeFormat={'h:mm A'}
      dateFormat={'ddd'}
      onChange={handleChange}
      selectedColor={'rgba(84, 161, 8, 0.4);'}
    />
  );
};

export default ScheduleSelectorComponent;
