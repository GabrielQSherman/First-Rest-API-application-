import React from 'react'
import Input from './Input'
import Button from './Button'

export default function Form(props) { //inputs=Array(of Objs.), title=String, submitFunc=Function
  
  const buttonOnClick = () => {
    props.submitFunc(document.getElementById(props.id))
  }

  return (
    <div>
      <h2>
        {props.title}
      </h2>
      <form 
        id={props.id}
      >
        {
          Array.isArray(props.inputs) 
          ? props.inputs.map( inProps => {
            return (
              <Input
                name={inProps.name}
                ph={inProps.ph}
                type={inProps.type}
                style={inProps.style}
                id={inProps.id}
                onChange={inProps.onChange}
              />
            )
          })
          : 'Dev Warning! No Inputs, Check Code'
        }

      </form>
      <Button 
        text='Submit'
        onClick={buttonOnClick}
      />
  
    </div>
  )
}
