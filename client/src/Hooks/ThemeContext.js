import React, { useState, useEffect, useContext, createContext} from 'react';

const { get, set} = require('../utils/localStorage');

const ThemeContext = createContext()

const ThemeUpdateContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [dm, setTheme] = useState( () => {
    return get('theme', false)    
  })

  useEffect(() => {

    set('theme', JSON.stringify(dm))
    document.getElementById('root').style.backgroundColor = dm ? '#333': 'antiquewhite';
  }, [dm])

  const toggleDM = () => {
    setTheme(prvDm => !prvDm)
  } 

  return (
    <ThemeContext.Provider value={dm}>
        <ThemeUpdateContext.Provider value={toggleDM}>
          {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}