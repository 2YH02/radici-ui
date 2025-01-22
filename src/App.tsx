import { Route, Routes } from "react-router";
import Header from "./components/common/header";
import SideBar from "./components/common/side-bar";
import ButtonList from "./components/pages/button/button-list";
import Home from "./components/pages/home/home";

function App() {
  return (
    <div className="h-dvh overflow-hidden max-w-[1200px] mx-auto border-l border-r border-solid border-gray-300 dark:border-[#333]">
      <Header />
      <div className="flex pt-14 h-[calc(100%)]">
        <SideBar />
        <div className="overflow-auto grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button" element={<ButtonList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
