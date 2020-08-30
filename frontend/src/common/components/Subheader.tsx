import React from "react";
import { Typography } from "@material-ui/core";

interface Props {}

const Subheader = (props: React.PropsWithChildren<Props>) => {
  return <Typography variant="h2">{props.children}</Typography>;
};

export default Subheader;