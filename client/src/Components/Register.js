import React from 'react'

export default function Register() {
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
