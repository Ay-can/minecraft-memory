import { useRef } from "react";
import { minecraftCherryBg, minecraftRainBg } from "../assets/videos/videos";

export default function Background() {
  const bgOptions = [minecraftCherryBg, minecraftRainBg];
  const currentBg = useRef(
    bgOptions[Math.floor(Math.random() * bgOptions.length)]
  );

  return (
    <>
      <video
        className="title-screen-background"
        autoPlay
        muted
        loop
        src={currentBg.current}
        type="video/mp4"
      ></video>
    </>
  );
}
