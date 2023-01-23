import React from "react";
import Content from "../../Components/Layouts/Content";
// import addSectionBg from "../../Assets/addSectionBg.svg";
import addSectionBg2 from "../../Assets/addSectionBg3.png"

export default function AddSection() {
  return (
    <div className="bg-lightSkyBlue">
      <div
      className="overflow-hidden rounded-[30px]"
        style={{
          backgroundImage: `url(${addSectionBg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <div
          className=" pb-10 pt-14 rounded-3xl"
        >
          <Content>
            <div className="">
              <div className="text-center text-white">Edufeat</div>
              <div className="text-turquoise text-4xl font-medium leading-relaxed md:w-3/5 mx-auto md:my-10 my-5">
                95% students get better grades when they study with us.
              </div>
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
}