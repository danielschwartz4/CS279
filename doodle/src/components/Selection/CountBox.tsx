// Component to see how many people are available each day
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheck } from "react-icons/bs";

interface CountBoxProps {
  count: number;
}

const CountBox: React.FC<CountBoxProps> = ({ count }) => {
  return (
    <Box m={"auto"} borderRadius={2} h={"56px"} w={"80px"}>
      <Flex textAlign={"center"}>
        <Flex mt={4} ml={6}>
          <BsCheck fontSize={"24px"} />
          {/* Pass in count prop */}
          <Text>{count}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CountBox;
