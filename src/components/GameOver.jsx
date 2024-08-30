import SplashText from "./SplashText";
import Button from "./Button";

export default function GameOver({ gameStatus, handleStatusChange }) {
  return (
    <>
      <div className="game-over-container">
        <SplashText customText="Game Over :(" />
        <Button btnText="Try Again?"></Button>
        <Button
          btnText="Quit"
          handleClick={() => handleStatusChange("Not Playing")}
        ></Button>
      </div>
    </>
  );
}
