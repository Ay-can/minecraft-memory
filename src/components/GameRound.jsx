import "../styles/gameround.css";

export default function GameRound({ currentRound, totalRounds }) {
  return (
    <>
      <div className="game-round-container">
        <p>
          Round {currentRound} / {totalRounds}
        </p>
      </div>
    </>
  );
}
