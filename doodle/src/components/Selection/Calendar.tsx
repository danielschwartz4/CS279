import { Flex } from "@chakra-ui/react";
import React from "react";
import CalendarEntry from "./CalendarEntry";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = ({}) => {
  return (
    <Flex>
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
      ></CalendarEntry>
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
      ></CalendarEntry>
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
      ></CalendarEntry>
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
      ></CalendarEntry>
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
      ></CalendarEntry>
    </Flex>
  );
};

export default Calendar;
