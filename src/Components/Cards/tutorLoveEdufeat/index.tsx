import { type } from "os";
import React from "react";
import Content from "../../Layouts/Content";
import "./styles.css";

type personProps = {
  img: string;
  name: string;
  description: string;
};

export default function tutorLoveEdufeatCard(props: personProps) {
  const { img, name, description } = props;
  return (
    <div className="relative w-full  ">
      <div style={{left:"calc(50% - 60px)"}} className="absolute h-[120px] w-[120px]  -top-16">
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
          <div className="font-sans font-semibold text-[22px] text-primary text-center pt-[94px]">
            {name}
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
