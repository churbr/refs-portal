export default function ResultModal ({ result, targetTime }) {
    return <dialog className="result-modal" open>
        <h2>{result}</h2>
        <p>
            Target time: <strong>X seconds.</strong>
        </p>
        <p>
            You stopped the timer at: <strong>X seconds left.</strong>
        </p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}