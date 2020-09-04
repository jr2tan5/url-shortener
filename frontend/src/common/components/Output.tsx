import React, { useRef } from "react";
import Title from "./Title";
import { Typography, Button } from "@material-ui/core";

interface Props {
  outputUrl: string;
}

const Output = (props: Props) => {
  const copyToClipboard = () => {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = props.outputUrl;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied to Clipboard");
  };

  return props.outputUrl !== "" ? (
    <>
      <Title>Output URL</Title>
      <Typography>{props.outputUrl}</Typography>
      <Button
        variant="outlined"
        onClick={(event) => {
          copyToClipboard();
        }}
        color="primary"
      >
        Copy URL
      </Button>
    </>
  ) : (
    <></>
  );
};

export default Output;
