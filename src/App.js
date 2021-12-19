import { Gameboard } from "./components/Gameboard";
import { Scoreboard } from "./components/Scoreboard";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const addPoint = () => {
    setCurrentScore(currentScore + 1);
  };

  const evaluateBestScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Gameboard
        addPoint={addPoint}
        evaluateBestScore={evaluateBestScore}
        resetScore={resetScore}
      />
    </div>
  );
}

export default App;
