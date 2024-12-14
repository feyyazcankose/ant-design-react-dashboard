import { useTheme } from "../theme/ThemeContext";

export function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header>
      {/* Existing header content */}
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
