import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

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
  },
});

export default theme;
