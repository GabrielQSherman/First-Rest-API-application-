import React from 'react';
import { useTheme} from '../Hooks/ThemeContext';

export default function Button(props) {
  
  const dm = useTheme();

  const buttonStyle = {
    padding: 10,
    borderRadius: 5,
    border: 'none',
    fontSize: 'large',
    backgroundColor: dm ? '#333' : 'lightblue',
    color: dm ? 'white' : 'deeppink',
    cursor: 'pointer',
  }

  return (
    <button
    
    style={{...buttonStyle, ...props.style}}
    onClick={props.onClick}
    
    >
      {props.text}
    </button>
  )
}
