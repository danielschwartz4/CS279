import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage";
import HomePage from "./pages/HomePage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
