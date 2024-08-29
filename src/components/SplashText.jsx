import { useEffect, useState } from "react";
import "../styles/splashtext.css";

export default function SplashText({ customText }) {
  const [splashText, setSplashText] = useState("");

  const chooseSplashText = () => {
    const quotes = [
      "Odin Project Rocks!!!!!",
      "Don't Rush Learning!",
      "Thank you for creating Odin Project!!",
      "Shoutout to the maintainers and moderators!",
      "Keep Grinding!",
      "Learning === Making Silly Mistakes",
      "Sinan is cool! (my little cousin)",
      "Ay-can is cool! (he's literally me)",
      "React is awesome - ex hater",
      "Ai won't replace us!",
      "Are there computers in heaven?",
      "C++ > Rust ;)",
      "Competitive Programming is fun!",
      "I use Arch btw ;)",
      "Vscode is kinda cool - vim user",
      "Emacs is for crazy people, be warned!",
      "Don't forget to commit often",
      "Golang is kinda cool",
      "A king's lot: to do good and be damned",
    ];

    setSplashText(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    const key = chooseSplashText();

    return () => clearInterval(key);
  }, []);

  if (customText !== undefined) {
    return <p className="custom-splash-text">{customText}</p>;
  }

  return (
    <p className="splash-text" onClick={chooseSplashText}>
      {splashText}
    </p>
  );
}
