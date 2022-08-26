import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewelry from "./pages/Jewelry";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="*" element={<p>404 page not found!</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
