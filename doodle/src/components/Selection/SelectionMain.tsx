import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Calendar from "./Calendar";

interface SelectionProps {}

const Selection: React.FC<SelectionProps> = ({}) => {
  return (
    <Box h={"500px"} w={"700px"} bgColor={"white"}>
      <Box>
        <Heading size={"lg"} maxW={"500px"}>
          Select your preferred times
        </Heading>
        <Text>We’ll let you know when the organizer picks the best time</Text>
      </Box>
      <Box mt={"130px"} mr={"40px"} border={"2px"} maxW={"500px"} ml={"auto"}>
        <Calendar></Calendar>
      </Box>
    </Box>
  );
};

export default Selection;
