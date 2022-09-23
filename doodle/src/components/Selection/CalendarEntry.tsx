import { Box, Checkbox, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface CalendarEntryProps {
  day: string;
  date: number;
  month: number;
  startTime: string;
  endTime: string;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
}

export type checkType = "no" | "maybe" | "yes";

const CalendarEntry: React.FC<CalendarEntryProps> = (props) => {
  const [checkState, setCheckState] = useState<checkType>("no");

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
      backgroundColor={
        checkState === "yes"
          ? "#33a93399"
          : checkState === "maybe"
          ? "#ada53366"
          : ""
      }
      opacity="50%"
      width={"90px"}
      height={"220px"}
    >
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
