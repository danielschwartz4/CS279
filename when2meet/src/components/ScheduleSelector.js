import { useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import { Box } from '@chakra-ui/react';

const ScheduleSelectorComponent = () => {
  const [schedule, setSchedule] = useState([]);
  const handleChange = newSchedule => {
    setSchedule(newSchedule);
  };
  console.log(schedule);
  return (
    <Box>
      <ScheduleSelector
        selection={schedule}
        numDays={7}
        minTime={8}
        maxTime={22}
        hourlyChunks={1}
        onChange={handleChange}
      />
    </Box>
  );
};

export default ScheduleSelectorComponent;
