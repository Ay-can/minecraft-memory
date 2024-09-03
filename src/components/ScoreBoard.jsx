import "../styles/scoreboard.css";

export default function ScoreBoard({ gameSettings }) {
  if (gameSettings !== undefined) {
    return (
      <>
        <div className="score-board-container">
          <p>Current Score [ {gameSettings.currentScore} ]</p>
          <p>Current HighScore [ {gameSettings.currentHighScore} ]</p>
        </div>
      </>
    );
  }
}
