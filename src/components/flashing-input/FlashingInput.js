import { useRef } from 'react';

import { Button } from '../shared';

import style from './FlashingInput.module.scss';

export const FlashingInput = () => {
    console.log('Rendering FlashingInput component');
    const inputRef = useRef(null);
    
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div id={style.flashingInputContainer}>
            <p>Check out how this input behaves when you focus on it.</p>
            <div>
                <input id={style.flashingInput} type="text" ref={inputRef} />
            </div>
            <div>
                <Button onClick={focusInput}>Trigger Flash</Button>
            </div>
        </div>
    );
};