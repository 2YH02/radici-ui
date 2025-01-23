import { NavLink, useLocation } from "react-router";
import { borderMainColor, type ComponentRoute } from "../../App";
import cn from "../../utils/cn";
import Text from "../text/text";

const SideBar = ({ componentsUrl }: { componentsUrl: ComponentRoute[] }) => {
  const location = useLocation();

  return (
    <nav className={cn("p-3 overflow-auto min-w-48 border-r", borderMainColor)}>
      <div className="flex flex-col">
        {componentsUrl.map((component) => {
          return (
            <NavLink
              key={component.name}
              to={component.path}
              className={cn(
                location.pathname ===
                  `/${
                    component.name.charAt(0).toLowerCase() +
                    component.name.slice(1)
                  }` && "bg-gray-200 dark:bg-[#333]",
                "px-2 py-1 mb-1 rounded-md hover:bg-gray-200 hover:dark:bg-[#333]"
              )}
            >
              <Text>{component.name}</Text>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default SideBar;
