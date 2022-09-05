import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Homepage from "./pages/Homepage";
import theme from "./style/theme";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewelry from "./pages/Jewelry";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UIProvider } from "./context/ui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/jewelry" element={<Jewelry />} />
            <Route path="*" element={<p>404 page not found!</p>} />
          </Routes>
        </BrowserRouter>
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
