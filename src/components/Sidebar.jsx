import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5'
import lightLogo from '../assets/logo/rcc-logo.jpeg'

const Sidebar = ({showSidebar}) => {
    // const [idebar,  setIdebar] = useState(false);

    // const hide = () => {
    //     setIdebar(!idebar)
    // }

  const sidebarData = [
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
      path: "/blog",
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
    <aside onClick={showSidebar}  id='sidebar'>
       <nav className='absolute w-[100%] bg-white  px-4 left-0 top-20  drop-shadow-2xl duration-700 rounded-md h-[80vh] ' >
           
         <ul className=' flex-1'>     
            {sidebarData.map((item, index) => {
                return ( <li key={index} className='flex flex-row gap- p-2'>
                      <Link to={item.path} onClick={showSidebar}  className='font-semibold w-full flex items-center justify-between p-2 '>
                         <span onClick={showSidebar} >{item.title}</span>
                    </Link>
                 </li>)
            })}
         </ul>
       </nav>
      
    </aside>
  )
}

export default Sidebar
