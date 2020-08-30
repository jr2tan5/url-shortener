import React from "react";
import "./App.css";
import "fontsource-roboto";
import AppLayout from "./AppLayout";
import { ThemeProvider, Box } from "@material-ui/core";
import theme from "../Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
}
export default App;
