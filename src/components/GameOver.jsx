import SplashText from "./SplashText";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";

import { hurtSound } from "../assets/sound/sounds";
import useSound from "use-sound";
import { useEffect } from "react";

import "../styles/gameover.css";

export default function GameOver({
  currentScore,
  currentHighScore,
  handleGameModeChange,
}) {
  const [gameOverSound] = useSound(hurtSound, { volume: 0.1 });

  useEffect(() => gameOverSound(), [gameOverSound]);

  return (
    <>
      <div className="game-over-container">
        <SplashText customText="Game Over :(" />
        <ScoreBoard
          currentScore={currentScore}
          currentHighScore={currentHighScore}
        />
        <Button
          btnText="Try Again?"
          handleClick={() => {
            handleGameModeChange("Singleplayer");
          }}
        ></Button>
        <Button
          btnText="Quit"
          handleClick={() => {
            handleGameModeChange("Titlescreen");
          }}
        ></Button>
      </div>
    </>
  );
}
