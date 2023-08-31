import { useEffect, useRef, useState } from 'react';

import { Button } from '../shared';

import style from './NonRenderingCounter.module.scss';

export const NonRenderingCounter = () => {
    console.log('Rendering NonRenderingCounter component');

    const numberOfClicks = useRef(0);
    const [counter, setCounter] = useState(numberOfClicks.current);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(numberOfClicks.current);
            numberOfClicks.current = 0;
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const updateCounter = () => {
        numberOfClicks.current++;
        console.log(`The button has been clicked ${numberOfClicks.current} times`);        
    };

    return (
        <div id={style.clicksContainer}>
            <p>Number of times the button was clicked after 5 seconds</p>
            <div id={style.counterContainer}>
                <span id={style.clickCount}>{counter}</span>
                <span>times</span>
            </div>
            <Button onClick={updateCounter}>Update Count</Button>
        </div>        
    );
};