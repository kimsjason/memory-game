const Card = (props) => {
  const handleClick = (e) => {
    if (!props.clicked) {
      setClicked(e);
      addPoint();
    } else {
      evaluateBestScore();
      resetScore();
      resetCards();
    }
    setRandomCards();
  };

  const setClicked = (e) => {
    props.setClicked(e);
  };

  const addPoint = () => {
    props.addPoint();
  };

  const evaluateBestScore = () => {
    props.evaluateBestScore();
  };

  const resetScore = () => {
    props.resetScore();
  };

  const resetCards = () => {
    props.resetCards();
  };

  const setRandomCards = () => {
    props.setRandomCards();
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="number">{props.value}</div>
    </div>
  );
};

export { Card };
