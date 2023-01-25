import react, { useRef } from "react";
import person1 from "../../Assets/tutor1.svg";
import person2 from "../../Assets/tutor2.svg";
import person3 from "../../Assets/tutor3.svg";
import person4 from "../../Assets/tutor4.svg";
import person5 from "../../Assets/tutor5.svg";
import person6 from "../../Assets/tutor6.svg";
import person7 from "../../Assets/tutor7.svg";
import person8 from "../../Assets/tutor8.svg";
import person9 from "../../Assets/tutor9.svg";
import Autoplay from "embla-carousel-autoplay";
// import { Carousel } from "@mantine/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TutorLoveEdufeatCard from "../../Components/Cards/tutorLoveEdufeat";
import Content from "../../Components/Layouts/Content";
export default function TutorLoveEdufeat() {
  // const autoplay = useRef(Autoplay({ delay: 5000 }));
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
    {
      img: person4,
      name: "Nitish, NIT Silchar",
      description:
        "The day I got into the platform my life kind of changed and  I became economically independent. The learning which I got was very helpful in my academics and competitive exams. Will surely recommend to my juniors to work on this platform for great learning and earning.",
    },

    {
      img: person5,
      name: "Abhishek , NIT Kurukshetra",
      description:
        "EduFeat has made me a responsible person. I don't know how, but it has. I can manage my time easily now. Whenever there is a session at night, I manage my work in daytime so that i'm available for the session. Edufeat also taught me efficiency. I try to solve less problems but correctly thereby increasing my efficiency. Also it's a bit of a good practice to be in touch with JEE topics as they help me a lot today.",
    },

    {
      img: person6,
      name: "Manikanta, IIT Kharagpur",
      description:
        "Edufeat helped me learn things in different way besides good earnings. The preference of confirming or declining sessions is completely with the decision of myself which is great.",
    },
    {
      img: person7,
      name: "Prasanna, Manipal University",
      description:
        "I have earned money for the first time.I faced different questions, most of which were really interesting, and I learned a lot during my time here.",
    },

    {
      img: person8,
      name: "Biswajit Sharma, IIT BHU",
      description:
        "It provided me with the application platform for my knowledge. It also helped me to add up some new concept in my knowledge bag every moment.",
    },

    {
      img: person9,
      name: "Sumeet , Banaras Hindu University",
      description:
        "I didn't have to ask for money from my parents so it made me independent. And I got an insight in teaching as I myself provided solutions for questions so being on this side was very nice.",
    },
  ];
  // const card2 = [

  // ];
  // const card3 = [

  // ];

  return (
    <div className="bg-lightbg">
      <Content>
        <div className="">
          <div className="text-primary  text-center mb-10 pt-[90px] font-semibold text-[42px]">
            Tutor Love Edufeat
          </div>
          {/* <div className="flex pb-[105px] md:gap-[30px] flex-wrap lg:flex-nowrap justify-center  "> */}
          <Carousel
            // withIndicators
            // // height={576}
            // breakpoints={[
            //   { maxWidth: 'md', slideSize: '50%' },
            //   { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            // ]}
            // plugins={[autoplay.current]}
            // slideGap="md"
            // loop
            // align="start"
            showArrows={false}
            showThumbs={false}
            showIndicators={true}
            // selectedItem={active}
            showStatus={false}
          >
            {cards.map((card, i) => (
              <div className="flex gap-8 pt-11 flex-wrap lg:flex-nowrap justify-center">
                <TutorLoveEdufeatCard
                  img={card.img}
                  name={card.name}
                  description={card.description}
                />
              </div>
            ))}
          </Carousel>
          {/* {cards.map((card, i) => (
                  <TutorLoveEdufeatCard
                    img={card.img}
                    name={card.name}
                    description={card.description}
                  />
                ))} */}
          {/* </div> */}
        </div>
      </Content>
    </div>
  );
}
