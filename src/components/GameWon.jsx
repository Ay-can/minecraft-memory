import SplashText from "./SplashText";
import ScoreBoard from "./ScoreBoard";
import Button from "./Button";

import "../styles/gamewon.css";

export default function GameWon({
  currentScore,
  currentHighScore,
  handleStatusChange,
  handleGameModeChange,
}) {
  return (
    <>
      <div className="game-won-container">
        <SplashText customText="Congrationlations!!!" />
        <ScoreBoard
          currentScore={currentScore}
          currentHighScore={currentHighScore}
        />
        <Button
          btnText="Try Again?"
          handleClick={() => {
            handleStatusChange("Playing");
            handleGameModeChange("Singleplayer");
          }}
        ></Button>
        <Button
          btnText="Quit"
          handleClick={() => {
            handleStatusChange("Not Playing");
            handleGameModeChange("Titlescreen");
          }}
        ></Button>
      </div>
    </>
  );
}
