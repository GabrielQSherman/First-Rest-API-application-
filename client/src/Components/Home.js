
import React from 'react';

import Button from './Button';

export default function Home() {

    const loginLink = 'login';
    const regLink = 'register';

    
    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <br/>

            <Button
            
            onClick= {() => {window.location = loginLink}}
            text='Login To Your Account'
            style={{color: 'white', backgroundColor: 'black'}}

            />

            <br/>
            <Button
            
            onClick= {() => {window.location = regLink}}
            text='Create An Account'
            style={{color: 'white', backgroundColor: 'green'}}

            />
        </div>
    )
}
