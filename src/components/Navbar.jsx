import React, { useState } from "react";
import MediaQuery from "react-responsive";

import rccLogo from '../assets/logo/rcc-logo.jpeg'
import rccLogo2 from '../assets/logo/rcc-logo2.png'

import { NavLink, Link } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";

const Navbar = ({}) => {
  const [sidebar, setSidebar] = useState(false);
  const [closeMenu, setClosemenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [media, SetMedia] = useState(false);
  // const [hide , setHide] = useState[false];

  const showSidebar = () => {
    setSidebar(!sidebar );
    setClosemenu(!closeMenu);
    // setHide(!hide)
    
  };

  const query = () => {
    SetMedia( document.body.style.backgroundColorb = 'black')
  };

  const SidebarData = [
    {
      id: "1",
      title: "Home",
      path: "/",
    },
    {
      id: "2",
      title: "About",
      path: "/about",
    },
    {
      id: "3",
      title: "Projects",
      path: "/projects",
    },
    {
      id: "4",
      title: "Blog",
      path: "/Blog",
    },
    {
      id: "5",
      title: "Contact",
      path: "/contact",
    },
    {
      id: "6",
      title: "Get Involve",
      path: "/getinvolve",
    },
  ];


  // nav bg color change //

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "bg-[#ffffff] shadow-xl  w-full duration-700 " : "bg-[#ffffff] duration-700 "}>
      <div className="flex mx-4 xl:mx-12 justify-between xl:p-4  items-center sticky top-0 z-10">
        <div className=" pl-4">
          <Link to='/'>
          <img
            className= { colorChange? 'bg-[#faaf40] duration-700 rounded  w-[28%] ' : "w-[28%] "}
            src={colorChange ? rccLogo : rccLogo}
            alt=""
          />
          </Link>        
        </div>

        {sidebar ? <Sidebar showSidebar={showSidebar} /> : ""}

        <nav className="hidden  lg:block w-[50%] ">
          <ul className="lg: flex text-nowrap gap-2 py-2  justify-between items-center xl:p-4 ">
            {SidebarData.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className={
                    colorChange
                      ? "text-black px-4 xl:text-[20px] font-semibold-[700] "
                      : "text-black px-4 xl:text-[20px] font-semibold-[700] "
                  }                
                >
                  <span
                    className={
                      index == 5 ? "bg-[#faaf40] p-2 text-white" : "bg-inherit"
                    }
                  >
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </ul>
        </nav>

        <div className=" flex text-black items-center gap-4 text-2xl lg:hidden">

          {closeMenu ? (
            <IoClose onClick={showSidebar} />
            
          ) : (
            <IoMenu onClick={showSidebar} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
