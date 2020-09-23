import React from 'react';
import { useTheme} from '../Hooks/ThemeContext';

export default function Button(props) {
  
  const theme = useTheme();

  const buttonStyle = {
    padding: 10,
    borderRadius: 5,
    border: 'none',
    fontSize: 'large',
    backgroundColor: theme ? '#333' : 'lightblue',
    color: theme ? 'white' : 'deeppink',
    cursor: 'pointer',
  }

  return (
    <button
    className='dynamicBtn'
    style={{...buttonStyle, ...props.style}}
    onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
