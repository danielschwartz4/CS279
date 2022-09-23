import { Center } from "@chakra-ui/react";
import React from "react";
import DeclinedMain from "../components/Confirmation/DeclinedMain";

interface ConfirmationProps {}

const Confirmation: React.FC<ConfirmationProps> = ({}) => {
  return (
    <Center minH={"100vh"} bgColor={"gray.200"}>
      <DeclinedMain></DeclinedMain>
    </Center>
  );
};

export default Confirmation;
