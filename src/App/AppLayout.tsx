import React, { useState } from "react";
import { Box, TextField, makeStyles, Button, Typography } from "@material-ui/core";
import Title from "../common/components/Title";
import Subheader from "../common/components/Subheader";
import Label from "../common/components/Label";
import { Form } from "../form";

const useStyles = makeStyles((theme) => ({
  textField: {
    maxWidth: "1000px",
    marginTop: '10px',
  },
}));

const AppLayout = () => {
  const classes = useStyles();
  const [customSuffix, setCustomSuffix] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");
  const [output, setOutput] = useState("");

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" width="1000px">
        <Title>ACE Coding Test</Title>
        <Subheader>Url Shortener</Subheader>
        <Label>URL Suffix e.g. => 127.0.0.1/(Suffix)</Label>
        <TextField
          id="standard-basic"
          label="Please provide custom suffix"
          variant="outlined"
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
        <Title>Output</Title>
        <Typography>{output}</Typography>
        <Button variant="outlined" onClick={(event) => {
          const form = new Form();
          form.destinationUrl = destinationUrl;
          onSubmit(form,setOutput);
        }} color="primary">
          Convert
        </Button>
      </Box>
    </Box>
  );
};

const onSubmit = (form: Form, setOutput:React.Dispatch<React.SetStateAction<string>>) => {
  setOutput(form.destinationUrl);
}

export default AppLayout;
