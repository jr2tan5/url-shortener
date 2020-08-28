import React from "react";
import { Typography } from "@material-ui/core";

interface Props {}

const Subtitle = (props: React.PropsWithChildren<Props>) => {
  return <Typography variant="h2">{props.children}</Typography>;
};

export default Subtitle;