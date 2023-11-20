import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Test from "./components/Test";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  );
}

export default App;
