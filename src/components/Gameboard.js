import { useState } from "react";
import { Card } from "./Card";
import "../styles/Gameboard.css";

const Gameboard = (props) => {
  const [cards, setCards] = useState([
    { id: "2C", path: require("../assets/cards/2C.png"), clicked: false },
    { id: "2D", path: require("../assets/cards/2D.png"), clicked: false },
    { id: "2H", path: require("../assets/cards/2H.png"), clicked: false },
    { id: "2S", path: require("../assets/cards/2S.png"), clicked: false },
    { id: "3C", path: require("../assets/cards/3C.png"), clicked: false },
    { id: "3D", path: require("../assets/cards/3D.png"), clicked: false },
    { id: "3H", path: require("../assets/cards/3H.png"), clicked: false },
    { id: "3S", path: require("../assets/cards/3S.png"), clicked: false },
    { id: "4C", path: require("../assets/cards/4C.png"), clicked: false },
    { id: "4D", path: require("../assets/cards/4D.png"), clicked: false },
    { id: "4H", path: require("../assets/cards/4H.png"), clicked: false },
    { id: "4S", path: require("../assets/cards/4S.png"), clicked: false },
    { id: "5C", path: require("../assets/cards/5C.png"), clicked: false },
    { id: "5D", path: require("../assets/cards/5D.png"), clicked: false },
    { id: "5H", path: require("../assets/cards/5H.png"), clicked: false },
    { id: "5S", path: require("../assets/cards/5S.png"), clicked: false },
    { id: "6C", path: require("../assets/cards/6C.png"), clicked: false },
    { id: "6D", path: require("../assets/cards/6D.png"), clicked: false },
    { id: "6H", path: require("../assets/cards/6H.png"), clicked: false },
    { id: "6S", path: require("../assets/cards/6S.png"), clicked: false },
    { id: "7C", path: require("../assets/cards/7C.png"), clicked: false },
    { id: "7D", path: require("../assets/cards/7D.png"), clicked: false },
    { id: "7H", path: require("../assets/cards/7H.png"), clicked: false },
    { id: "7S", path: require("../assets/cards/7S.png"), clicked: false },
    { id: "8C", path: require("../assets/cards/8C.png"), clicked: false },
    { id: "8D", path: require("../assets/cards/8D.png"), clicked: false },
    { id: "8H", path: require("../assets/cards/8H.png"), clicked: false },
    { id: "8S", path: require("../assets/cards/8S.png"), clicked: false },
    { id: "9C", path: require("../assets/cards/9C.png"), clicked: false },
    { id: "9D", path: require("../assets/cards/9D.png"), clicked: false },
    { id: "9H", path: require("../assets/cards/9H.png"), clicked: false },
    { id: "9S", path: require("../assets/cards/9S.png"), clicked: false },
    { id: "10C", path: require("../assets/cards/10C.png"), clicked: false },
    { id: "10D", path: require("../assets/cards/10D.png"), clicked: false },
    { id: "10H", path: require("../assets/cards/10H.png"), clicked: false },
    { id: "10S", path: require("../assets/cards/10S.png"), clicked: false },
    { id: "AC", path: require("../assets/cards/AC.png"), clicked: false },
    { id: "AD", path: require("../assets/cards/AD.png"), clicked: false },
    { id: "AH", path: require("../assets/cards/AH.png"), clicked: false },
    { id: "AS", path: require("../assets/cards/AS.png"), clicked: false },
    { id: "JC", path: require("../assets/cards/JC.png"), clicked: false },
    { id: "JD", path: require("../assets/cards/JD.png"), clicked: false },
    { id: "JH", path: require("../assets/cards/JH.png"), clicked: false },
    { id: "JS", path: require("../assets/cards/JS.png"), clicked: false },
    { id: "KC", path: require("../assets/cards/KC.png"), clicked: false },
    { id: "KD", path: require("../assets/cards/KD.png"), clicked: false },
    { id: "KH", path: require("../assets/cards/KH.png"), clicked: false },
    { id: "KS", path: require("../assets/cards/KS.png"), clicked: false },
    { id: "QC", path: require("../assets/cards/QC.png"), clicked: false },
    { id: "QD", path: require("../assets/cards/QD.png"), clicked: false },
    { id: "QH", path: require("../assets/cards/QH.png"), clicked: false },
    { id: "QS", path: require("../assets/cards/QS.png"), clicked: false },
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
      if (card.id === e.target.id) {
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
            key={card.id}
            id={card.id}
            path={card.path}
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
