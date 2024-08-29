import { useEffect, useState } from "react";
import { minecraftCherryBg, minecraftRainBg } from "../assets/videos/videos";
import { minecraftLogo } from "../assets/images/images";

import "../styles/titlescreen.css";
import SplashText from "./SplashText";
import Footer from "./Footer";
import Button from "./Button";

export default function TitleScreen({ handleClick }) {
  const [currentBg, setCurrentBg] = useState("");

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
        <div className="big-buttons">
          <Button btnText="Singleplayer" handleClick={handleClick} />
          <Button btnText="Multiplayer" handleClick={handleClick} />
          <Button btnText="Minecraft Realms" handleClick={handleClick} />
        </div>

        <div className="small-buttons">
          <Button btnText="Options" handleClick={handleClick} />
          <Button btnText="Quit Game" handleClick={handleClick} />
        </div>
        <Footer />
      </div>
    </>
  );
}
