import react from "react";
import person1 from "../../Assets/tutor1.svg";
import person2 from "../../Assets/tutor2.svg";
import person3 from "../../Assets/tutor3.svg";
import TutorLoveEdufeatCard from "../../Components/Cards/tutorLoveEdufeat";
import Content from "../../Components/Layouts/Content";
export default function tutorLoveEdufeat() {
  const cards = [
    {
      img: person1,
      name: "Gaurav Dange, MANIT Bhopal",
      description:
        "Overall experience was really good. It is best in terms of a part time job. Also one has totally flexibility on choosing the assignment to work on and if break from the worm required. You can continue the work when you are able to. ",
    },

    {
      img: person2,
      name: "Shubadip, VIT Chennai",
      description:
        "In my one year with EduFeat, i have become a better engineer. The vast array of problems from various subjects helped me better my concepts and deepening my understanding. Working as a SME for EduFeat was my 1st  and i will always cherish the experience. I wish all the luck for EduFeat . May you achieve all your aspirations. ",
    },

    {
      img: person3,
      name: "Amit Prajapati, IIT Roorkee",
      description:
        "Cleared the BARC entrance and GATE exam (AIR250) without any coaching. After that, I cleared the BARC Scientific Officer interview and got selected. Currently working as Scientific Officer.",
    },
  ];

  return (
    <div className="bg-lightbg">
      <Content>
        <div className="">
          <div className="text-primary  text-center mb-10 pt-[90px] font-semibold text-[42px]">
            Tutor Love Edufeat
          </div>
          <div className="flex gap-[30px] flex-wrap lg:flex-nowrap justify-center  ">
            {cards.map((card, i) => (
              <TutorLoveEdufeatCard
                img={card.img}
                name={card.name}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
}
