import React from 'react';
import { useTheme} from '../Hooks/ThemeContext';

export default function Input(props) { //ph, type, onChange, name, id
  
  const theme = useTheme();
  
  const defaultStyle = {
    color: theme ? 'white' : 'black',
    backgroundColor: theme ? '#222' : 'pink',
    border: 'none',
    padding: 10,
    borderRadius: 5,
  }
  
  return (
    <input
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.ph}
      style={{...defaultStyle, ...props.style}}
    />
  )
}


