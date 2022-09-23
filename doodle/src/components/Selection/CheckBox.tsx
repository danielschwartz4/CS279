import { Box } from "@chakra-ui/react";
import React from "react";
import { BsCheck, BsCheckAll } from "react-icons/bs";
import { HiOutlineX } from "react-icons/hi";
import { checkType } from "./CalendarEntry";

interface CheckBoxProps {
  type: checkType;
}

const CheckBox: React.FC<CheckBoxProps> = ({ type }) => {
  return (
    <Box
      borderRadius={2}
      bgColor={
        type === "yes"
          ? "#33a93399"
          : type === "maybe"
          ? "#ada53366"
          : "gray.200"
      }
      m={"auto"}
      h={"56px"}
      w={"80px"}
    >
      {type === "yes" ? (
        <BsCheckAll size={"lg"} />
      ) : type === "maybe" ? (
        <BsCheck size={"lg"} />
      ) : (
        <HiOutlineX opacity={"40%"} size={"lg"} />
      )}
    </Box>
  );
};

export default CheckBox;
