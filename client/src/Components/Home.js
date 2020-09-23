
import React from 'react';
import { useTheme} from '../Hooks/ThemeContext';
import Text from './Text';

export default function Home() {

    const theme = useTheme();

    return (
        <div>
            <Text
                style={{
                    color: !theme ? 'black' : 'white',
                }}
                tag='h1'
                text='Welcome To Our Service'            
            />
            <br/>
            <Text
                style={{
                    color: !theme ? 'black' : 'white',
                }}
                tag='p'
                text='This is some filler homepage text'            
            />
        </div>
    )
}
