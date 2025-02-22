import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { borderMainColor } from "../../App";
import cn from "../../utils/cn";
import Text from "../text/text";

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
    <header
      className={cn("fixed top-0 left-0 w-full h-14 border-b", borderMainColor)}
    >
      <div
        className={cn(
          "flex  items-center px-4 max-w-[1200px] mx-auto h-full border-l border-r",
          borderMainColor
        )}
      >
        <NavLink to={"/"}>
          <Text>RadiciUI</Text>
        </NavLink>
        <div className="grow" />
        <button onClick={handleDarkMode}>
          <Text>Dark Mode {darkMode ? "On" : "Off"}</Text>
        </button>
      </div>
    </header>
  );
};

export default Header;
