import { useEffect, useState } from "react";
import { minecraftCherryBg, minecraftRainBg } from "../assets/videos/videos";
import mogCity from "../assets/music/C418-mog.mp3";
import useSound from "use-sound";

export default function TitleScreen() {
  const [currentBg, setCurrentBg] = useState("");
  const [bgMusic, { stop }] = useSound(mogCity, { volume: "0.1" });

  const randomBg = () => {
    const bgOptions = [minecraftCherryBg, minecraftRainBg];
    const selectBg = bgOptions[Math.floor(Math.random() * bgOptions.length)];

    setCurrentBg(selectBg);
  };

  // set Background image
  useEffect(() => {
    const key = randomBg();
    return () => clearInterval(key);
  }, []);

  useEffect(() => {
    const key = bgMusic();

    return () => {
      clearInterval(key);
      stop();
    };
  }, [bgMusic, stop]);

  return (
    <>
      <video
        className="title-screen-background"
        autoPlay
        muted
        loop
        src={currentBg}
        type="video/mp4"
      ></video>
    </>
  );
}
