import React, {useEffect} from 'react'
import Button from './Button';

import { useTheme, useThemeUpdate} from '../Hooks/ThemeContext';
import useCountVists from '../Hooks/useCountVisits';
import navButtons from '../utils/navButtons';

export default function NavBar() {
  
  const dm = useTheme();
  const toggleTheme = useThemeUpdate();
  const [visits, setVisits] = useCountVists(0)

  useEffect( () => {   
      // console.log(`You visited ${visits} pages`);
  })

  let firstBtn = true;

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

      {
        navButtons.map( (btn, index) => {
          if (btn.location !== `${window.location}`) {
            const btnStyle = firstBtn ? {...btn.style, marginLeft: 130} : {...btn.style};
            firstBtn = false
            return (
              <Button
                key={index} //add key prop. to each btn to avoid React warning
                onClick= {() => {window.location = btn.location}}
                text={btn.text}
                style={btnStyle}
              />
            )
          }
          return null//return null to avoid React warning
        })
      }
   
      <Button 
        onClick= {toggleTheme}
        text= { dm ? 'Turn On Light Mode' : 'Turn On Dark Mode'}
      />
      <Button 
        onClick= {() => {setVisits(0)}}
        text= { `Reset Page Count: (${visits})`}
        style= {{marginRight: 130}}
      />


    </div>
  )
}
