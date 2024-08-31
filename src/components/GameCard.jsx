import "../styles/gamecard.css";

export default function GameCard({ name, img, handleClick, difficulty }) {
  // resize cards based on difficulty

  return (
    <>
      <div className="card" onClick={() => handleClick(name)}>
        <p>{name}</p>
        <img className={difficulty.toLowerCase()} src={img} alt="" />
      </div>
    </>
  );
}
