import React from 'react';
import Button from './Button'
import Form from './Form';

import { useTheme} from '../Hooks/ThemeContext';
import { regInputs } from '../utils/userInputs';
import { regReq } from '../utils/userRequests'

export default function Register() {

    const loginLink = 'login';
    const dm = useTheme();

    return (
        <div>
            <h1
                style={{
                    color: !dm ? 'black' : 'white',
                }}
            >
                Register Today
            </h1>
            <br/>

            <Form 
                id='registerForm'
                title='Register'
                inputs={regInputs}
                submitFunc={regReq}
            />

            <Button
            
            onClick= {() => {window.location = loginLink}}
            text='Already Have An Account? Login'
            style={{color: 'white', backgroundColor: 'black'}}

            />
        </div>
    )
}
