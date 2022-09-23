import { Center } from "@chakra-ui/react";
import React from "react";
import SelectionMain from "../components/Selection/SelectionMain";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    // Set a min view port height so background always covers entire screen

    <Center minH={"100vh"} bgColor={"gray.200"}>
      {/* Confirmation component */}
      <SelectionMain></SelectionMain>
    </Center>
  );
};

export default Home;
