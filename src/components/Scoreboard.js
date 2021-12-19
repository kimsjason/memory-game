import "../styles/Scoreboard.css";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="current-score">Current Score: {props.currentScore}</div>
      <div className="best-score">Best Score: {props.bestScore}</div>
    </div>
  );
};

export { Scoreboard };
