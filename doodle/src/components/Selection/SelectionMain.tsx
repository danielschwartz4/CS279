import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Calendar from "./Calendar";
import CheckBoxGrid from "./CheckBoxGrid";

interface SelectionProps {}

const Selection: React.FC<SelectionProps> = ({}) => {
  return (
    <Box h={"650px"} w={"718px"} bgColor={"white"}>
      <Box ml={4}>
        <Heading mt={4} size={"lg"} maxW={"500px"}>
          Select your preferred times
        </Heading>
        <Text>We’ll let you know when the organizer picks the best time</Text>
      </Box>
      <Box mt={"50px"} mr={"40px"} maxW={"500px"} ml={"auto"}>
        <Calendar></Calendar>
        <Box mt={4}>
          <CheckBoxGrid></CheckBoxGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Selection;
