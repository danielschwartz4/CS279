import { Box, Center } from "@chakra-ui/react";
import React from "react";
import SelectionMain from "../components/Selection/SelectionMain";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Center>
      <SelectionMain></SelectionMain>
    </Center>
  );
};

export default Home;
