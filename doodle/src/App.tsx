import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage";
import HomePage from "./pages/HomePage";

export const App = () => (
  // Using chakra UI library because it's flexible, robust, and I've used it before
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      {/* Set the routes I need, only two in this case */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
