import React from "react";
import Title from "./Title";
import { Typography } from "@material-ui/core";

interface Props {
  output: string;
}

const Output = (props: Props) => {
  return (
    <>
      <Title>Output URL</Title>
      <Typography>{props.output}</Typography>
    </>
  );
};

export default Output;
