import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5'
import lightLogo from '../assets/logo/rcc-logo.jpeg'

const Sidebar = ({}) => {
    const [idebar,  setIdebar] = useState(false)

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



  return (
    <aside id='sidebar'>
       <nav className='absolute w-[100%] bg-white left-0 top-20 shadow  rounded-md h-[60vh] ' >
 
         <ul className=' flex-1'>     
            {SidebarData.map((item, index) => {
                return ( <li key={index} className='flex flex-row gap- p-2'>
                      <Link to={item.path} className='font-semibold w-full flex items-center justify-between p-2 '>
                         <span  onClick={() => } >{item.title}</span>
                    </Link>
                 </li>)
            })}
         </ul>
       </nav>
      
    </aside>
  )
}

export default Sidebar
