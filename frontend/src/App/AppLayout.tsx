import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Output from "../common/components/Output";
import UrlShortenerForm from "../common/components/UrlShortenerForm";
import { Form } from "../model/form";
import { UrlShortenerService } from "../service/UrlShortenerService";

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
        {output !== "" ? <Output outputUrl={output} /> : ""}
      </Box>
    </Box>
  );
};

export default AppLayout;
