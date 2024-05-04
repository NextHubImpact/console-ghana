import React, {useState} from 'react'
import lightLogo from '../assets/logo/logo-white.png'

import { IoMenu } from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';

import Sidebar from './Sidebar';



const Navbar = ({}) => {
    const [sidebar,  setSidebar] = useState(false)

    const showSidebar = () => {setSidebar(!sidebar)};
   

  return (
    <div className='bg-inherit flex justify-between p-2 items-center top-0 fixed w-full '>

        <div className="">
        <img className='w-[20%]' src={lightLogo} alt="" />
        </div>

     
        {
          sidebar ?  '' :
         <div className="">
            <Sidebar /> 
         </div>
        }
     
        
      <div className=" flex text-white items-center gap-4 text-2xl lg:hidden">
         <IoSearch/>
        <IoMenu onClick={showSidebar} />
      </div>

    </div>
  )
}

export default Navbar
