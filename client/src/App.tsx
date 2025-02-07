import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/notfound";
import ErrorBoundary from "./components/ErrorBoundary"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App: React.FC = () => {
  return (
   
    <ThemeProvider theme={THEME}>
    <Router>
       <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/expense" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
    </ThemeProvider>
  );
};

const THEME = createTheme({
  typography: {
    fontFamily: 'Kanit, cursive',
    fontWeightBold: 700,
  }
});

export default App;
