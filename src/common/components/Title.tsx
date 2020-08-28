import React from "react";
import { Typography } from "@material-ui/core";

interface Props {}

const Title = (props: React.PropsWithChildren<Props>) => {
  return <Typography variant="h1">{props.children}</Typography>;
};

export default Title;