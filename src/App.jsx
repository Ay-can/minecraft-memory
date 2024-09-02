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
  const [currentScore, setCurrentScore] = useState(0);
  const [currentHighScore, setCurrentHighscore] = useState(0);

  const handleTitleScreenClick = (e) => {
    setDifficulty("");
    setGameMode(e.target.innerText);
  };

  const handleDifficultyClick = (e) => {
    setGameMode("");
    setGameStatus("Playing");
    setDifficulty(e.target.innerText);
    setCurrentScore(0);
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

  const handleScore = (score) => {
    setCurrentScore(score);
  };

  const handleHighScore = (highscore) => {
    setCurrentHighscore(highscore);
  };

  const checkNewHighScore = (currentScore, highScore) => {
    if (currentScore > highScore) {
      handleHighScore(currentScore);
    }
  };

  //set Background music
  useEffect(() => {
    bgMusic();

    return () => {
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
          handleScore={handleScore}
          handleHighScore={handleHighScore}
          currentScore={currentScore}
          currentHighScore={currentHighScore}
          checkNewHighScore={checkNewHighScore}
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
          handleScore={handleScore}
          handleHighScore={handleHighScore}
          currentScore={currentScore}
          currentHighScore={currentHighScore}
          checkNewHighScore={checkNewHighScore}
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
          handleScore={handleScore}
          handleHighScore={handleHighScore}
          currentScore={currentScore}
          currentHighScore={currentHighScore}
          checkNewHighScore={checkNewHighScore}
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
