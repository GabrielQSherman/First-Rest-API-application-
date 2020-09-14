
import React from 'react';
import Button from './Button'

export default function Login() {

    const regLink = 'register';

    return (
        <div>
            <h1>
                Login To Your Account
            </h1>
            <br/>
            <Button
            
            onClick= {() => {window.location = regLink}}
            text='Need An Account? Register Today!'
            style={{color: 'white', backgroundColor: 'green'}}

            />
        </div>
    )
}
