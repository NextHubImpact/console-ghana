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
      photo: t6,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
    {
      photo: t7,
      name: "Rafik Gangsta",
      role: "Senior Full Stack Developer",
    },
  ];

  return (
    <div>
      <section className="pt-[4rem] mx-8">
        <h1 className="text-center font-bold text-3xl mb-8">Our Team</h1>
        <div className="grid bg-[whitesmoke] place-items-center xl:grid-cols-3 gap-4">
          {team.map((teamData, i) => {
            const { photo, name, role } = teamData;
            return (
              <div
                className="w-[92%] gap-2 items-center group hover:scale-105 duration-700 shadow-sm bg-[#fff] rounded-md  m-2 xl:w-[80%]  "
                key={i}
              >
                <div className="rounded-t-xl">
                  <img
                    src={photo}
                    alt=""
                    className="rounded-t-md  duration-700 grayscale group-hover:filter-none"
                  />
                </div>
                <div className="p-4 text-center mb-10">
                  <h2 className="text-[20px] font-semibold">{name}</h2>
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
