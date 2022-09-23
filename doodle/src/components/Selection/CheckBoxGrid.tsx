import { Grid } from "@chakra-ui/react";
import React from "react";
import CheckBox from "./CheckBox";
import CountBox from "./CountBox";

interface CheckBoxGridProps {}

const CheckGridBox: React.FC<CheckBoxGridProps> = ({}) => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      w={"450px"}
      h={"226px"}
    >
      <CountBox count={2} />
      <CountBox count={1} />
      <CountBox count={0} />
      <CountBox count={1} />
      <CountBox count={2} />
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="maybe"></CheckBox>
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="no"></CheckBox>
      <CheckBox type="no"></CheckBox>
      <CheckBox type="maybe"></CheckBox>
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="no"></CheckBox>
      <CheckBox type="no"></CheckBox>
      <CheckBox type="yes"></CheckBox>
      <CheckBox type="maybe"></CheckBox>
    </Grid>
  );
};

export default CheckGridBox;
