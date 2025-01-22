import { NavLink, useLocation } from "react-router";
import cn from "../../utils/cn";

const components = ["button"];

const SideBar = () => {
  const location = useLocation();

  return (
    <nav className="p-3 overflow-auto min-w-48 border-r border-solid border-gray-300 dark:border-[#333]">
      <div className="flex flex-col">
        {components.map((component, i) => {
          return (
            <NavLink
              key={i}
              to={`/${component}`}
              className={cn(
                location.pathname === `/${component}` &&
                  "bg-gray-200 dark:bg-[#333]",
                "px-2 py-1 mb-1 rounded-md hover:bg-gray-200 hover:dark:bg-[#333]"
              )}
            >
              {component}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default SideBar;
