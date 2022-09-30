import { Heading, Stack, Flex, Text, Box } from '@chakra-ui/react';
import ScheduleSelectorComponent from './ScheduleSelector';

const Availability = ({
  heading,
  instructions,
  isGroup,
  schedule,
  handleChange,
}) => {
  return (
    <Stack spacing={8} textAlign={'center'}>
      <Heading
        fontSize={'36px'}
        fontWeight={'hairline'}
        fontFamily={'sans-serif'}
      >
        {heading}
      </Heading>
      <Flex justify={'space-between'}>
        {!isGroup ? (
          <>
            <Flex alignItems={'center'} ml={20}>
              <Text>Unavailable</Text>
              <Box ml={1} w={'28px'} h={'18px'} bgColor={'green'} />
            </Flex>
            <Flex ml={4} alignItems={'center'} mr={20}>
              <Text>Available</Text>
              <Box ml={1} w={'28px'} h={'18px'} bgColor={'grey'} />
            </Flex>
          </>
        ) : (
          <>
            <Flex ml={4} alignItems={'center'} mr={20}>
              <Text>Available</Text>
              <Box ml={1} w={'28px'} h={'18px'} bgColor={'grey'} />
            </Flex>
          </>
        )}
      </Flex>
      <Text>{instructions}</Text>
      <ScheduleSelectorComponent
        schedule={schedule}
        handleChange={handleChange}
      />
    </Stack>
  );
};

export default Availability;
