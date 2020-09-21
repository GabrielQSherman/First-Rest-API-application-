
import React from 'react';

import { useTheme} from '../Hooks/ThemeContext';
import { loginInputs } from '../utils/userInputs'
import { loginReq } from '../utils/userRequests'

import Button from './Button';
import Form from './Form';

export default function Login() {

    const regLink = 'register';
    const dm = useTheme();

    return (
        <div>
            <h1
                style={{
                    color: !dm ? 'black' : 'white',
                }}
            >
                Login
            </h1>
            <br/>

            <Form 
                id='loginForm'
                inputs={loginInputs}
                title='Login To Your Account'
                submitFunc={loginReq}
                submitText='Submit Login'
            />

            <Button
            
            onClick= {() => {window.location = regLink}}
            text='Need An Account? Register Today!'
            style={{color: dm ? 'white' : 'purple', backgroundColor: dm ? '#222' : 'lightgreen'}}

            />
        </div>
    )
}
