import "fontsource-roboto";
import "./App.css";
import React from 'react';
import AppLayout from './AppLayout';
import ThemeProvider from '@material-ui/core';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
