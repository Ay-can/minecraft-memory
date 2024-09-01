import SplashText from "./SplashText";
import Button from "./Button";

import ScoreBoard from "./ScoreBoard";

export default function GameOver({
  currentScore,
  currentHighScore,
  handleGameModeChange,
}) {
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
          handleClick={() => handleGameModeChange("Singleplayer")}
        ></Button>
        <Button
          btnText="Quit"
          handleClick={() => handleGameModeChange("Titlescreen")}
        ></Button>
      </div>
    </>
  );
}
