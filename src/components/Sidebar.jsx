import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5'
import lightLogo from '../assets/logo/logo-black.png'

const Sidebar = ({}) => {
    const [sidebar,  setSidebar] = useState(false)

  const showSidebar = () => {setSidebar(!sidebar)};

  const SidebarData = [
      {
          title: 'Home',
          path: '/',
      },
      {
          title: 'About',
          path: '/about',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl'/>
      },
      {
          title: 'Admission',
          path: '/admission',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl'/>
      },
      {
          title: 'Academics',
          path: '/academics',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl'/>
      },
      {
          title: 'Campus Life',
          path: '/campuslife',
          icon: <MdOutlineKeyboardArrowDown className='bg-black text-2xl'/>
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



  return (
    <aside id='sidebar'>
       <nav className='nav-menu  ' >
 
       <div className="flex justify-between  p-2 items-center  ">
                <img className='w-[40%]' src={lightLogo} alt="logo" />
                {/* <IoCloseCircle className='text-2xl' onClick={showSidebar} /> */}
            </div>

         <ul className=' flex-1'>     
            {SidebarData.map((item, index) => {
                return ( <li key={index} className='flex flex-row px-4'>
                      <Link to={item.path} className='bg- w-full flex items-center justify-between p-2 border-b border-black'>
                         <span >{item.title}</span>
                         <span className='text-white'>{item.icon}</span>
                    </Link>
                 </li>)
            })}
         </ul>
       </nav>
      
    </aside>
  )
}

export default Sidebar
