import { ThemeProvider } from "@material-ui/core";
import "fontsource-roboto";
import React from "react";
import theme from "../theme/theme";
import "./App.css";
import AppLayout from "./AppLayout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
