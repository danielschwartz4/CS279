import ScheduleSelector from 'react-schedule-selector';

const ScheduleSelectorComponent = ({ schedule, handleChange }) => {
  // const [schedule, setSchedule] = useState([]);
  // const handleChange = newSchedule => {
  //   setSchedule(newSchedule);
  // };
  // console.log(schedule);
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
    />
  );
};

export default ScheduleSelectorComponent;
