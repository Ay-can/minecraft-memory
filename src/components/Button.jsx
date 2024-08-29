import { buttonClick } from "../assets/sound/sounds";

import useSound from "use-sound";
import "../styles/button.css";

export default function Button({ btnText }) {
  const [btnClickSound] = useSound(buttonClick, { volume: "0.3" });

  return (
    <button type="button" onClick={btnClickSound}>
      {btnText}
    </button>
  );
}