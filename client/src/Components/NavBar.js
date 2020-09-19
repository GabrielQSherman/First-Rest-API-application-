import React from 'react'
import Button from './Button';

// import useTheme from '../Hooks/useTheme';

import { useTheme, useThemeUpdate} from '../Hooks/ThemeContext';

const loginLink = 'login';
const regLink = 'register';

export default function NavBar() {
  
  const dm = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <div
      style={{
        width: '100%',
        margin: 0,
        paddingTop: 30,
        paddingBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: dm ? '#222' : 'pink',
        justifyContent: 'space-between'
      }}
      >
      <Button
        onClick= {() => {window.location = window.location.origin}}
        text='Home'
        style={{marginLeft: 30}}
      />
      <Button
        onClick= {() => {window.location = regLink}}
        text='Create An Account'
        style={{color: 'white', backgroundColor: 'green'}}
      />
      <Button
        onClick= {() => {window.location = loginLink}}
        text='Login To Your Account'
      />
      <Button 
        onClick= {toggleTheme}
        text= { dm ? 'Turn On Light Mode' : 'Turn On Dark Mode'}
        style= {{marginRight: 30}}
      />

    </div>
  )
}
