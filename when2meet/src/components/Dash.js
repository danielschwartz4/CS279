import { Flex, Box } from '@chakra-ui/react';
import Availability from './Availability';
import { useState } from 'react';

const Dash = () => {
  const [schedule, setSchedule] = useState([]);
  const handleChange = newSchedule => {
    setSchedule(newSchedule);
  };

  return (
    <Flex>
      <Box mr={12}>
        <Availability
          instructions={'Click and drag to toggle; saved immediately'}
          heading="Your availability"
          isGroup={false}
          schedule={schedule}
          handleChange={handleChange}
        />
      </Box>
      <Box ml={12}>
        <Availability
          instructions={"Mouseover the calendar to see who's"}
          heading="Group's availability"
          isGroup={true}
          schedule={schedule}
          handleChange={handleChange}
        />
      </Box>
    </Flex>
  );
};

export default Dash;
