import { useEffect, useState } from "react";
import { minecraftCherryBg, minecraftRainBg } from "../assets/videos/videos";

export default function TitleScreen() {
  const [currentBg, setCurrentBg] = useState("");

  const randomBg = () => {
    const bgOptions = [minecraftCherryBg, minecraftRainBg];
    const selectBg = bgOptions[Math.floor(Math.random() * bgOptions.length)];

    setCurrentBg(selectBg);
  };

  useEffect(() => {
    const key = randomBg();
    return () => clearInterval(key);
  }, []);

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
