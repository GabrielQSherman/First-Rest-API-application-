import React from 'react'

export default function Login() {
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
