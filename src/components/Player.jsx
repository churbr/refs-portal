import { useState, useRef } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const input = useRef();

  const handleSubmit = () => {
    setEnteredPlayerName(input.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'Unknown Entity' }</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
