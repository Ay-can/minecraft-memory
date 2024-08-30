import { useEffect, useState } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";
import Background from "./components/Background";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";
import DifficultyScreen from "./components/DifficultyScreen";

function App() {
  const [gameMode, setGameMode] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });

  const handleTitleScreenClick = (e) => {
    setGameMode(e.target.innerText);
  };

  const handleDifficultyClick = (e) => {
    console.log(e.target.innerText);
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

  return (
    <>
      <Background />
      <TitleScreen handleTitleScreenClick={handleTitleScreenClick} />
    </>
  );
}

export default App;
