import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    return(
        <section>
            <h1>{title}</h1>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : '' }
                { timerExpired && <p>You lost!</p> }
            </p>
            <p>
                <button onClick={handleStart}>
                    { timerStarted ?  'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={ timerStarted ? 'active' : undefined }>
                { timerStarted ? 'Time is running...' : 'Timer inactive' }
            </p>
        </section>
    )
}