import SplashText from "./SplashText";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";

import { hurtSound } from "../assets/sound/sounds";
import useSound from "use-sound";
import { useEffect } from "react";

import "../styles/gameover.css";

export default function GameOver({ gameSettings, handleGameModeChange }) {
  const [gameOverSound] = useSound(hurtSound, { volume: 0.1 });

  useEffect(() => gameOverSound(), [gameOverSound]);

  return (
    <>
      <div className="game-over-container">
        <SplashText customText="Game Over :(" />
        <ScoreBoard gameSettings={gameSettings} />
        <Button
          btnText="Try Again?"
          handleClick={() => handleGameModeChange("")}
        ></Button>
        <Button
          btnText="Quit"
          handleClick={() => handleGameModeChange("Titlescreen")}
        ></Button>
      </div>
    </>
  );
}
