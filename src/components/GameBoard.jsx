import { useEffect, useState } from "react";

import GameCard from "./GameCard";

import "../styles/gameboard.css";

export default function GameBoard({ difficulty }) {
  const [minecraftItems, setMinecraftItems] = useState([]);
  const clickedItems = [];

  const handleClick = (name) => {
    const hasAlreadyBeenClicked = clickedItems.includes(name);
    if (hasAlreadyBeenClicked) {
      console.log(hasAlreadyBeenClicked);
    } else {
      console.log("new entry");
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

  return (
    <>
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
}
