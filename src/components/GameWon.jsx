import SplashText from "./SplashText";
import ScoreBoard from "./ScoreBoard";
import Button from "./Button";

import "../styles/gamewon.css";

export default function GameWon({ gameSettings, handleGameModeChange }) {
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
