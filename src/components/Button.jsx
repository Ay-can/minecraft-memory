import { buttonClick } from "../assets/sound/sounds";

import useSound from "use-sound";
import "../styles/button.css";

export default function Button({ btnText, handleClick }) {
  const [btnClickSound] = useSound(buttonClick, { volume: "0.3" });

  const doSomething = (e) => {
    handleClick(e);
    btnClickSound();
  };

  return (
    <button type="button" onClick={(e) => doSomething(e)}>
      {btnText}
    </button>
  );
}
