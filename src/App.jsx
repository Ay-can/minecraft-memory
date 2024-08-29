import { useEffect, useState } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";

function App() {
  const [gameMode, setGameMode] = useState("");
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setGameMode(e.target.innerText);
  };

  //set bg music
  useEffect(() => {
    const key = bgMusic();

    return () => {
      clearInterval(key);
      stop();
    };
  }, [bgMusic, stop]);

  if (gameMode === "Singleplayer") {
    return (
      <>
        <p>Time to play</p>
      </>
    );
  }

  return (
    <>
      <TitleScreen handleClick={handleClick} />
    </>
  );
}

export default App;
