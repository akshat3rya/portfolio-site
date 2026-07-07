import { useEffect, useState } from "react";
import { Moon, Sun, BookOpen } from "lucide-react";

const themes = ["reading", "dark", "light"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("reading");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "reading";

    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function cycleTheme() {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }

  // Show the NEXT theme icon
  const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
  const nextTheme = themes[nextIndex];

  let icon;

  switch (nextTheme) {
    case "dark":
      icon = <Moon size={18} />;
      break;

    case "light":
      icon = <Sun size={18} />;
      break;

    default:
      icon = <BookOpen size={18} />;
  }

  return (
    <button
      className="theme-switcher"
      onClick={cycleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {icon}
    </button>
  );
}