import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "./Calendar";
import CheckBoxGrid from "./CheckBoxGrid";

interface SelectionProps {}

const SelectionMain: React.FC<SelectionProps> = ({}) => {
  const [isClicked, setIsClicked] = useState(0);

  return (
    <Box h={"720px"} w={"718px"} bgColor={"white"}>
      <Box ml={4}>
        <Heading mt={4} size={"lg"} maxW={"500px"}>
          Select your preferred times
        </Heading>
        <Text>We’ll let you know when the organizer picks the best time</Text>
      </Box>
      <Box>
        <Flex mt={"90px"}>
          <VStack alignItems={"left"} spacing={9} ml={16} mb={2} mt={"auto"}>
            <Text textAlign={"left"}>
              <b>Daniel</b> (Organizer)
            </Text>
            <Text textAlign={"left"}>Jake</Text>
            <Text>Lizzy</Text>
          </VStack>

          <Box mr={"24px"} maxW={"500px"} ml={"auto"}>
            <Calendar
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            ></Calendar>
            <Box mt={4}>
              <CheckBoxGrid></CheckBoxGrid>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Divider mx={"auto"} mt={6} w={"80%"}></Divider>
      <Flex justify={"space-between"}>
        <Button
          borderColor={"gray.100"}
          border={"1px"}
          textColor={"gray.600"}
          bgColor={"white"}
          mt={2}
          ml={8}
          w={"100px"}
        >
          Decline
        </Button>
        <Button
          textColor={isClicked ? "white" : "gray.400"}
          bgColor={isClicked ? "blue.300" : "gray.200"}
          mt={2}
          mr={8}
          w={"100px"}
        >
          {" "}
          Continue
        </Button>
      </Flex>
    </Box>
  );
};

export default SelectionMain;
