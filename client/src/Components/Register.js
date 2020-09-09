import React from 'react';

export default function Register() {

    const loginLink = window.location.origin + '/login';

    return (
        <div>
            <h1>
                Register Today
            </h1>
            <br/>
            <a
                href={loginLink}
            >
                Already Have An Account? Login
            </a>
        </div>
    )
}