import SplashText from "./SplashText";
import Button from "./Button";

export default function GameOver({
  gameStatus,
  handleStatusChange,
  difficulty,
  handleDifficulty,
  handleGameModeChange,
}) {
  return (
    <>
      <div className="game-over-container">
        <SplashText customText="Game Over :(" />
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
