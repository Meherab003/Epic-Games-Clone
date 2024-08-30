import { FaTag } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { SiUnrealengine } from "react-icons/si";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="text-white flex lg:flex-col items-center justify-start lg:h-screen lg:px-3 lg:py-7 gap-6">
      <div>
        <img
          className="w-10 lg:w-12"
          src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png"
          alt="Logo- Epic Games"
        />
      </div>
      <nav className="flex lg:flex-col items-center justify-start gap-1">
        <NavLink
          to="/"
          className="w-full text-[#78787a] font-medium flex items-center justify-center gap-5 rounded-lg px-14 py-4 hover:text-white hover:bg-[#343437]"
        >
          <FaTag className="text-xl" /> Store
        </NavLink>
        <NavLink to='/library' className="w-full text-[#78787a] font-medium flex items-center justify-center gap-5 rounded-lg px-14 py-4 hover:text-white hover:bg-[#343437]">
          <PiSquaresFourFill className="text-3xl" /> Store
        </NavLink>
        <NavLink to='/unreal_engine' className="w-full text-[#78787a] font-medium flex items-center justify-center gap-5 rounded-lg px-14 py-4 hover:text-white hover:bg-[#343437]">
          <SiUnrealengine className="text-2xl" /> Store
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
