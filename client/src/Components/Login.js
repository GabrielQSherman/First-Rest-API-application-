
import React from 'react';
import Button from './Button';

import Form from './Form';
import { loginInputs } from '../utils/userInputs'
import { loginReq } from '../utils/userRequests'
import useTheme from '../Hooks/useTheme';

export default function Login() {

    const regLink = 'register';
    const [dm] = useTheme(false);

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
