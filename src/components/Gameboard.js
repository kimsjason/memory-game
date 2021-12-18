import { useState } from "react";
import { Card } from "./Card";

const Gameboard = (props) => {
  const [cards, setCards] = useState([
    { value: "ab1", clicked: false },
    { value: "bc2", clicked: false },
    { value: "cd3", clicked: false },
    { value: "de4", clicked: false },
  ]);

  const getRandomCards = () => {
    const cardsCopy = [...cards];
    const randomCards = [];

    while (cardsCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * cardsCopy.length);
      const [randomItem] = cardsCopy.splice(randomIndex, 1);
      randomCards.push(randomItem);
    }

    return randomCards;
  };

  const setRandomCards = () => {
    setCards(getRandomCards());
  };

  const setClicked = (e) => {
    const cardsCopy = [...cards];
    cardsCopy.map((card) => {
      if (card.value === e.target.innerHTML) {
        card.clicked = true;
      }
      return card;
    });

    setCards(cardsCopy);
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
    const cardsCopy = [...cards];
    cardsCopy.map((card) => {
      return (card.clicked = false);
    });

    setCards(cardsCopy);
  };

  return (
    <div className="gameboard">
      {cards.map((card) => {
        return (
          <Card
            key={card.value}
            value={card.value}
            clicked={card.clicked}
            setClicked={setClicked}
            addPoint={addPoint}
            evaluateBestScore={evaluateBestScore}
            resetScore={resetScore}
            resetCards={resetCards}
            setRandomCards={setRandomCards}
          />
        );
      })}
    </div>
  );
};

export { Gameboard };
