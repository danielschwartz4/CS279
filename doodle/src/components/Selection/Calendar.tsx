import { Flex } from "@chakra-ui/react";
import React from "react";
import CalendarEntry from "./CalendarEntry";

// Pass in clicked props from parent component because this state is required through all of these components
interface CalendarProps {
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
}

const Calendar: React.FC<CalendarProps> = ({ isClicked, setIsClicked }) => {
  return (
    // Hard code calendar entries and their data
    <Flex>
      <CalendarEntry
        day="Mon"
        date={3}
        endTime="9am"
        month={10}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Tues"
        date={4}
        endTime="2pm"
        month={10}
        startTime="12pm"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Thu"
        date={6}
        endTime="1pm"
        month={10}
        startTime="8am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Fri"
        date={7}
        endTime="11am"
        month={10}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Mon"
        date={10}
        endTime="9am"
        month={10}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </Flex>
  );
};

export default Calendar;
