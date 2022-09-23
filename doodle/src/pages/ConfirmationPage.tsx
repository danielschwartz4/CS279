// this is the template layout for the confirmation page
import { Center } from "@chakra-ui/react";
import React from "react";
import ConfirmationMain from "../components/Confirmation/ConfirmationMain";

interface ConfirmationProps {}

const Confirmation: React.FC<ConfirmationProps> = ({}) => {
  return (
    // Set a min view port height so background always covers entire screen
    <Center minH={"100vh"} bgColor={"gray.200"}>
      {/* Confirmation component */}
      <ConfirmationMain></ConfirmationMain>
    </Center>
  );
};

export default Confirmation;
