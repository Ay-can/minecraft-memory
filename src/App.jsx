import { useEffect, useState } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";
import Background from "./components/Background";
import GameBoard from "./components/GameBoard";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";
import DifficultyScreen from "./components/DifficultyScreen";
import SplashText from "./components/SplashText";

function App() {
  const [gameMode, setGameMode] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });

  const handleTitleScreenClick = (e) => {
    setGameMode(e.target.innerText);
  };

  const handleDifficultyClick = (e) => {
    setGameMode("");
    setDifficulty(e.target.innerText);
  };

  //set Background music
  useEffect(() => {
    const key = bgMusic();

    return () => {
      clearInterval(key);
      stop();
    };
  }, [bgMusic, stop]);

  if (gameMode === "Singleplayer") {
    return (
      <>
        <Background />
        <DifficultyScreen handleDifficultyClick={handleDifficultyClick} />
      </>
    );
  }

  if (difficulty === "Easy") {
    return (
      <>
        <Background />
        <div className="difficulty-splash-container">
          <SplashText customText="The rules are simple" />
          <SplashText customText="Don't click on the same card twice!" />
        </div>
        <GameBoard difficulty={difficulty} />
      </>
    );
  }

  return (
    <>
      <Background />
      <TitleScreen handleTitleScreenClick={handleTitleScreenClick} />
    </>
  );
}

export default App;
