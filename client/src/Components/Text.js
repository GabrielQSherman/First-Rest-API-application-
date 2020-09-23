import React from 'react'
import { useTheme} from '../Hooks/ThemeContext';

export default function Text(props) {

  const theme = useTheme()

  const TagType = props.tag;
  
  const defaultStyle = {
    color: theme ? 'white': 'black',
  }

  return (
    <TagType
      style = {{...defaultStyle, ...props.style}}
    >
      {props.text}
    </TagType>
  )
}
