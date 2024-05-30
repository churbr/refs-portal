import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Normal" targetTime={3} />
        <TimerChallenge title="Hard" targetTime={4} />
        <TimerChallenge title="Pro" targetTime={6} />
      </div>
    </>
  );
}

export default App;
