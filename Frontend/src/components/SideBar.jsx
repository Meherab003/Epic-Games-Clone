import { FaTag } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { SiUnrealengine } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed text-white flex lg:flex-col items-center justify-start lg:h-screen lg:px-3 lg:py-7 gap-6 w-56">
      <Link to='/'>
        <img
          className="w-10 lg:w-12"
          src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png"
          alt="Logo- Epic Games"
        />
      </Link>
      <nav className="flex lg:flex-col items-center justify-start gap-1">
        <NavLink
          to="/"
          className="w-full text-[#78787a] font-medium flex items-center justify-start gap-5 rounded-lg pl-6 pr-22 py-4 hover:text-white hover:bg-[#343437] text-start"
        >
          <FaTag className="text-xl" /> Store
        </NavLink>
        <NavLink to='/library' className="w-full text-[#78787a] font-medium flex items-center justify-start gap-5 rounded-lg px-4 py-4 hover:text-white hover:bg-[#343437] text-start">
          <PiSquaresFourFill className="text-3xl" /> Library
        </NavLink>
        <NavLink to='/unreal_engine' className="w-full text-[#78787a] font-medium flex items-center justify-start gap-5 rounded-lg px-5  py-4 hover:text-white hover:bg-[#343437] text-start">
          <SiUnrealengine className="text-2xl" /> Unreal Engine
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
