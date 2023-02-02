import React from "react";
import Content from "../../Components/Layouts/Content";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


const socialMedias = [
    {
      icon: <FaLinkedinIn />,
      label: "Linked in",
      url: "https://www.linkedin.com/company/edufeat/"
    },
    {
      icon: <BsInstagram />,
      label: "Instagram",
      url:"https://www.instagram.com/edufeat/"
    },
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      url:"https://www.facebook.com/edufeat"
    },
  ];
export default function ContactContent() {
  return (
    <div className="bg-lightSkyBlue w-full h-full ">
      <div className="py-20">
        <Content>
          <div className="justify-center w-[300px]  bg-white py-5 rounded-2xl pl-5">
            <div className="justify-center  py-10 ">
              <div className="flex gap-1  text-primary flex-row ">
                <AiOutlineMail size={20} />
                Email: support@edufeat.com
              </div>
              <div className="flex gap-2 text-primary mt-3 ">
                <IoCallOutline size={20} />
                Phone: +91-8240014127
              </div>
              <div className=" gap-3 mt-4 ">
              {socialMedias.map((social, i) => (
              <a href={social.url} target="_blank">

              <div className="flex gap-2 items-center text-xl text-primary mt-4">
                {social.icon}
                <div className="text-sm text-primary md:inline-block  mt-1">{social.label} </div>
              </div>
              </a>
            ))}
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}
