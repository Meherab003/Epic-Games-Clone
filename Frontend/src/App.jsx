import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-start text-white">
      <SideBar />
      <div className="flex-1 px-10 pl-60">
        <NavBar />
        <div className="mt-28">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
