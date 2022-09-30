import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Schedule1, Schedule2, Schedule3 } from '../seedData/schedules';
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
              <Box
                ml={1}
                w={'28px'}
                h={'18px'}
                bgColor={'rgba(84, 161, 8, 0.9)'}
              />
            </Flex>
            <Flex ml={4} alignItems={'center'} mr={20}>
              <Text>Available</Text>
              <Box
                ml={1}
                w={'28px'}
                h={'18px'}
                bgColor={'rgba(255,221,222,255)'}
              />
            </Flex>
          </>
        ) : schedule.length === 0 ? (
          <Flex ml={12} alignItems={'center'} mr={20}>
            <Text mr={2}>0/3 Available</Text>
            <Flex border={'1px'}>
              <Box w={'20px'} h={'16px'} bgColor={'rgba(255,221,222,255)'} />
              <Box w={'20px'} h={'16px'} bgColor={'rgba(84, 161, 8, 0.4)'} />
              <Box w={'20px'} h={'16px'} bgColor={'rgba(84, 161, 8, 0.9)'} />
            </Flex>
            <Text ml={2}>3/3 Available</Text>
          </Flex>
        ) : (
          <Flex ml={4} alignItems={'center'} mr={20}>
            <Text mr={2}>0/4 Available</Text>
            <Flex border={'1px'}>
              <Box w={'20px'} h={'16px'} bgColor={'rgba(255,221,222,255)'} />
              <Box w={'20px'} h={'16px'} bgColor={'rgba(84, 161, 8, 0.3)'} />
              <Box w={'20px'} h={'16px'} bgColor={'rgba(84, 161, 8, 0.6)'} />
              <Box w={'20px'} h={'16px'} bgColor={'rgba(84, 161, 8, 0.9)'} />
            </Flex>
            <Text ml={2}>4/4 Available</Text>
          </Flex>
        )}
      </Flex>
      <Text>{instructions}</Text>
      {!isGroup ? (
        <ScheduleSelectorComponent
          schedule={schedule}
          handleChange={handleChange}
        />
      ) : (
        <Box>
          <Box position={'absolute'}>
            <ScheduleSelectorComponent
              schedule={schedule}
              handleChange={handleChange}
            />
          </Box>
          <Box position={'absolute'}>
            <Schedule1 />
          </Box>
          <Box position={'absolute'}>
            <Schedule2 />
          </Box>
          <Box position={'absolute'}>
            <Schedule3 />
          </Box>
        </Box>
      )}
    </Stack>
  );
};

export default Availability;
