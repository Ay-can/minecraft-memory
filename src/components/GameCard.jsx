import "../styles/gamecard.css";

export default function GameCard({ name, img, handleCardClick, difficulty }) {
  // resize cards based on difficulty

  return (
    <>
      <div className="card" onClick={() => handleCardClick(name)}>
        <p>{name}</p>
        <img className={difficulty.toLowerCase()} src={img} alt="" />
      </div>
    </>
  );
}
