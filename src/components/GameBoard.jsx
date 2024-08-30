import { useEffect, useState } from "react";

import GameCard from "./GameCard";
import GameOver from "./GameOver";
import SplashText from "./SplashText";

import "../styles/gameboard.css";

export default function GameBoard({
  gameStatus,
  difficulty,
  handleStatusChange,
}) {
  const [minecraftItems, setMinecraftItems] = useState([]);
  const clickedItems = [];

  const handleClick = (name) => {
    const hasAlreadyBeenClicked = clickedItems.includes(name);
    if (hasAlreadyBeenClicked) {
      handleStatusChange("Game Over");
    } else {
      clickedItems.push(name);
    }
  };

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
    // fetch minecraft blocks
    fetch("https://minecraft-api.vercel.app/api/blocks?limit=200", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setMinecraftItems(durstenFeldShuffle(response)));
  }, []);

  if (gameStatus !== "Game Over") {
    return (
      <>
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
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <GameOver handleStatusChange={handleStatusChange} />;
      </>
    );
  }
}
