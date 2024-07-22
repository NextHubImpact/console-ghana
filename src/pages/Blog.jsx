import React from 'react'
import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";

import { MdAccountCircle, MdTimer } from "react-icons/md";

const Blog = () => {

    const blogData = [
        {
          img: progImg1,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: progImg2,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: progImg3,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
      ];
  return (
    <section className="bg-[#111]">
    <div className="my-12 mx-8">
    <div className="flex flex-col justify-center items-center ">
       <iv className=" pt-12 lg:">
           <h2 className=" mb-14 text-center font-bold text-[24px] text-red-700 lg:text-[48px]">
             Blog
           </h2>
       </iv>
        
        <div className=" flex items-center justify-center">
     
        <div className=" flex items-center text-white justify-center mb-14 gap-4">
     {blogData.map((val, index) => {
       const {img, title, author, date , icons } = val;
       return (
         <div key={index} className="w-[25%]  flex flex-col justify-center items-center">
           <img src={img} className="w-[%]" alt="" />                 
            <div className="my-8">
            <div className="flex justify-start items-center gap-4 py-2">
           <span className="flex items-center gap-2">{icons.authorIcon} {author}</span>
            <span className="flex items-center gap-2">{icons.dateIcon} {date}</span>              
           </div>
           <div className="my-">
           <h2 className="  text-wrap">{title}</h2>
           </div>
            </div>
         </div>
       );
     })}
   </div>

      </div>
       
    </div>
    </div>
 </section>
  )
}

export default Blog
