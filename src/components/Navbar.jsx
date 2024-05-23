import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="..."
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
            <button className="text-black p-[6px]">Login</button>
            <button className="bg-[#22C55E] text-white md:px-4 md:py-2 px-2 py-1 rounded-md ">
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
