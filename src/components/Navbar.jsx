import React, {useState} from 'react'
import MediaQuery from 'react-responsive'
import lightLogo from '../assets/logo/logo-white.png'
import { Link } from 'react-router-dom';

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
          title: 'Home',
          path: '/',
      },
      {
          title: 'About',
          path: '/about',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl lg:bg-transparent'/>
      },
      {
          title: 'Admission',
          path: '/admission',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl lg:bg-transparent'/>
      },
      {
          title: 'Academics',
          path: '/academics',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl lg:bg-transparent'/>
      },
      {
          title: 'Campus Life',
          path: '/campuslife',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl lg:bg-transparent'/>
      },
      {
          title: 'Donate',
          path: '/donate',
      },
      {
          title: 'News',
          path: '/news'
      },
      {
          title: 'Contact',
          path: '/contact'
      },
      {
          title: 'Apply Here',
          path: '/applyhere'
      }
  ]


    // nav bg color change //

    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setColorchange(true);
      } else {
        setColorchange(false)
      };
    }
    
    window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={colorChange ? 'bg-black flex justify-between p-2 items-center top-0 fixed w-full ' : 'bg-inherit flex justify-between p-2 items-center top-0 fixed w-full '}>

        <div className="flex ">
        <img className='w-[20%] lg:w-[60%] xl:w-[50%]' src={lightLogo} alt="" />
        </div>
  
        {
          sidebar ?  <Sidebar/> :
          ''
        } 

        
      <nav className='hidden lg:block flex-1 ' >

        <ul className='lg: flex text-nowrap gap-2 py-2 items-center xl:p-4 '>     
            {SidebarData.map((item, index) => {
                return ( <li key={index} className='text-white px-2 xl:text-[20px] '>
                      <Link to={item.path} className=' w-full flex items-center justify-between  border-b border-black lg: border-none'>
                        <span >{item.title}</span>
                        <span className='text-white'>{item.icon}</span>
                    </Link>
                </li>)
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
