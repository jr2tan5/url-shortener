import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Subheader from "../common/components/Subheader";
import Title from "../common/components/Title";
import { Form } from "../form";

const useStyles = makeStyles((theme) => ({
  textField: {
    maxWidth: "1000px",
    marginTop: "5px",
  },
  buttonField: {
    marginTop: "5px",
  },
}));

const AppLayout = () => {
  const classes = useStyles();
  const [customSuffix, setCustomSuffix] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");
  const [output, setOutput] = useState("");

  const postReq = async (form: Form) => {
    const response = await fetch("http://localhost:5000/api/v1/world", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        suffix: form.suffix,
        destinationURL: form.destinationUrl,
      }),
    });
    const data = await response.json();
  };

  const getReq = async () => {
    const response = await fetch("http://localhost:5000/api/v1/hello");
    const data = await response.json();
    alert(data.express);
  };

  const onSubmit = (form: Form) => {
    // Check suffix contains valid characters
    //getReq();
    postReq(form);
    // If suffix exist and corresponding destination url is the same, return existing shortened url

    // If suffix does not exist - Save to db

    // if suffix exist but no corresponding destination url - generate next sequence number and save to db with the suffix.

    setOutput(form.destinationUrl);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        width="1000px"
        mx="10px"
        marginTop="5px"
      >
        <Title>ACE Coding Test</Title>
        <Subheader>Url Shortener</Subheader>
        <TextField
          id="standard-basic"
          label="Please enter a suffix"
          helperText="*Suffix will be used as part of the url"
          variant="outlined"
          multiline
          rowsMax={2}
          className={classes.textField}
          onChange={(event: any) => {
            setCustomSuffix(event.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Please enter destination url"
          variant="outlined"
          multiline
          rowsMax={4}
          className={classes.textField}
          onChange={(event: any) => {
            setDestinationUrl(event.target.value);
          }}
        />
        <Button
          variant="outlined"
          className={classes.buttonField}
          onClick={(event) => {
            const form = new Form();
            form.suffix = customSuffix;
            form.destinationUrl = destinationUrl;
            onSubmit(form);
          }}
          color="primary"
        >
          Convert
        </Button>
        <Title>Output</Title>
        <Typography>{output}</Typography>
      </Box>
    </Box>
  );
};

export default AppLayout;
