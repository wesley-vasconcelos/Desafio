import * as React from "react";
import { ThemeProvider } from 'styled-components'
import Navigation from "./src/navigation/navigation.js";
import Home from "./src/screens/Home/index.js";
import theme from './theme'

const  App = () => {
  console.disableYellowBox = true

  return (
    <ThemeProvider theme={theme}>
     <Navigation />
    </ThemeProvider>
  );
}

export default  App