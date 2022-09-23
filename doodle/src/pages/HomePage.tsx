import { Box, Center } from "@chakra-ui/react";
import React from "react";
import SelectionMain from "../components/Selection/SelectionMain";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Center minH={"100vh"} bgColor={"gray.200"}>
      <SelectionMain></SelectionMain>
    </Center>
  );
};

export default Home;
