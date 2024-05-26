import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChangePlayerName = (e) => {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);    
  }

  const handleSubmit = () => {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome { submitted ? enteredPlayerName : 'unknown entity' }</h2>
      <p>
        <input type="text" onChange={handleChangePlayerName} value={enteredPlayerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
