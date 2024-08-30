import "../styles/gamecard.css";

export default function GameCard({ name, img, handleClick }) {
  return (
    <>
      <div className="card" onClick={() => handleClick(name)}>
        <p>{name}</p>
        <img src={img} alt="" />
      </div>
    </>
  );
}
