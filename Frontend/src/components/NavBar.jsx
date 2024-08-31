import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="text-white py-8 flex justify-between items-center pr-10 w-[calc(100%-240px)] fixed bg-[#101014] z-[10]">
      <div className="flex justify-start items-center gap-5">
        <p>
          <IoIosArrowBack className="font-bold text-xl text-[#969d9a]" />
        </p>
        <div className="bg-[#202024] text-[#969d9a] w-56 text-sm p-2 px-3 rounded-full font-medium flex justify-start items-center gap-3 hover:bg-[#404044]">
          <CiSearch className="text-[16px]" />
          Search store
        </div>
        <section>
          <ul className="flex justify-start items-center gap-10 px-3">
            <li>
              <NavLink to="/" className="text-[#969d9a] hover:text-white">
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse" className="text-[#969d9a] hover:text-white">
                Browse
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="text-[#969d9a] hover:text-white">
                News
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
      <div className="flex flex-row-reverse items-center justify-start w-full">
        <div className="flex flex-row-reverse gap-5 pl-5 border-l border-[#404044]">
          <div className="p-3 rounded-full text-lg bg-[#202024] hover:bg-[#404044]">
            <FaUser />
          </div>
          <div className="p-3 rounded-full text-lg bg-[#202024] hover:bg-[#404044]">
            <FaUserGroup />
          </div>
        </div>
        <section>
          <ul className="flex justify-start items-center gap-10 px-10">
            <li>
              <NavLink
                to="/wishlist"
                className="text-[#969d9a] hover:text-white"
              >
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="text-[#969d9a] hover:text-white">
                Cart
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
