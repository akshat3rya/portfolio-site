import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

function getTime() {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
}

export default function TopBar() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="top-bar">
      <span className="top-bar-mark">//</span>

      <div className="top-bar-clock">
        <span className="status-dot" aria-hidden="true" />
        <span>{time} IST</span>
      </div>

      <div className="top-bar-right">
        <a
          href="mailto:akshat3rya@gmail.com"
          className="top-bar-contact"
        >
          <Mail size={14} />
          <span>&middot; akshat3rya@gmail.com</span>
        </a>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
