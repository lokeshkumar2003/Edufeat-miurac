import React, { useState, useCallback } from "react";
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
import { RichTextEditor } from "@mantine/rte";
import spiral from "../../Assets/spiral.svg";
import herosectionpic from "../../Assets/herosectionpic.svg";

export default function HeroSection() {
  const handleImageUpload = useCallback(
    (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("image", file);

        fetch("https://api.imgbb.com/1/upload?key=api_key", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => resolve(result.data.url))
          .catch(() => reject(new Error("Upload failed")));
      }),
    []
  );

  const [value, onChange] = useState(
    "<p>Type your question here or add files</p>"
  );
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
                  <div className="text-primary font-semibold text-6xl  leading-relaxed ">
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
                          Get Started
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
              {/* <div className="mx-auto">
                <img src={img} className="object-cover  " alt="img  " />
              </div> */}
              <div>
                <div className="font-semibold text-lg pb-[12px] text-center font-sans">
                  Got a question? We have the Answer.
                </div>
                <div className=" flex ">
                  <div className="2xl:hidden md:visible">
                    <img src={herosectionpic} alt="hero" />
                  </div>
                  <RichTextEditor
                    id="rte"
                    value={value}
                    onChange={onChange}
                    formats={["bold", "italic", "underline"]}
                    controls={[["bold", "underline"]]}
                    className="w-[323px] h-[327px] md:w-[392px] md:h-[327px] justify-center rounded-2xl   "
                    onImageUpload={handleImageUpload}
                    classNames={{ toolbarControl: "border-none bg-[#4a4a68] text-white hover:bg-[#ffffff22]", toolbar: "bg-[#4a4a68] rounded-t-2xl" }}
                    // styles={{
                    //   toolbar: {
                    //     backgroundColor: "#4A4A68",
                    //     borderRadius: "16px 16px 0px 0px ",
                    //     alignItems: "center",
                    //     height: "45px",
                    //     position:"sticky",
                    //   },
                    //   toolbarControl:{
                        
                    //   }
                    // }}
                  />
                </div>
                <div className="pt-[15px] w-full h-full flex justify-center gap-[40px] ">
                  <img src={spiral} alt="spiral" className="2xl:hidden md:visible" />
                  <a href="https://tutor.edufeat.com" target="_blank">
                    <Button className="bg-primary">Get Solution</Button>
                  </a>
                </div>
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
