import React from "react";
import { Typography } from "@material-ui/core";

interface Props {}

const Label = (props: React.PropsWithChildren<Props>) => {
  return <Typography variant="h3">{props.children}</Typography>;
};

export default Label;
