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
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import CheckBoxGrid from "./CheckBoxGrid";

interface SelectionProps {}

const SelectionMain: React.FC<SelectionProps> = ({}) => {
  // Retain selected state because the user shouldn't be able to submit unless something is clicked
  const [isClicked, setIsClicked] = useState(0);

  return (
    // Instead of divs, spans, etc. Chakra has its own components
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
            {/* Pass the state and change state as props to calendar */}
            <Calendar isClicked={isClicked} setIsClicked={setIsClicked} />
            <Box mt={4}>
              {/* Grid component for check box squares */}
              <CheckBoxGrid />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Divider mx={"auto"} mt={6} w={"80%"}></Divider>
      {/* buttons */}
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
          {/* Proceed to confirmation page */}
          <Link to="/confirmation">Decline</Link>
        </Button>
        <Button
          // logic to change button design based on what the user has access to
          textColor={isClicked ? "white" : "gray.400"}
          bgColor={isClicked ? "blue.300" : "gray.200"}
          cursor={isClicked ? "pointer" : "not-allowed"}
          mt={2}
          mr={8}
          w={"100px"}
        >
          {isClicked ? (
            <Link
              cursor={isClicked ? "pointer" : "not-allowed"}
              to="/confirmation"
            >
              Continue
            </Link>
          ) : (
            // If calendar entries are not selected then we don't want to use the Link component
            <Text>Continue</Text>
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default SelectionMain;
