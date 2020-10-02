import React from 'react'
import { useTheme } from '../Hooks/ThemeContext';

export default function Text(props) {

  const theme = useTheme()

  const TagType = props.tag || 'p';
  
  const defaultStyle = {
    color: theme ? 'white': 'black',
  }

  return (
    <TagType
      style = {{...defaultStyle, ...props.style}}
      id={props.id}
      key={props.key}
    >
      {props.text}
    </TagType>
  )
}
