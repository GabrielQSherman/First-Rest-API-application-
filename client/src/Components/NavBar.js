import React, {useEffect} from 'react'
import Button from './Button';

import { useTheme, useThemeUpdate} from '../Hooks/ThemeContext';
import useCountVists from '../Hooks/useCountVisits';

const loginLink = 'login';
const regLink = 'register';

export default function NavBar() {
  
  const dm = useTheme();
  const toggleTheme = useThemeUpdate();
    
  const [visits, setVisits] = useCountVists(0)

  useEffect( () => {   
      console.log(`You visited ${visits} pages`);
  })

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
      />
      <Button 
        onClick= {() => {setVisits(0)}}
        text= { `Reset Page Count: (${visits})`}
        style= {{marginRight: 30}}
      />


    </div>
  )
}
