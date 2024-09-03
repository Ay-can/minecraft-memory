import { useEffect, useState } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";
import Background from "./components/Background";
import GameBoard from "./components/GameBoard";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";
import DifficultyScreen from "./components/DifficultyScreen";

function App() {
  const [gameMode, setGameMode] = useState("Titlescreen");
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
    setDifficulty(e.target.innerText);
    setCurrentScore(0);
  };

  const handleDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  const handleGameModeChange = (newGameMode) => {
    setDifficulty("");
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

  if (difficulty) {
    return (
      <>
        <Background />
        <GameBoard
          difficulty={difficulty}
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
      {gameMode === "Titlescreen" ? (
        <TitleScreen handleTitleScreenClick={handleTitleScreenClick} />
      ) : (
        <DifficultyScreen handleDifficultyClick={handleDifficultyClick} />
      )}
    </>
  );
}

export default App;
