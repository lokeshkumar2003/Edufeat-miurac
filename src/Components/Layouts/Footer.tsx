import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/whitelogo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import Content from "./Content";
import { Button } from "@mantine/core";
const footerItems = [
  ["about", "contact", "terms & conditions"],
  ["privacy policy", "refund policy"],
];

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
export default function Footer() {
  return (
    <div className="  bg-darkblue  py-3 text-sm">
      <Content>
        <div className="">
          <div className="flex flex-col md:flex-row  flex-wrap">
            <div className="flex-1 text-center md:text-left ">
              <div className="w-64 pt-[59px] mx-auto md:mx-0 ">
                <img src={logo} alt="logo"  className="w-[259px] h-[81px]"/>
              </div>
              <div className="w-64 pt-[15px]  mx-auto md:mx-0 text-white">
                Office 901, 9th Floor, Ergo Tower, Sector V, Salt lake 700091
              </div>
            </div>

            <div className="md:pt-[95px] ">
              <div className="flex md:gap-[70px]  flex-col md:flex-row items-start">
                {footerItems.map((arr, i) => (
                  <div className="w-full pt-8 md:pt-0">
                    <div className="ul list-none grid gap-[26px]">
                      {arr.map((item, i) => (
                        <Link
                          to={`/${item.split(" ")[0]}`}
                          className="text-center md:text-left"
                          key={i}
                        >
                          <div className="capitalize text-white text-base ">
                            {item}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="grid gap-4 w-full ">
                  <div className="grid gap-4 order-last md:order-first w-64 md:w-full mx-auto  text-base">
                    <div className="flex gap-1  text-white flex-row ">
                      <AiOutlineMail size={20} />
                      Email:support@edufeat.com
                    </div>
                    <div className="">
                      <div className="text-white">Drop your CV: </div>
                      <div className="text-white">tutorhr@edufeat.com</div>
                    </div>
                    <div className="flex gap-2 text-white ">
                      
                        <IoCallOutline size={20} />
                      
                      Phone: +91-8240014127
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start pt-8 md:pt-0 ">
                    <Button
                      color="#29329c"
                      className="text-white bg-primary"
                      size="lg"
                    >
                      Become a Tutor
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex gap-[96px] md:gap-4 items-center md:justify-start justify-center">
            {socialMedias.map((social, i) => (
              <a href={social.url} target="_blank">

              <div className="flex gap-2 items-center text-xl text-white">
                {social.icon}
                <div className="text-sm text-white md:inline-block hidden">{social.label} </div>
              </div>
              </a>
            ))}
          </div>
          <div className="max-w-3x text-center text-[10px]  grid gap-1 ">
            <div className="text-white pb-[18px] md:pb-0">
              Copyright © 2022 edufeat.com. All Rights Reserved
            </div>{" "}
            <div className="text-white">
              Disclaimer: The products and services provided by this website are
              solely for guidance and learning purposes.
            </div>
            <div className="text-white">
              Students are solely responsible for doing their own work.
              Materials should not be used for any other purpose or direct
              submission.
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
