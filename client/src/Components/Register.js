
import React from 'react';

export default function Register() {

    const loginLink = window.location.origin + '/login';

    return (
        <div>
            <h1>
                Register Today
            </h1>
            <br/>
            <Button
            
            onClick= {() => {window.location = loginLink}}
            text='Already Have An Account? Login'
            style={{color: 'white', backgroundColor: 'black'}}

            />
        </div>
    )
}
