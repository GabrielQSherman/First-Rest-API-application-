import React from 'react';

import { BrowserRouter } from 'react-router-dom'; 

import AppRouter from './AppRouter';

import { ThemeProvider } from '../Hooks/ThemeContext'
import { UserContextProvider } from '../Hooks/userContext'


function App() {
  return (
    <UserContextProvider>
      <ThemeProvider >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;