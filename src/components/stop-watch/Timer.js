import { intervalToDuration } from 'date-fns';

import style from './Timer.module.scss';

const padNumber = (number, places) => {
    return String(number).padStart(places, '0');
};
const getMillisecondsFromDifference = (duration, startTime, now) => {
    const millisecondsUsed = (duration.seconds * 1000) + (duration.minutes * 60 * 1000) + (duration.hours * 60 * 60 * 1000);
    return (now - startTime) - millisecondsUsed;
}

export const Timer = ({ startTime, now }) => {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    
    if (startTime || now) {
        const duration = intervalToDuration({
            start: startTime,
            end: now
        });

        minutes = duration.minutes;
        seconds = duration.seconds;
        milliseconds = getMillisecondsFromDifference(duration, startTime, now);
    }        

    return (
        <div id={style.timerContainer}>
            <div className={style.timerNumber}>{padNumber(minutes, 2)}</div>
            <div className={style.separator}>:</div>
            <div className={style.timerNumber}>{padNumber(seconds, 2)}</div>
            <div className={style.separator}>:</div>
            <div className={style.millisecondTimerNumber}>{padNumber(milliseconds, 3)}</div>          
        </div>
    );
};