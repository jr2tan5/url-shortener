import { createMuiTheme } from "@material-ui/core";
import { purple, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: "bolder",
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 25,
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h3: {
      fontSize:20,
      lineHeight: 1.5,
    },
  },
});

export default theme;
