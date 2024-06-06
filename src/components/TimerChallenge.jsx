import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

    const timerIsActive = remainingTime > 0 && remainingTime < targetTime;

    if(remainingTime <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setRemainingTime(prevRemainingTime => {
                return prevRemainingTime - 10;
            });
        }, 10);
    }

    const handleStop = () => {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return(
        <>
        <ResultModal ref={dialog} result="You lost!" targetTime={targetTime} />
        <section>
            <h1>{title}</h1>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : '' }
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    { timerIsActive ?  'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={ timerIsActive ? 'active' : undefined }>
                { timerIsActive ? 'Time is running...' : 'Timer inactive' }
            </p>
        </section>
        </>
    )
}