import React, {useState} from 'react'
import lightLogo from '../assets/logo/logo-white.png'

import { IoMenu , IoClose} from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';

import Sidebar from './Sidebar';



const Navbar = ({}) => {
    const [sidebar,  setSidebar] = useState(false);
    const [closeMenu, setClosemenu] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const showSidebar = () => {
      setSidebar(!sidebar)
      setClosemenu(!closeMenu);
    };

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

        <div className="">
        <img className='w-[20%] ' src={lightLogo} alt="" />
        </div>
  
        {
          sidebar ?  <Sidebar/> :
          ''
        }
        
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
