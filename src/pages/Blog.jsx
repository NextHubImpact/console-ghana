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
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
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
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
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
          img: progImg1,
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
          img: progImg2,
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
          img: progImg3,
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
          img: progImg2,
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
          img: progImg3,
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
    <div className="my-12 mx-12">
    <div className="flex flex-col justify-center items-center ">
       <iv className=" pt-12 lg:">
           <h2 className=" mb-14 text-center font-bold text-[24px] text-red-700 lg:text-[48px]">
             Blog
           </h2>
       </iv>
        
        <div className=" flex items-cente justify-cente">
     
        <div className=" flex flex-col items-center text-w justify-center  mb-14 gap-8">
     {blogData.map((val, index) => {
       const {img, title, author, detail, date , icons } = val;
       return (
         <div key={index} className="w-[85%] flex items-cente">
            <div className=" w-[35%]">
            <img src={img} className="" alt="" />   
              </div>              
            <div className="my- flex flex-col justify- border border-[gray]  px-8 py-4  gap-6">
            <div className="flex  text-[16px] text-[gray] justify-start items-center gap-2 py-">
           <span className="flex items-center gap-2">{icons.authorIcon} {author}</span>
            <span className="flex items-center gap-2">{icons.dateIcon} {date}</span>              
           </div>
           <div className="">
           <h2 className="mb-4 font-bold uppercase  text-wrap">{title}</h2>
           <p className='mb-6 text-[gray]'>{detail}</p>
           {/* <button className='uppercase bg-[#faaf40] px-3 py-2 text-black rounded'>read more</button> */}
           </div>
           
            </div>
         </div>
       );
     })}
   </div>

      </div>
       
    </div>
    <div className="mx-12">
      <h1 className='text-[18px] font-semibold  border-b w-[] mb-8 pb-4 '>Latest</h1>
    <div className=" flex  items-center text-w justify-center  mb-14 gap-4">
     {latestblogData.map((val, index) => {
       const {img, title, author, detail, date , icons } = val;
       return (
         <div key={index} className="w-[25%] border p-2 flex flex-col justify-center items-center">
            <div className=" w-[%]">
            <img src={img} className="" alt="" />   
              </div>              
            <div className="my- flex flex-col justify-between items-cente  border-[gray]  px- py-2  gap-2">
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
