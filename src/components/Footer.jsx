import { useEffect, useState } from "react";
import SplashText from "./SplashText";

import "../styles/footer.css";

export default function Footer() {
  const [mcProfilePic, setMcProfilePic] = useState("");

  // fetch my current mc profile pic
  useEffect(() => {
    fetch("https://mineskin.eu/helm/ACN0_0/100.png", { mode: "cors" }).then(
      (response) => setMcProfilePic(response.url)
    );
  }, [mcProfilePic]);

  return (
    <div className="footer">
      <img src={mcProfilePic} alt="" />
      <a
        href="https://www.github.com/Ay-can"
        target="_blank noopener noreferer"
        className="footer-text credits"
      >
        <SplashText
          customText="Created By Ay-can"
          animationStyle={"splash-animation-straight"}
        />
      </a>
    </div>
  );
}
