import { useEffect, useState } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";
import Background from "./components/Background";
import GameBoard from "./components/GameBoard";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";
import DifficultyScreen from "./components/DifficultyScreen";

function App() {
  const [gameSettings, setGameSettings] = useState({
    gameMode: "Titlescreen",
    difficulty: "",
    currentScore: 0,
    currentHighScore: 0,
  });
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });

  const handleTitleScreenClick = (e) => {
    setGameSettings({
      ...gameSettings,
      difficulty: "",
      gameMode: e.target.innerText,
    });
  };

  const handleDifficultyClick = (e) => {
    setGameSettings({
      ...gameSettings,
      difficulty: e.target.innerText,
      gameMode: "",
      currentScore: 0,
    });
  };

  const handleDifficulty = (difficulty) => {
    setGameSettings({ ...gameSettings, difficulty });
  };

  const handleGameModeChange = (gameMode) => {
    setGameSettings({ ...gameSettings, difficulty: "", gameMode });
  };

  const handleScore = () => {
    setGameSettings((prevSettings) => {
      return { ...prevSettings, currentScore: prevSettings.currentScore + 1 };
    });
  };

  const handleHighScore = (currentHighScore) => {
    setGameSettings((prevSettings) => {
      return { ...prevSettings, currentHighScore };
    });
  };

  const checkIfHighscore = () => {
    if (gameSettings.currentScore > gameSettings.currentHighScore) {
      handleHighScore(gameSettings.currentScore);
    }
  };

  //set Background music
  useEffect(() => {
    bgMusic();

    return () => {
      stop();
    };
  }, [bgMusic, stop]);

  if (gameSettings.difficulty) {
    return (
      <>
        <Background />
        <GameBoard
          gameSettings={gameSettings}
          handleDifficulty={handleDifficulty}
          handleGameModeChange={handleGameModeChange}
          updateScore={handleScore}
          updateHighScore={handleHighScore}
          checkIfHighscore={checkIfHighscore}
        />
      </>
    );
  }

  return (
    <>
      <Background />
      {gameSettings.gameMode === "Titlescreen" ? (
        <TitleScreen handleTitleScreenClick={handleTitleScreenClick} />
      ) : (
        <DifficultyScreen handleDifficultyClick={handleDifficultyClick} />
      )}
    </>
  );
}

export default App;
