import { useState } from "react";
import "../styles/scoreboard.css";

export default function ScoreBoard({ currentScore, currentHighScore }) {
  return (
    <>
      <div className="score-board-container">
        <p>Current Score [ {currentScore} ]</p>
        <p>Current HighScore [ {currentHighScore} ]</p>
      </div>
    </>
  );
}
