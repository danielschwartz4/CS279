// Component for each individual calendar entry
import { Box, Checkbox, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Props for all the calendar entry data
interface CalendarEntryProps {
  day: string;
  date: number;
  month: number;
  startTime: string;
  endTime: string;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
}

// Create checkType enum to decide yes no or maybe
export type checkType = "no" | "maybe" | "yes";

// Don't deconstruct props because there are a bunch of them
const CalendarEntry: React.FC<CalendarEntryProps> = (props) => {
  // Keep track of the state of each entry as yes no or maybe, init to "no"
  // these states are important because they determine color and check type
  const [checkState, setCheckState] = useState<checkType>("no");
  // Mouse over state to grey out entry background
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  // Whenever checkState changes, we increment or decrement the clicked state. Once it hits 0, we know
  //     that none are clicked so we set isClicked to false, thus restricting user clicking "continue" button
  useEffect(() => {
    if (props.isClicked === 0 && checkState === "no") {
      return;
    } else if (props.isClicked > 0 && checkState === "no") {
      props.setIsClicked(props.isClicked - 1);
    } else if (checkState === "maybe") {
      return;
    } else if (checkState === "yes") {
      props.setIsClicked(props.isClicked + 1);
    }
  }, [checkState]);

  return (
    <VStack
      // Change state on mouse enter
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      // Change state on mouse leave
      onMouseLeave={() => {
        setMouseOver(false);
      }}
      backgroundColor={
        checkState === "yes"
          ? "#33a93399"
          : checkState === "maybe"
          ? "#ada53366"
          : checkState === "no" && mouseOver === true
          ? "#b1b1ae66"
          : ""
      }
      opacity="50%"
      width={"90px"}
      height={"220px"}
    >
      {/* Pass in prop data */}
      <Box textColor={"gray"}>{props.day}</Box>
      <Box fontSize={"28px"}>
        <b>{props.date}</b>
      </Box>
      <Box textColor={"gray"}>{props.month}</Box>
      <Box>
        <b>{props.startTime}</b>
      </Box>
      <Box>
        <b>{props.endTime}</b>
      </Box>
      <Box>
        {/* Change check state on click using below logic */}
        <Checkbox
          isChecked={checkState === "no" ? false : true}
          onChange={() => {
            checkState === "no"
              ? setCheckState("yes")
              : checkState === "yes"
              ? setCheckState("maybe")
              : setCheckState("no");
          }}
          colorScheme={checkState === "yes" ? "green" : "yellow"}
          size={"lg"}
          border={"2px"}
          defaultChecked={false}
        ></Checkbox>
      </Box>
    </VStack>
  );
};

export default CalendarEntry;
