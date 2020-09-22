
import React from 'react';
import { useTheme} from '../Hooks/ThemeContext';

export default function Home() {

    const dm = useTheme();

    return (
        <div>
            <h1
                style={{
                    color: !dm ? 'black' : 'white',
                }}            
            >
                Welcome To Our Service
            </h1>
            <br/>
            <p
                style={{
                    color: !dm ? 'black' : 'white',
                }}            
            >
                This is some filler homepage text
            </p>
        </div>
    )
}
