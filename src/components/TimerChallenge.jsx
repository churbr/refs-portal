import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

    return(
        <section>
            <h1>{title}</h1>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : '' }
                { timerExpired && <p>You lost!</p> }
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    { timerStarted ?  'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={ timerStarted ? 'active' : undefined }>
                { timerStarted ? 'Time is running...' : 'Timer inactive' }
            </p>
        </section>
    )
}