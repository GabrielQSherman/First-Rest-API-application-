import React from 'react'
import Input from './Input'
import Button from './Button'
import { useTheme} from '../Hooks/ThemeContext';

export default function Form(props) { //inputs=Array(of Objs.), title=String, submitFunc=Function
  
  const buttonOnClick = () => {
    const user = props.submitFunc(document.getElementById(props.id))
    console.log(user);
  }

  const dm = useTheme();

  const defaultStyles = {
    form: {
      backgroundColor: dm ? '#444' : 'lightpink',
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
      backgroundColor: dm ? '#555' : 'lightblue',
    },
  } 

  return (
    <div>
      <h2
        style = {{
          borderRaidus: 15,
          color: !dm ? 'black' : 'white',
        }}
      >
        {props.title}
      </h2>
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
                name={inProps.name}
                ph={inProps.ph}
                type={inProps.type}
                style={{...defaultStyles.input, ...inProps.style}}
                id={inProps.id}
                onChange={inProps.onChange}
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
