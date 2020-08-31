import React, { useState } from "react";
import Title from "./Title";
import Subheader from "./Subheader";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { Form } from "../../form";

interface Props {
  onSubmit: (form: Form) => void;
}

const useStyles = makeStyles((theme) => ({
  textField: {
    maxWidth: "1000px",
    marginTop: "5px",
  },
  buttonField: {
    marginTop: "5px",
  },
}));

const UrlShortenerForm = (props: Props) => {
  const classes = useStyles();
  const [customSuffix, setCustomSuffix] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");

  return (
    <>
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
          props.onSubmit(form);
        }}
        color="primary"
      >
        Convert
      </Button>
    </>
  );
};

export default UrlShortenerForm;
