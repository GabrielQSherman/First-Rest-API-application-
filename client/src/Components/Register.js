import React from 'react'

export default function Register() {
    const rootRoute = window.location.origin;
    return (
        <div>
            <h1>
                Register Today!
            </h1>
            <a 
                href={rootRoute+'/login'}
            > 
                Login If You Have An Account
            </a>

        </div>
    )
}
