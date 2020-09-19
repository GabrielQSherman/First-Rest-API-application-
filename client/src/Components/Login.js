
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
                Login To Your Account
            </h1>
            <br/>

            <Form 
                id='loginForm'
                inputs={loginInputs}
                title='Login!'
                submitFunc={loginReq}
            />

            <Button
            
            onClick= {() => {window.location = regLink}}
            text='Need An Account? Register Today!'
            style={{color: 'white', backgroundColor: 'green'}}

            />
        </div>
    )
}
