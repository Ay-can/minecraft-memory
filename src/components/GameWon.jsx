import SplashText from "./SplashText";
import ScoreBoard from "./ScoreBoard";
import Button from "./Button";

import "../styles/gamewon.css";
import { levelUp } from "../assets/sound/sounds";
import useSound from "use-sound";
import { useEffect } from "react";

export default function GameWon({ gameSettings, handleGameModeChange }) {
  const [levelUpSound, { stop }] = useSound(levelUp, { volume: 0.3 });

  useEffect(() => {
    levelUpSound();
    return () => stop();
  }, [levelUpSound]);

  return (
    <>
      <div className="game-won-container">
        <SplashText customText="Congrationlations!!!" />
        <ScoreBoard gameSettings={gameSettings} />
        <Button
          btnText="Try Again?"
          handleClick={() => {
            handleGameModeChange("");
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
