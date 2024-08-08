import React from "react";
import phone from "../assets/img-icons/phone.webp";
import email from "../assets/img-icons/email.webp";
import location from "../assets/img-icons/map.webp";
import hour from "../assets/img-icons/mission-icon.webp";
import { MdTimer } from "react-icons/md";

const Contact = () => {
  const contactData = [
    {
      icon: phone,
      title: "contact details",
      info: "+233 303 944 393 | 053 9928 389",
    },
    {
      icon: email,
      title: "email",
      info: "info.ruralcodecamp.org",
    },
    {
      icon: location,
      title: "location",
      info: `254 Dar es Salaam street, Agbogba, North Legon, Accra`,
    },
    {
      icon: hour,
      title: "open-hours",
      info: `Monday - Friday`,
      time: "9:00AM - 05:00PM",
    },
  ];
  return (
    <div>
      <section className="my-8 mx-2 xl:my-[5rem] xl:mx-[5rem] py-10">
        <div className="text-center uppercase">
          <h2>contact us</h2>
          <h1 className="text-[28px] font-semibold">get in touch</h1>
        </div>
        <div className="flex flex-col gap-8 justify-center ites-center w-[%]  my-[4rem] xl:flex-row ">
          <div className="flex gap-2 xl:gap-8 flex-wrap items- justify-between xl:w-[50%]">
            {contactData.map((val, index) => {
              const { icon, title, info, time } = val;
              return (
                <div
                  key={index}
                  className="w-[48%] xl:w-[40%] bg-[white] p-4  flex flex-col rounded shadow-md  text-center gap-4 items-center duration-300  hover:scale-105 "
                >
                  <div className="w-[%]">
                    <img src={icon} className="w-[%]" alt="" />
                  </div>
                  <div className="flex flex-col gap- items-center ">
                    <h1 className=" text-[14px] font-bold uppercase">
                      {title}
                    </h1>
                    <p className="text-[14px] text-wrap text-[#faaf40]">
                      {info}
                    </p>
                    <p>{time}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* form  */}
          <div className=" justify-center items-center p-4 border flex flex-col bg-[white] xl:w-[50%]">
            
              <form
                action="https://formbase.dev/s/dBB2b3ZULGWVSV8"
                method="POST"
                encType="multipart/form-data"
                className="flex flex-col items-center gap-4 justify-center w-full"
              >
                <div className="flex flex-col gap-4 items-cente justify-cente w-full">
                  <div className="flex gap-8 xl:flex flex-col">
                    <input
                      className="border p-2  w-[100%]"
                      type="name"
                      name="name"
                      placeholder="Your Name"
                    />
                    <input
                      className="border p-2   w-[100%]"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="">
                    <input
                      className="border p-2  w-[100%]"
                      type="name"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <textarea
                  className="border p-2   resize-y w-full"
                  name="message"
                  placeholder="Message"
                  id=""
                >
                  {" "}
                </textarea>
                <button
                  className="bg-[#faaf40] rounded shadow-md  text-black py-3 px-8"
                  type="submit"
                  aria-required
                >
                  Send Message
                </button>
              </form>

          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="text-center"></div>
          <div className="flex items-center justify-center ">
            <iframe
              src="https://maps.google.com/maps?q=Nagino%20Dates%20Products&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
