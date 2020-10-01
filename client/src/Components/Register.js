import React from 'react';
import Button from './Button'
import Form from './Form';

import { useTheme} from '../Hooks/ThemeContext';
import { regInputs } from '../utils/userInputs';
import { register } from '../utils/userRequests'
import Text from './Text';

export default function Register() {

    const loginLink = 'login';
    const theme = useTheme();

    return (
        <div>
            <Text
                tag='h1'
                text='Register Today!'
            />
            <br/>

            <Form 
                id='registerForm'
                title='Fill Out The Form And Click Submit'
                inputs={regInputs}
                request={register}
                submitText='Submit Registration'
            />

            <Button
            
            onClick= {() => {window.location = loginLink}}
            text='Already Have An Account? Login'
            style={{color: theme ? 'white' : 'purple', backgroundColor: theme ? '#222' : 'lightgreen'}}

            />
        </div>
    )
}
