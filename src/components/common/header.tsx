import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
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
    <header className="fixed top-0 left-0 w-full h-14 border-b border-solid border-gray-300 dark:border-[#333]">
      <div className="flex  items-center px-4 max-w-[1200px] mx-auto h-full border-l border-r border-solid border-gray-300 dark:border-[#333]">
        <NavLink to={"/"}>RadiciUI</NavLink>
        <div className="grow" />
        <button onClick={handleDarkMode}>
          다크모드 {darkMode ? "on" : "off"}
        </button>
      </div>
    </header>
  );
};

export default Header;
