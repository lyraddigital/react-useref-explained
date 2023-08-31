import { useRef, useState } from 'react';

import { Button } from '../shared';
import { Timer } from './Timer';

import style from './StopWatch.module.scss';

export const StopWatch = () => {
    console.log('Rendering StopWatch component');

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const startTimer = () => {
        const currentTime = new Date();
        setStartTime(currentTime);
        setNow(currentTime);

        stopTimer();

        intervalRef.current = setInterval(() => {
            setNow(new Date());           
        }, 10);        
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }       
    };

    return (
        <div id={style.tickerShell}>
            <p>Check out this cool Stopwatch that also makes use of the useRef hook.</p>
            <Timer startTime={startTime} now={now} />
            <div id={style.tickerButtonsContainer}>
                <Button onClick={startTimer}>Start</Button>
                <Button onClick={stopTimer}>Stop</Button>
            </div>
        </div>
    );
};