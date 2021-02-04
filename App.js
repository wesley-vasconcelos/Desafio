import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Navigation from "./src/navigation/navigation.js";
import theme from "./theme";
import store from "./src/redux";

const App = () => {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
