import React from "react";
import { Link } from "react-router-dom";
import Content from "../../Components/Layouts/Content";
import img from "../../Assets/editorimg.svg";
import graduate from "../../Assets/graduate.svg";
import stars from "../../Assets/stars.svg";
import messageStar from "../../Assets/messageStar.svg";
import smile from "../../Assets/smile.svg";
import { Button } from "@mantine/core";
import heart from "../../Assets/heart.svg";
import verified from "../../Assets/verified.svg";

export default function HeroSection() {
  return (
    <div className="bg-lightSkyBlue">
      <Content>
        <>
          <div className="items-center ">
            <div className="grid md:grid-cols-2 py-11 justify-between items-center md:gap-[157px]">
              <div className="">
                <div className="flex items-center gap-[5px] flex-row ">
                  <div className="font-semibold text-lg font-sans">
                    24/7 Course Help
                  </div>
                  <img src={heart} alt="heart" />
                </div>
                <div className="max-w-xl grid gap-4">
                  <div className="text-primary font-semibold text-6xl leading-relaxed ">
                    Best Academic helps with great prices!
                  </div>
                  <p className="py-4">
                    Our tutors are here to help you in every step of your
                    course!
                  </p>

                  <div className="flex flex-col gap-3 md:items-center md:flex-row ">
                    <div className="">
                      <Link to="/tutor">
                        <Button
                          color="#29329c"
                          className="text-white bg-primary"
                          size="md"
                        >
                          Become a Tutor
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-start gap-[5px]">
                      <img src={verified} alt="verified" />
                      <div className="text-sm">100% verified answers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto">
                <img src={img} className="object-cover  " alt="img  " />
              </div>
            </div>
          </div>
        </>
      </Content>
      <div className="border-[1px] border-solid  border-white">
        <Content>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[185px] py-3">
            {data.map((item, i) => (
              <div className="flex gap-4 ">
                <img className="w-[50px] h-[50px] " src={item.img} alt="" />
                <div className="font-gray">
                  <p className="font-semibold mb-2 text-lg">{item.title}</p>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Content>
      </div>
    </div>
  );
}
const data = [
  {
    img: graduate,
    description: "Subject Matter experts",
    title: "10,000+",
  },
  {
    img: messageStar,
    description: "Student reviews",
    title: "3,489+",
  },
  {
    img: smile,
    description: "Happy Students",
    title: "12,989+",
  },
  {
    img: stars,
    description: "Ratings",
    title: "4.9/5",
  },
];
