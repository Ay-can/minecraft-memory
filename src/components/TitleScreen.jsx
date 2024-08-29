import { useEffect, useState } from "react";
import { minecraftCherryBg, minecraftRainBg } from "../assets/videos/videos";
import { minecraftLogo } from "../assets/images/images";

import mogCity from "../assets/music/C418-mog.mp3";
import useSound from "use-sound";

import "../styles/titlescreen.css";
import SplashText from "./SplashText";
import Footer from "./Footer";

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
      <video
        className="title-screen-background"
        autoPlay
        muted
        loop
        src={currentBg}
        type="video/mp4"
      ></video>
      <div className="main">
        <div className="logo-container">
          <img className="logo" src={minecraftLogo} alt="" />
          <SplashText animationStyle="splash-animation-tilted" />
        </div>
        <Footer />
      </div>
    </>
  );
}
