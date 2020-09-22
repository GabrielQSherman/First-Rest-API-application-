import React from 'react';
import { useTheme} from '../Hooks/ThemeContext';

export default function Input(props) { //ph, type, onChange, name, id
  
  const dm = useTheme();
  
  const defaultStyle = {
    color: dm ? 'white' : 'black',
    backgroundColor: dm ? '#222' : 'pink',
    border: 'none',
    padding: 10,
    borderRadius: 5,
  }
  
  return (
    <input
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.ph}
      style={{...defaultStyle, ...props.style}}
    />
  )
}


