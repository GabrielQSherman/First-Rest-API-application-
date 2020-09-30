import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useTheme} from '../Hooks/ThemeContext';
import Text from './Text';

export default function Form(props) { //inputs=Array(of Objs.), title=String, submitFunc=Function


  const initialState = props.inputs.reduce( (intial, input) => {
    intial[input.name] = ''
    return intial
  }, {})

  const [formValues, updateValues] = useState(initialState)
  
  const buttonOnClick = async () => {
    updateValues(initialState)
    const user = await props.submitFunc(formValues)
    console.log(user);
  }

  const theme = useTheme();

  const defaultStyles = {
    form: {
      backgroundColor: theme ? '#444' : 'lightpink',
      display: 'flex',
      flexDirection: 'column',
      margin: '30%',
      marginTop: '1%',
      marginBottom: '3%',
      padding: '2%',
      borderRadius: 25,
    },
    input: {
      margin: '1%',
      marginLeft: '20%',
      marginRight: '20%',
      fontSize: 'large',
      textAlign: 'center',
    },
    submitBtn: {
      fontSize: '2em',
      marginBottom: '3%',
      padding: '20px 70px',
      borderRadius: 35,
      backgroundColor: theme ? '#555' : 'lightblue',
    },
  } 

  return (
    <div>
      <Text
        style = {{
          borderRaidus: 15,
          color: !theme ? 'black' : 'white',
        }}
        tag='h1'
        text={props.title}
      />
      <form 
        id={props.id}
        style={{...defaultStyles.form, ...props.style, color: 'honeydew'}}
      >
        {
          Array.isArray(props.inputs) 
          ? props.inputs.map( inProps => {
            return (
              <Input
                key={inProps.name}
                value={formValues[inProps.name]}
                name={inProps.name}
                ph={inProps.ph}
                type={inProps.type}
                style={{...defaultStyles.input, ...inProps.style}}
                id={inProps.id}
                onChange={ (e) => {

                  const newValue = e.target.value;
                  const inputName = e.target.name;

                  updateValues( {...formValues, [inputName]: newValue} )
                }}
              />
            )
          })
          : 'Dev Warning! No Inputs, Check Code'
        }

      </form>
      <Button 
        text={props.submitText}
        onClick={buttonOnClick}
        style={{...defaultStyles.submitBtn}}
      />
  
    </div>
  )
}
