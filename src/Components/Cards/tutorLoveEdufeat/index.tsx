import { type } from "os";
import React from "react";
import Content from "../../Layouts/Content";
import "./styles.css";

type personProps = {
  img: string;
  name: string;
  college: string;
  description: string;
};

export default function tutorLoveEdufeatCard(props: personProps) {
  const { img, name, college, description } = props;
  return (
    <div className="relative w-full  ">
      <div
        style={{ left: "calc(50% - 60px)" }}
        className="absolute h-[120px] w-[120px]  -top-16"
      >
        <img
          src={img}
          alt={`${name} profile pic`}
          // style={{left:"0"}}
          className="   block  "
        />
      </div>
      <div className="pb-[106px] ">
        {/* <Content> */}
        <div className="max-w-[400px] h-[515px] bg-white rounded-[30px] mx-auto ">
          <div className="">
            <div className="font-sans px-[50px] text-primary  pt-[94px] ">
              <span className="font-semibold text-[22px]">{name}</span>
              <span className="text-primary ">,</span>
              <span className="text-[16px]">{college}</span>
            </div>
          </div>
          <div className="relative ">
            <div
              className="comma_flip absolute text-[500px] z-0 text-[#F0F0F0] "
              style={{ lineHeight: "0px", fontFamily: "Oswald" }}
            >
              ,
            </div>
            <div
              className="comma_right absolute text-[500px] z-0 text-[#F0F0F0] "
              style={{ lineHeight: "0px", fontFamily: "Oswald" }}
            >
              ,
            </div>
            <div className="absolute font-sans font-normal px-[40px] text-justify pt-[89.5px] text-[16px] z-10">
              {description}
            </div>
          </div>

          {/* <div>,</div> */}
        </div>
        {/* </Content> */}
      </div>
    </div>
  );
}
