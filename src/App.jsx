import { useEffect } from "react";

import "./App.css";
import TitleScreen from "./components/TitleScreen";

import { mogCity } from "./assets/music/songs";
import useSound from "use-sound";

function App() {
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });
  //set bg music
  useEffect(() => {
    const key = bgMusic();

    return () => {
      clearInterval(key);
      stop();
    };
  }, [bgMusic, stop]);

  return (
    <>
      <TitleScreen />
    </>
  );
}

export default App;
