import { Route, Routes } from "react-router";
import Header from "./components/common/header";
import SideBar from "./components/common/side-bar";
import BadgeExample from "./components/pages/badge/badge-example";
import ButtonExample from "./components/pages/button/button-example";
import Home from "./components/pages/home/home";
import InputExample from "./components/pages/input/input-example";
import SwitchExample from "./components/pages/switch/switch-example";
import TabsExample from "./components/pages/tabs/tabs-example";
import TextExample from "./components/pages/text/text-example";
import cn from "./utils/cn";
import CarouselExample from "./components/pages/carousel/carousel-example";

export const borderMainColor =
  "border-solid border-gray-300 dark:border-[#333]";

export interface ComponentRoute {
  name: string;
  path: string;
  element: React.ReactElement;
}

const componentsUrl: ComponentRoute[] = [
  { name: "Text", path: "/text", element: <TextExample /> },
  { name: "Button", path: "/button", element: <ButtonExample /> },
  { name: "Switch", path: "/switch", element: <SwitchExample /> },
  { name: "Input", path: "/input", element: <InputExample /> },
  { name: "Tabs", path: "/tabs", element: <TabsExample /> },
  { name: "Badge", path: "/badge", element: <BadgeExample /> },
  { name: "Carousel", path: "/carousel", element: <CarouselExample /> },
];

function App() {
  return (
    <div
      className={cn(
        "h-dvh overflow-hidden max-w-[1200px] mx-auto border-l border-r",
        borderMainColor
      )}
    >
      <Header />
      <div className="flex pt-14 h-[calc(100%)]">
        <SideBar componentsUrl={componentsUrl} />
        <div className="overflow-auto grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {componentsUrl.map((component) => {
              return (
                <Route
                  key={component.name}
                  path={component.path}
                  element={component.element}
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
