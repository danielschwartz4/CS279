import { Grid } from "@chakra-ui/react";
import React from "react";
import CheckBox from "./CheckBox";
import CountBox from "./CountBox";

interface CheckBoxGridProps {}

const CheckGridBox: React.FC<CheckBoxGridProps> = ({}) => {
  return (
    <Grid
      // Chakra way of designing grids, 3 rows, fr is width
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      w={"450px"}
      h={"226px"}
    >
      {/* Hard coded check box and count box entries, passing in a prop for whether or not it is checked as yes no or maybe */}
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
