import { Box, VStack } from "@chakra-ui/react";
import React from "react";

interface CalendarEntryProps {
  day: string;
  date: number;
  month: number;
  startTime: string;
  endTime: string;
}

const CalendarEntry: React.FC<CalendarEntryProps> = (props) => {
  return (
    <VStack width={"100px"} height={"250px"}>
      <Box>{props.day}</Box>
      <Box fontSize={"24px"}>
        <b>{props.date}</b>
      </Box>
      <Box>{props.month}</Box>
    </VStack>
  );
};

export default CalendarEntry;
