import React from 'react'

export default function Login() {
    const rootRoute = window.location.origin;
    return (
        <div>
            <h1>
                Login To Your Account 
            </h1>
            <a 
                href={rootRoute+'/register'}
            > 
                Register Here!
            </a>

        </div>
    )
}
