import { useEffect, useState } from "react";
import ButtonList from "./components/example/button-list";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className="bg-white dark:bg-[#111]">
      <button onClick={handleDarkMode}>
        다크모드 {darkMode ? "on" : "off"}
      </button>
      <ButtonList />
    </div>
  );
}

export default App;
