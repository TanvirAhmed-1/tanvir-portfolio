import img1 from "../assets/img1.jpg";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black bg-opacity-80 fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={img1} alt="Tanvir" className="w-10 h-10 rounded-full" />
          <h1 className="text-white text-lg font-bold">
            <span className="text-purple-500">&lt;</span>Tanvir
            <span className="text-purple-500">/</span>Ahmed
            <span className="text-purple-500">&gt;</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-purple-400 transition">
            <a href="#home">HOME</a>
          </li>
          <li className="hover:text-purple-400 transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-400 transition">
            <a href="#project">Project</a>
          </li>
          <li className="hover:text-purple-400 transition">
            <a href="#skill">Skills</a>
          </li>
          <li className="hover:text-purple-400 transition">
            <a href="#Education">Education</a>
          </li>
          <li className="hover:text-purple-400 transition">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="lg:hidden bg-black bg-opacity-95 px-4 pb-4 pt-2 space-y-3 text-gray-200 text-base font-medium">
          <li className="hover:text-purple-400">
            <a href="#home" onClick={() => setIsOpen(false)}>
              HOME
            </a>
          </li>
          <li className="hover:text-purple-400">
            <a href="#Education" onClick={() => setIsOpen(false)}>
              Education
            </a>
          </li>
          <li className="hover:text-purple-400">
            <a href="#resume" onClick={() => setIsOpen(false)}>
              Resume
            </a>
          </li>
          <li className="hover:text-purple-400">
            <a href="#Portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
          </li>
          <li className="hover:text-purple-400">
            <a href="#Contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
