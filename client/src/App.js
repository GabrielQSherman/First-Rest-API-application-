import AppRouter from './Components/AppRouter'
import React from 'react'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;
