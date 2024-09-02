import { useEffect, useRef, useState } from "react";

import GameCard from "./GameCard";
import GameOver from "./GameOver";
import GameRound from "./GameRound";
import SplashText from "./SplashText";

import "../styles/gameboard.css";
import ScoreBoard from "./ScoreBoard";

export default function GameBoard({
  gameStatus,
  difficulty,
  handleStatusChange,
  handleGameModeChange,
  handleScore,
  handleHighScore,
  currentScore,
  currentHighScore,
}) {
  const [minecraftItems, setMinecraftItems] = useState([]);
  const clickedItems = useRef([]);
  const [currentRound, setCurrentRound] = useState(0);

  const handleClick = (name) => {
    const hasAlreadyBeenClicked = clickedItems.current.includes(name);
    if (hasAlreadyBeenClicked) {
      handleStatusChange("Game Over");
      if (currentScore > currentHighScore) {
        handleHighScore(currentScore);
      }
    } else if (currentRound === clickedItems.current.length) {
      console.log("Winner chicken dinner");
    } else {
      setCurrentRound(currentRound + 1);
      clickedItems.current.push(name);
      handleScore(currentScore + 1);
      setMinecraftItems(durstenFeldShuffle(minecraftItems));
    }
  };

  // Shuffle items each round
  const durstenFeldShuffle = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    return newArr;
  };

  useEffect(() => {
    // fetch 200 minecraft blocks
    fetch(`https://minecraft-api.vercel.app/api/blocks`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        //slice the amount of items based on difficulty
        const blockLimitBasedOnDifficulty = {
          Easy: 12,
          Medium: 18,
          Hard: 24,
        };
        let blockLimit = blockLimitBasedOnDifficulty[difficulty];

        // Remove banners from items, sadly the api is basic and I can't filter it out when doing
        // a get request, not very efficient ;(
        let filteredArr = response.filter(
          (item) => !item.name.includes("Banner")
        );

        // shuffle the the 200 fetched items and slice them based on difficulty
        let shuffledArr = durstenFeldShuffle(filteredArr);
        let slicedArr = shuffledArr.slice(0, blockLimit);

        setMinecraftItems(slicedArr);
      });
  }, [difficulty]);

  if (gameStatus !== "Game Over") {
    return (
      <>
        <div className="score-and-round-container">
          <div className="score-board">
            <ScoreBoard
              currentScore={currentScore}
              currentHighScore={currentHighScore}
            />
          </div>
          <GameRound
            currentRound={currentRound}
            totalRounds={minecraftItems.length}
          />
        </div>
        <div className="difficulty-splash-container">
          <SplashText customText="The rules are simple" />
          <SplashText customText="Don't click on the same card twice!" />
        </div>
        <div className="cards">
          {minecraftItems.map((minecrafItem) => {
            return (
              <GameCard
                key={minecrafItem.namespacedId}
                name={minecrafItem.name}
                img={minecrafItem.image}
                handleClick={handleClick}
                difficulty={difficulty}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <GameOver
          handleGameModeChange={handleGameModeChange}
          currentScore={currentScore}
          currentHighScore={currentHighScore}
        />
        ;
      </>
    );
  }
}
