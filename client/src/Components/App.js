import React from 'react';

import { BrowserRouter } from 'react-router-dom'; 

import AppRouter from './AppRouter';

import { ThemeProvider } from '../Hooks/ThemeContext'

function App() {
  return (
    <ThemeProvider >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;