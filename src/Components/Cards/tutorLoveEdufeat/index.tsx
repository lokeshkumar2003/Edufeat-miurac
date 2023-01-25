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
    <div className="">
      <div>
        <img
          src={img}
          alt="tutor-dp"
          className=" absolute w-[120px] h-[120px] px-[140px]  "
        />
      </div>
      <div className="pb-[106px]">
        {/* <Content> */}
        <div className="w-[400px] h-[515px] bg-white rounded-[30px] ">
          <div className="font-sans font-semibold text-[22px] text-primary text-center pt-[94px]">
            {name}
          </div>
          <div className="relative z-0">
            <div className="absolute text-[400px] z-0 text-gray-light" style={{lineHeight:"0px"}}>,</div>
            <p className="font-sans font-normal px-[40px] absolute z-10 text-justify pt-[89.5px] text-[16px]">
              {description}
            </p>
          </div>
          {/* <div>,</div> */}
        </div>
        {/* </Content> */}
      </div>
    </div>
  );
}
