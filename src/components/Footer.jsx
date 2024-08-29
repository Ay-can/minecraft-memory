import { useEffect, useState } from "react";

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
        Created by Ay-can
      </a>
    </div>
  );
}
