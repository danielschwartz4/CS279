import { Flex } from "@chakra-ui/react";
import React from "react";
import CalendarEntry from "./CalendarEntry";

interface CalendarProps {
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
}

const Calendar: React.FC<CalendarProps> = ({ isClicked, setIsClicked }) => {
  return (
    <Flex>
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <CalendarEntry
        day="Mon"
        date={4}
        endTime="9am"
        month={6}
        startTime="7am"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </Flex>
  );
};

export default Calendar;
