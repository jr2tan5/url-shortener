import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Title from "../common/components/Title";
import { UrlUtil } from "../common/util/UrlUtil";
import { Form } from "../form";
import { UrlShortenerService } from "../service/UrlShortenerService";
import UrlShortenerForm from "../common/components/UrlShortenerForm";
import Output from "../common/components/Output";

const AppLayout = () => {
  const [output, setOutput] = useState("");

  const onSubmit = async (form: Form) => {
    const shortenedUrl = await UrlShortenerService.createUrlEntry(form);
    setOutput(shortenedUrl);
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
        <Output output={output} />
      </Box>
    </Box>
  );
};

export default AppLayout;
