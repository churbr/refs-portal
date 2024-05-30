export default function TimerChallenge({ title, targetTime }) {
    return(
        <section>
            <h1>{title}</h1>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : '' }
            </p>
            <p>
                <button>Start Challenge</button>
            </p>
            <p>
                Time is running.../Timer inactive
            </p>
        </section>
    )
}