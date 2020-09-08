import React from 'react'

export default function Home() {
    const rootRoute = window.location.origin;
    return (
        <div>
            <a 
                href={rootRoute+'/login'}
            > 
            Login
            </a>
            <br/>
            <a 
                href={rootRoute+'/register'}
            > 
            Register
            </a>
        </div>
    )
}
