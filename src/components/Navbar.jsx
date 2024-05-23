import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo-nav.svg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="md:py-0 py-4 px-4 lg:px-[9vw] xl:px-[7pw]">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="flex gap-2 items-center">
            <img
              className="cursor-pointer"
              width={94}
              src={logo}
              alt="flex logo"
            />
          </div>

          <div
            className={`nav-links duration-500 ${
              isMenuOpen ? "top-[0px]" : "top-[-100%]"
            } md:static absolute md:bg-transparent bg-white md:min-h-[80px] min-h-[60vh] left-0
             md:w-auto w-full flex items-center px-5`}
          >
            <p onClick={onToggleMenu}>
              <IoMdClose className="absolute top-5 right-4 text-3xl md:hidden block" />
            </p>

            <ul
              className="flex md:flex-row flex-col md:items-center md:gap-[48px] gap-8 text-[16px]
            font-medium text-gray-500 md:text-center text-left"
            >
              <li>
                <a className="" href="#">
                  Product
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6 md:text-sm text-xs">
            <button className="p-[6px] text-base text-[#556987] font-medium">
              Log In
            </button>
            <button className="bg-green-500 text-white md:px-4 md:py-2 px-2 py-1 rounded-md ">
              Sign Up
            </button>
            <CiMenuFries
              onClick={onToggleMenu}
              className="md:text-3xl text-2xl cursor-pointer md:hidden "
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
