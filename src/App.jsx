import { useEffect, useState } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";
import Background from "./components/Background";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";

function App() {
  const [gameMode, setGameMode] = useState("");
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });

  const handleTitleScreenClick = (e) => {
    console.log(e.target.innerText);
    setGameMode(e.target.innerText);
  };

  //set Background music
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
        <Background />
        <p>Time to play</p>
      </>
    );
  }

  return (
    <>
      <Background />
      <TitleScreen handleTitleScreenClick={handleTitleScreenClick} />
    </>
  );
}

export default App;
