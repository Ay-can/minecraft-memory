import { minecraftLogo } from "../assets/images/images";

import "../styles/titlescreen.css";
import SplashText from "./SplashText";
import Footer from "./Footer";
import Button from "./Button";

export default function TitleScreen({ handleTitleScreenClick }) {
  return (
    <>
      <div className="main">
        <div className="logo-container">
          <img className="logo" src={minecraftLogo} alt="" />
          <SplashText animationStyle="splash-animation-tilted" />
        </div>
        <div className="big-buttons">
          <Button btnText="Singleplayer" handleClick={handleTitleScreenClick} />
          <Button btnText="Multiplayer" handleClick={handleTitleScreenClick} />
          <Button
            btnText="Minecraft Realms"
            handleClick={handleTitleScreenClick}
          />
        </div>

        <div className="small-buttons">
          <Button btnText="Options" handleClick={handleTitleScreenClick} />
          <Button btnText="Quit Game" handleClick={handleTitleScreenClick} />
        </div>
        <Footer />
      </div>
    </>
  );
}
