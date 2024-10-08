import { useEffect, useRef, useState } from "react";

import GameCard from "./GameCard";
import GameOver from "./GameOver";
import GameWon from "./GameWon";
import GameRound from "./GameRound";
import SplashText from "./SplashText";

import "../styles/gameboard.css";
import ScoreBoard from "./ScoreBoard";
import useSound from "use-sound";

import { grassDig } from "../assets/sound/sounds";

export default function GameBoard({
  gameSettings,
  handleGameModeChange,
  updateScore,
  checkIfHighscore,
}) {
  const [minecraftItems, setMinecraftItems] = useState([]);
  const clickedItems = useRef([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameStatus, setGameStatus] = useState("Playing");
  const [digSound] = useSound(grassDig, { volume: 0.1 });

  const handleCardClick = (name) => {
    digSound();
    const hasAlreadyBeenClicked = clickedItems.current.includes(name);
    if (hasAlreadyBeenClicked) {
      setGameStatus("Game Over");
      checkIfHighscore();
    } else if (currentRound === minecraftItems.length) {
      setGameStatus("Won");
      checkIfHighscore();
    } else {
      setCurrentRound(currentRound + 1);
      clickedItems.current.push(name);
      updateScore();
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
          Easy: 6,
          Medium: 12,
          Hard: 18,
        };
        let blockLimit = blockLimitBasedOnDifficulty[gameSettings.difficulty];

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
  }, [gameSettings.difficulty]);

  if (gameStatus === "Playing") {
    return (
      <>
        <div className="score-and-round-container">
          <div className="score-board">
            <ScoreBoard gameSettings={gameSettings} />
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
                handleCardClick={handleCardClick}
                gameSettings={gameSettings}
              />
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      {gameStatus === "Won" ? (
        <GameWon
          gameSettings={gameSettings}
          handleGameModeChange={handleGameModeChange}
        />
      ) : (
        <GameOver
          gameSettings={gameSettings}
          handleGameModeChange={handleGameModeChange}
        />
      )}
    </>
  );
}
