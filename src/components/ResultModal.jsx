import { forwardRef } from 'react'

const ResultModal = forwardRef(function ResultModal ({ result, targetTime }, ref) {
    return <dialog ref={ref} className="result-modal">
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
});

export default ResultModal;