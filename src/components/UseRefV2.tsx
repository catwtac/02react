import React, { useRef } from 'react';

const UseRefV2: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    //on rajoute le style = "color:'red'" de façon dynamique à l'input 
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.className = 'inputcolor';
        }
    };
    //on peur rajouter un style manuellement    
    //<input ref={inputRef} type="text" style={{color:"blue"}}/>
    return (
        <div><input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus the input</button></div>
    );
}

export default UseRefV2;