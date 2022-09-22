import { Box } from "@chakra-ui/react";
import React from "react";
import Calendar from "./Calendar";

interface SelectionProps {}

const Selection: React.FC<SelectionProps> = ({}) => {
  return (
    <Box>
      <Calendar></Calendar>
    </Box>
  );
};

export default Selection;
