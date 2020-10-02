import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useTheme } from '../Hooks/ThemeContext';
import { useUserContext } from '../Hooks/userContext';
import Text from './Text';
import axios from 'axios';
import isEmpty from '../utils/isEmpty';

export default function Form(props) { //inputs=Array(of Objs.), title=String, id=String, submitText=String, request={method:String,endpoint:String,validation:Function}

  const initialState = props.inputs.reduce( (intial, input) => {
    intial[input.name] = ''
    return intial
  }, {})

  const [formValues, updateValues] = useState(initialState)
  const [formErrors, updateErrors] = useState(initialState)
  const [requestMessage, setReqMsg] = useState('')
  const theme = useTheme();
  const {user, updateUser} = useUserContext();

  const submitForm = () => {

    const { endpoint, method, validation } = props.request;
    // console.log(endpoint, method, validation);    
    
    const errorMsgs = validation(formValues);  
    
    //reset errors to default (empty string)
    updateErrors({...initialState, ...errorMsgs})

    if (isEmpty(errorMsgs)) {
            
      axios({
        method: method,
        url: endpoint,
        data: formValues
      })
      .then( res => {
        updateValues(initialState)

        // console.log(res);
        if (res.status === 200) {
          setReqMsg('Login Success')
        } else if (res.status === 201) {
          setReqMsg('Account Created Successfully')
        } else {
          setReqMsg('Request Successful')
        }
        
        if (props.id === 'registerForm' || props.id === 'loginForm' ) {
          const expiresTime = (new Date(Date.now+180000)).toUTCString();
          document.cookie = `token=${res.data.token}; expires=${expiresTime}`
          updateUser({...user, username: res.data.username})
          window.location = window.location.origin
        }

      })
      .catch( err => {
        // console.log(err);
        setReqMsg(err.message)
      })

    }

  }


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
      margin: 10,
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
          color: theme ? 'lightblue' : 'midnightblue',
        }}
        text={requestMessage}
        tag='h2'
      />
      <form 
        id={props.id}
        style={{...defaultStyles.form, ...props.style}}
      >
        {
          Array.isArray(props.inputs) 
          ? props.inputs.map( inProps => {
            return (
              <div
                key={inProps.name+'Wrapper'}
                style={{display:"flex", flexDirection:'column'}}
              >
                <Text 
                  tag='h3'
                  key={inProps.name+'Error'}
                  // id={inProps.name+'Error'}
                  style={{
                    color: 'red',
                    display: formErrors[inProps.name] !== '' ? 'initial' : 'none',
                  }} //...defaultStyles.inputErr
                  text={formErrors[inProps.name] || ''}
                />
                <Input
                  key={inProps.name+'Input'}
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
