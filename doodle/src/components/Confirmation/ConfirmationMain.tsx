import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useReward } from "react-rewards";
// Cool react icon library
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

interface DeclinedProps {}

const DeclinedMain: React.FC<DeclinedProps> = ({}) => {
  // Using reward library for confetti. RewardId connects to id in an html element
  const { reward, isAnimating } = useReward("rewardId", "confetti");
  // Check if form is submitted to change state of form to prompt user to go home
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box h={"350px"} w={"718px"} bgColor={"white"}>
      <>
        {/* only display text boxes if submitted */}
        {!submitted ? (
          <>
            <Box ml={4}>
              <Heading mt={4} size={"lg"} maxW={"500px"}>
                Let's confirm your selection
              </Heading>
            </Box>

            <Stack mt={8} mx={"auto"} width={"80%"} spacing={3}>
              <Box>
                <Text>Your name</Text>
                {/* Chakra input component */}
                <Input placeholder="e.g. John Doe" size="md" />
              </Box>
              <Box>
                <Text>Your email</Text>
                <Input placeholder="e.g. john.doe@gmail.com" size="md" />
              </Box>
            </Stack>
            <Divider mx={"auto"} mt={6} w={"80%"}></Divider>
          </>
        ) : (
          <Box ml={"220"}>
            <BsCheck color="green" size={"240px"} />
          </Box>
        )}
        <Flex mt={8} justify={"space-between"}>
          <Button
            borderColor={"gray.100"}
            border={"1px"}
            textColor={"gray.600"}
            bgColor={"white"}
            w={"100px"}
            ml={4}
            visibility={submitted ? "hidden" : "visible"}
          >
            <Link to="/">Back</Link>
          </Button>
          <Button
            id="rewardId"
            mr={4}
            borderColor={"gray.100"}
            border={"1px"}
            textColor={"gray.600"}
            bgColor={"white"}
            // Change state and execute confetti on submit
            onClick={() => {
              reward();
              setSubmitted(true);
            }}
          >
            {!submitted ? (
              <Text>Submit Response</Text>
            ) : (
              <Link to="/">Back to home</Link>
            )}
          </Button>
        </Flex>
      </>
    </Box>
  );
};

export default DeclinedMain;
