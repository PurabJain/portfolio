import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div
      className="flex justify-between items-center h-[80px] w-full bg-[#131313] shadow-lg shadow-slate-800 opacity-90"
      style={{ position: "fixed", zIndex: 10 }}
    >
      {/* div is for text on left side */}
      <div className="light-gray-text flex justify-center place-items-center px-10">
        <img
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] mx-auto"
          src={logo}
          alt="initials"
        />
        {/* <div className="h-[100px] w-[100px]" style={{position:'fixed', zIndex:99, backgroundImage: `url(${initials})`}}></div> */}
      </div>

      {/* div for right side - desktop */}
      <div className="hidden md:flex flex-row space-x-10 light-gray-text justify-center place-items-center px-20">
        <div className="navbar-option font-bold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </div>
        <div className="navbar-option font-bold">
        <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </div>
        <div className="navbar-option font-bold">
        <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </div>
        <div className="navbar-option font-bold">
        <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </div>
        <div className="navbar-option font-bold">
        <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </div>
        <div className="navbar-option font-bold">
        <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      </div>

      <div
        onClick={handleNav}
        className="md:hidden z-10 px-10 transition-transform"
      >
        {!nav ? (
          <FaBars color="white" size={20} />
        ) : (
          <FaTimes color="white" size={20} />
        )}
      </div>

      {/* div for right side - mobile */}
      <div
        className={`${
          nav ? "translate-x-0" : "-translate-x-full"
        } md:hidden absolute top-0 left-0 w-[50%] h-screen bg-black bg-opacity-90 transition-all duration-500 flex flex-col justify-center items-center`}
      >
        <div className="option-container w-[80%] flex justify-center place-items-center">
          <div className="navbar-option py-5 font-bold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          </div>
        </div>
        <div className="option-container w-[80%] flex justify-center place-items-center">
          <div className="navbar-option py-5 font-bold">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          </div>
        </div>
        <div className="option-container w-[80%] flex justify-center place-items-center">
          <div className="navbar-option py-5 font-bold">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
          </div>
        </div>
        <div className="option-container w-[80%] flex justify-center place-items-center">
          <div className="navbar-option py-5 font-bold">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          </div>
        </div>
        <div className="option-container w-[80%] flex justify-center place-items-center">
          <div className="navbar-option py-5 font-bold">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          </div>
        </div>
        <div className="flex justify-center place-items-center">
          <div className="navbar-option py-5 font-bold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
