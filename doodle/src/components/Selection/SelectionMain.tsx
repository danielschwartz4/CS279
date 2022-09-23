import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
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
      <Box>
        <Flex mt={"90px"}>
          <VStack alignItems={"left"} spacing={9} ml={16} mb={2} mt={"auto"}>
            <Text textAlign={"left"}>Daniel (Organizer)</Text>
            <Text textAlign={"left"}>Jake</Text>
            <Text>Lizzy</Text>
          </VStack>

          <Box mr={"24px"} maxW={"500px"} ml={"auto"}>
            <Calendar></Calendar>
            <Box mt={4}>
              <CheckBoxGrid></CheckBoxGrid>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Selection;
