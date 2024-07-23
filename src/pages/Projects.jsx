import React from 'react'
import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";
import whoweare from "../assets/img-icons/whoweare.webp"
import { IoArrowForward } from "react-icons/io5";

const Projects = () => {

    const highlightCard = [
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
           arrowIcon: <IoArrowForward className="text-red-700" />,
           whoweareIcon: whoweare,
          }, 
          img: progImg1,
        },
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
           arrowIcon: <IoArrowForward className="text-red-700" />,
           whoweareIcon: whoweare,
          }, 
          img: progImg1,
        },
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
            arrowIcon: <IoArrowForward className="text-red-700" />,
            whoweareIcon: whoweare,
           }, 
          img: progImg2,
        },
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
            arrowIcon: <IoArrowForward className="text-red-700" />,
            whoweareIcon: whoweare,
           }, 
          img: progImg3
        },
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
            arrowIcon: <IoArrowForward className="text-red-700" />,
            whoweareIcon: whoweare,
           }, 
          img: progImg2,
        },
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
            arrowIcon: <IoArrowForward className="text-red-700" />,
            whoweareIcon: whoweare,
           }, 
          img: progImg3
        },
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
            arrowIcon: <IoArrowForward className="text-red-700" />,
            whoweareIcon: whoweare,
           }, 
          img: progImg2,
        },
        {
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
          link: "More details",
          icons: {
            arrowIcon: <IoArrowForward className="text-red-700" />,
            whoweareIcon: whoweare,
           }, 
          img: progImg3
        },
      ];


  return (
    <div>
        <section className="">
       <div className="mx-8  my-14">
          <h1 className="text-5xl text-center ">Projects</h1>
       <div className="mt-14 mb-[6rem] flex   flex-wrap  items-center justify-center gap-8">
          {highlightCard.map((val, index) => {
            const { title, article, link, icon, img } = val;
            return (
              <div key={index} className=" flex flex-col  mb-4 flex-wrap items-center justify-center gap-2 bg-[whitesmoke] text-  border-2   lg:w-[30%] xl:w-[35%] ">             
                <img src={img} alt="" />
                 <div className=" flex flex-col items-center gap-2 p-6">
                 <h2 className=" text-wrap text-center text-2xl font-semibold">{title}</h2>
                <article className="leading text-center">
                  {article}
                </article>
                <div className="bg-[#faaf40] py-3 px-4 rounded-[1.8rem] flex items-center gap-4 m-4 ">
                  {link} 
                  {icon}
                </div>
                 </div>
                
              </div>
            );
          })}
        </div>
       </div>
      </section>
    </div>
  )
}

export default Projects
