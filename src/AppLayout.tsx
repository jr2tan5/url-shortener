import React from "react";
import { Box, TextField, makeStyles } from "@material-ui/core";
import Title from "./common/components/Title";
import Subtitle from "./common/components/Subtitle";

const useStyles = makeStyles((theme) => ({
  textField: {
    maxWidth: "1000px",
  },
}));

const AppLayout = () => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" width="1000px">
        <Title>ACE Coding Test</Title>
        <Subtitle>Url Shortener</Subtitle>
        <TextField
          id="standard-basic"
          label="Please enter destination url"
          variant="outlined"
          multiline
          rowsMax={4}
          className={classes.textField}
        />
        <Title>Output</Title>
        <TextField
          id="standard-basic"
          label="Ouput Link"
          variant="outlined"
          className={classes.textField}
        />
      </Box>
    </Box>
  );
};

export default AppLayout;
