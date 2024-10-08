import React from 'react'
import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";
import blog from '../assets/main/blog-img.jpeg'

import { MdAccountCircle, MdTimer } from "react-icons/md";

const Blog = () => {

    const blogData = [
        {
          img: blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
              dateIcon: <MdTimer/> 
          },
        },
      ];

    const latestblogData = [
        {
          img: blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed ...",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed ...",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed ...",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed ...",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img:  blog,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed ...",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },

      ];
  return (
    <section className="bg-[]">
    <div className="mx-2 my-12 xl:mx-12">
    <div className="flex flex-col justify-center items-center ">
       <iv className=" pt-12 lg:">
           <h2 className=" mb-14 text-center font-semibold text-[24px] lg:text-[48px]">
             Blog
           </h2>
       </iv>
        
        <div className=" flex items-cente justify-cente">
     
        <div className=" flex flex-col items-center text-w justify-center  mb-14 gap-8">
     {blogData.map((val, index) => {
       const {img, title, author, detail, date , icons } = val;
       return (
         <div key={index} className=" flex border  flex-col xl:w-[85%] xl:flex-row items-center ">
            <div className=" xl:w-[35%]">
            <img src={img} className="" alt="" />   
              </div>              
            <div className="my- flex flex-col justify p-2 xl:px-8 xl:py-4  gap-6">
            <div className="flex  xl:text-[16px] text-[gray] justify-start items-center gap-2 py-">
           <span className="flex items-center gap-2">{icons.authorIcon} {author}</span>
            <span className="flex items-center gap-2">{icons.dateIcon} {date}</span>              
           </div>
           <div className="">
           <h2 className="text-[14px] xl:mb-4 font-semibold uppercase  xl:text-wrap">{title}</h2>
           <p className='xl:mb-6 text-[gray]'>{detail}</p>
           {/* <button className='uppercase bg-[#faaf40] px-3 py-2 text-black rounded'>read more</button> */}
           </div>
           
            </div>
         </div>
       );
     })}
   </div>

      </div>
       
    </div>
    <div className="mx-2 xl:mx-12">
      <h1 className='text-[18px] font-semibold  border-b w-[] mb-8 pb-4 '>Latest</h1>
    <div className="flex flex-col   items-center text-w justify-ceter  mb-14 gap-4 xl:flex-row ">
     {latestblogData.map((val, index) => {
       const {img, title, author, detail, date , icons } = val;
       return (
         <div key={index} className="xl:w-[25%] order p-2 flex flex-col justify-cente items-center">
            <div className=" w-[%]">
            <img src={img} className="" alt="" />   
              </div>              
            <div className="my- flex flex-col justify-between items-centr  border-[gray]  px- py-2  gap-2">
            <div className="flex  text-[14px] text-[gray] justify-start items-center gap-2 py-">
           <span className="flex items-center flex-wrap gap-2">{icons.authorIcon} {author}</span>
            {/* <span className="flex items-center gap-2">{icons.dateIcon} {date}</span>               */}
           </div>
           <div className="">
           <h2 className="text-[14px] mb-2 font-semibold uppercase  text-wrap">{title}</h2>
           <p className='mb- text-[gray]'>{detail}</p>
           {/* <button className=' bg-[#faaf40] px-3 py-2 text-black rounded'>Read more</button> */}
           </div>
           
            </div>
         </div>
       );
     })}
   </div>
    </div>
    </div>

 </section>
  )
}

export default Blog
