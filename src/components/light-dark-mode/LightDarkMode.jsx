import UseLocalStorage from "./UseLocalStorage";
import "./theme.css";

function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // console.log(theme);
  return (
    <div data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
