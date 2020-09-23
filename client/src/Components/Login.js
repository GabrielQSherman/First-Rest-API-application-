
import React from 'react';

import { useTheme} from '../Hooks/ThemeContext';
import { loginInputs } from '../utils/userInputs'
import { loginReq } from '../utils/userRequests'

import Button from './Button';
import Form from './Form';
import Text from './Text';

export default function Login() {

    const regLink = 'register';
    const theme = useTheme();

    return (
        <div>
            <Text
                style={{
                    color: !theme ? 'black' : 'white',
                }}
                tag='h1'
                text='Login'
            />
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
            style={{color: theme ? 'white' : 'purple', backgroundColor: theme ? '#222' : 'lightgreen'}}

            />
        </div>
    )
}
