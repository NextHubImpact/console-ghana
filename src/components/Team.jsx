import React from "react";
import t1 from "../assets/team-photos/t-photo1.jpeg";
import t2 from "../assets/team-photos/t-photo2.jpg";
import t3 from "../assets/team-photos/t-photo3.jpg";
import t4 from "../assets/team-photos/t-photo4.jpg";
import t5 from "../assets/team-photos/t-photo5.jpg";
import t6 from "../assets/team-photos/t-photo6.png";
import t7 from "../assets/team-photos/t-photo7.png";
import t8 from "../assets/team-photos/t-photo8.jpg";

const Team = () => {
  const team = [
    {
      photo: t1,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t2,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t3,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t4,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t5,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t6,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t7,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t8,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
  ];

  return (
    <div>
      <section className="pt-[4rem]">
        <h1 className="text-center font-bold text-red-700 text-3xl mb-8">Our Team</h1>
        <div className="flex flex-col gap-8 bg-[whitesmoke] items-enter justify-center xl:flex-row xl:gap-6 flex-wrap">
          {team.map((teamData, i) => {
            const { photo, name, role } = teamData;
            return (
              <div
                className="flex flex-col gap-2 items-center hover:scale-105 duration-700 shadow-sm bg-[#fff] rounded-md  m-2 xl:w-[20%]  "
                key={i}
              >
                <div className="">
                  <img
                    src={photo}
                    alt=""
                    className="rounded-t-xl  duration-700 grayscale hover:filter-none"
                  />
                </div>
                <div className="p-4 text-center mb-10">
                  <p className="text-red-700 text-[20px]">{name}</p>
                  <p className="text-[gray] text-[14px]">{role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Team;
