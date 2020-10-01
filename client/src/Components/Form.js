import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useTheme} from '../Hooks/ThemeContext';
import Text from './Text';

import axios from 'axios';

export default function Form(props) { //inputs=Array(of Objs.), title=String, submitFunc=Function


  const initialState = props.inputs.reduce( (intial, input) => {
    intial[input.name] = ''
    return intial
  }, {})

  const [formValues, updateValues] = useState(initialState)

  const [requestMessage, setReqMsg] = useState('')
  
  const submitForm = () => {
    
    const { endpoint, method, validation } = props.request;
    // console.log(endpoint, method, validation);
    //reset Error messages
    props.inputs.forEach( input => {
      const inputElm = document.getElementById(input.name+'Error')
      // console.log(inputElm);
      inputElm.style.display = 'none'
      inputElm.innerText = ''
    })

    //produce error messages
    const errorsObj = validation(formValues) //get form values from state
    
    //check if there are err messages, validation function should return false if there are none
    // console.log(errorsObj);
    if (errorsObj) {
      //show error messages if there are any to display
      for (const name in errorsObj) {
        const errorText = document.getElementById(name+'Error')
        errorText.style.display = 'initial'
        errorText.innerText = errorsObj[name]
      }
    } else {
      //make request with axios
      axios({
        method: method,
        url: endpoint,
        data: formValues,
      })
      .then( res => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          updateValues(initialState) //reset inputs if login was successfull
          //TODO set username to context, set token in cookies
          setReqMsg('Request Successful')
        } else {
          //TODO alert via a text element
          setReqMsg('Request Failed Error Code: '+res.status)
        }
      })
      .catch( (err) => {
        console.log(err);
        setReqMsg('Request Failed')
      })
    }

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
    inputErr: {
      color: theme ? 'yellow' : 'white', 
      backgroundColor: theme ? '#777' : 'deeppink', 
      fontWeight: 500, 
      padding: 3, 
      borderRadius: 10,
      display: 'none'
    }
  } 

  return (
    <div>
      <Text
        style = {{
          color: !theme ? 'black' : 'white',
        }}
        tag='h1'
        text={props.title}
      />
      <Text
        style = {{
          color: 'lightblue',
        }}
        text={requestMessage}
        tag='h2'
      />      <form 
        id={props.id}
        style={{...defaultStyles.form, ...props.style, color: 'honeydew'}}
      >
        {
          Array.isArray(props.inputs) 
          ? props.inputs.map( inProps => {
            return (
              <div
                key={inProps.name+'Wrapper'}
              >
                <Text 
                  tag='h3'
                  key={inProps.name+'Error'}
                  id={inProps.name+'Error'}
                  style={{...defaultStyles.inputErr}}
                />
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
              </div>
            )
          })
          : 'Dev Warning! No Inputs, Check Code'
        }

      </form>
      <Button 
        text={props.submitText}
        onClick={submitForm}
        style={{...defaultStyles.submitBtn}}
      />
  
    </div>
  )
}
