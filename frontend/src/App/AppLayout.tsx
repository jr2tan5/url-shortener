import React, { useState } from "react";
import {
  Box,
  TextField,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import Title from "../common/components/Title";
import Subheader from "../common/components/Subheader";
import Label from "../common/components/Label";
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

  const onSubmit = (form: Form) => {
    // Check suffix contains valid characters

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
