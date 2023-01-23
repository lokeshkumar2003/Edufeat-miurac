import React from "react";
import "./styles.css";

type PersonaliseCardProps = {
  img: string;
  title: string;
  description: string;
  color: string;
};
export default function PersonaliseCard(props: PersonaliseCardProps) {
  const { img, title, description, color } = props;

  return (
    <div
      key={title}
      className={`personaliseCard  grid justify-center items-center py-10 relative overflow-hidden`}
    >
      <div
        style={{ background: color }}
        className="absolute left-0 top-0 w-[15px] h-full overflow-hidden"
      />
      <div className="text-center w-11/12 ml-8">
        <img src={img} alt="img" className="mx-auto  object-contain " />
        <h2 className="text-center font-semibold mb-6 mt-3">{title}</h2>
        <p className="text-left ">{description}</p>
      </div>
    </div>
  );
}
