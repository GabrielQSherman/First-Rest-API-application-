import React from 'react'

export default function Input(props) { //ph, type, onChange, name, id
  
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


const defaultStyle = {
  color: 'white',
  backgroundColor: '#222',
  border: 'none',
  padding: 10,
  borderRadius: 5,
}
