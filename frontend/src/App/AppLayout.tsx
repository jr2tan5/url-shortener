import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Title from "../common/components/Title";
import { UrlUtil } from "../common/util/UrlUtil";
import { Form } from "../form";
import { UrlShortenerService } from "../service/UrlShortenerService";
import UrlShortenerForm from "../UrlShortenerForm";

const AppLayout = () => {
  const [output, setOutput] = useState("");

  const onSubmit = (form: Form) => {
    UrlShortenerService.createUrlEntry(form);
    setOutput(UrlUtil.toOutputUrl(form.suffix));
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
        <UrlShortenerForm onSubmit={onSubmit} />
        <Title>Output URL</Title>
        <Typography>{output}</Typography>
      </Box>
    </Box>
  );
};

export default AppLayout;
