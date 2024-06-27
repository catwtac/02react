import React, { useRef } from 'react';


const TextInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const changeColor = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div><input ref={inputRef} type="text" />
            <button onClick={changeColor('red')}>Focus the input</button>
        </div>
    );
}

export default TextInput;