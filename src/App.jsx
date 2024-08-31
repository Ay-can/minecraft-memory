import { useEffect, useState } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";
import Background from "./components/Background";
import GameBoard from "./components/GameBoard";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";
import DifficultyScreen from "./components/DifficultyScreen";

function App() {
  const [gameMode, setGameMode] = useState("");
  const [gameStatus, setGameStatus] = useState("Not Playing");
  const [difficulty, setDifficulty] = useState("");
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });

  const handleTitleScreenClick = (e) => {
    setGameMode(e.target.innerText);
  };

  const handleDifficultyClick = (e) => {
    setGameMode("");
    setGameStatus("Playing");
    setDifficulty(e.target.innerText);
  };

  const handleStatusChange = (newStatus) => {
    setGameStatus(newStatus);
  };

  const handleDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  const handleGameModeChange = (newGameMode) => {
    setGameMode(newGameMode);
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
  } else if (gameMode === "Titlescreen") {
    return (
      <>
        <Background />
        <TitleScreen handleTitleScreenClick={handleTitleScreenClick} />
      </>
    );
  }

  if (difficulty === "Easy") {
    return (
      <>
        <Background />
        <GameBoard
          gameStatus={gameStatus}
          difficulty={difficulty}
          handleStatusChange={handleStatusChange}
          handleDifficulty={handleDifficulty}
          handleGameModeChange={handleGameModeChange}
        />
      </>
    );
  } else if (difficulty === "Medium") {
    return (
      <>
        <Background />
        <GameBoard
          gameStatus={gameStatus}
          difficulty={difficulty}
          handleStatusChange={handleStatusChange}
          handleDifficulty={handleDifficulty}
          handleGameModeChange={handleGameModeChange}
        />
      </>
    );
  } else if (difficulty === "Hard") {
    return (
      <>
        <Background />
        <GameBoard
          gameStatus={gameStatus}
          difficulty={difficulty}
          handleStatusChange={handleStatusChange}
          handleDifficulty={handleDifficulty}
          handleGameModeChange={handleGameModeChange}
        />
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
