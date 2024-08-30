import Button from "./Button";
import SplashText from "./SplashText";
import "../styles/difficulty.css";

export default function DifficultyScreen({ handleDifficultyClick }) {
  return (
    <div className="difficulty-screen-container">
      <SplashText customText="Choose a difficulty" />
      <div className="difficulty-buttons">
        <Button btnText="Easy" handleClick={handleDifficultyClick}></Button>
        <Button btnText="Medium" handleClick={handleDifficultyClick}></Button>
        <Button btnText="Hard" handleClick={handleDifficultyClick}></Button>
      </div>
    </div>
  );
}
