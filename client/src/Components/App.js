import React, {useEffect} from 'react';

import { BrowserRouter } from 'react-router-dom'; 

import AppRouter from './AppRouter';

import { ThemeProvider } from '../Hooks/ThemeContext'

import useCountVists from '../Hooks/useCountVisits';

function App() {

  const pv = useCountVists(0)

  return (
    <ThemeProvider >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;