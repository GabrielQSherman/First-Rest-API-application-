import React from 'react';

export default function Home() {

    const loginLink = window.location.origin + '/login';
    const regLink = window.location.origin + '/register';

    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <br/>
            <a
                href={loginLink}
            >
                Login
            </a>
            <br/>
            <a
                href={regLink}
            >
                Register
            </a>
        </div>
    )
}
