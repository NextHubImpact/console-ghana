import React, {useState} from 'react'
import MediaQuery from 'react-responsive'
import lightLogo from '../assets/logo/rural-logo.png'
import darkLogo from '../assets/logo/logo-black.png'
import { NavLink, Link } from 'react-router-dom';

import { IoMenu , IoClose} from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Sidebar from './Sidebar';



const Navbar = ({}) => {
    const [sidebar,  setSidebar] = useState(false);
    const [closeMenu, setClosemenu] = useState(false);
    const [colorChange, setColorchange] = useState(false);
    const [media, SetMedia] = useState(false)

    const showSidebar = () => {
      setSidebar(!sidebar)
      setClosemenu(!closeMenu);
    };

    const query = () => {
      SetMedia(matchMedia(1024))
    }

    const SidebarData = [
      {
         id: '1',
          title: 'Home',
          path: '/',
      },
      {
        id: '2',
          title: 'About',
          path: '/about',
      },
      {
          title: 'Projects',
          path: '/projects',
      },
      {
          title: 'Blog',
          path: '/Blog'
      },
      {
          title: 'Contact',
          path: '/contact'
      },

  ]


    // nav bg color change //

    const changeNavbarColor = () => {
      if (window.scrollY >= 10) {
        setColorchange(true);
      } else {
        setColorchange(false)
      };
    }
    
    window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={colorChange ? 'bg-black flex justify-between p- items-center top-0 fixed w-full ' : 'bg-[#262261] bg-[#faaf40] flex justify-between p- items-center top-0 fixed w-full '}>

        <div className=" pl-4">
        <img className='w-[10%] bg-[white]  rounded-[50%] pl- lg:w-[10%] xl:w-[10%]' src={colorChange? lightLogo : lightLogo} alt="" />
        </div>
  
        {
          sidebar ?  <Sidebar/> :
          ''
        } 

        
      <nav className='hidden lg:block  ' >

        <ul className='lg: flex text-nowrap gap-2 py-2 items-center xl:p-4 '>     
            {SidebarData.map((item, index) => {
                return ( <NavLink to={item.path} key={index} className={colorChange? 'text-white px-2 xl:text-[20px] ' : 'text-white px-2 xl:text-[20px] ' }>
                        <span >{item.title}</span>                  
                    </NavLink>)
            })}
        </ul>
      </nav>
        
      <div className=" flex text-white items-center gap-4 text-2xl lg:hidden">
         <IoSearch/>
        
        {
          closeMenu ? <IoClose onClick={showSidebar}/>
          :  <IoMenu onClick={showSidebar} />
        }
      </div>

    </div>
  )
}

export default Navbar
