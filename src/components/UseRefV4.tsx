import React, { useState, useEffect, useRef } from 'react';
import { mobileStyle, myStylesReact } from '../styles/myStylesReact';

const UseRefv4: React.FC<any> = () => {

    const [count, setCount] = useState(0);

    const [styleUnderline, setStyleUnderline] = useState('');

    return (
        <div>
             <div style={mobileStyle.body}>react</div>
             <div className='webStyle'>css</div>
            <div style={myStylesReact.container}>text</div>
            <div style={myStylesReact.exampleStyle}>text</div>
            <button onClick={() => setStyleUnderline('')}>No Underline</button>
            <button onClick={() => setStyleUnderline('stateColor')}>Underline</button>
        </div>
    );
}
export default UseRefv4;