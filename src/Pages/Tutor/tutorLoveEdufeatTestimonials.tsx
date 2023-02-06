import react, { useEffect, useRef, useState } from "react";
import person1 from "../../Assets/tutorfemale1.png";
import person2 from "../../Assets/tutormale2.png";
import person3 from "../../Assets/tutormale3.png";
import person4 from "../../Assets/tutor4male.png";
import person5 from "../../Assets/tutormale5.png";
import person6 from "../../Assets/tutormale6.png";
import person7 from "../../Assets/tutorfemale7.png";
import person8 from "../../Assets/tutorfemale8.png";
import person9 from "../../Assets/tutormale9.png";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from '@mantine/hooks';
import personf1 from "../../Assets/tutorf1.jpg";
// import { Carousel } from "@mantine/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TutorLoveEdufeatCard from "../../Components/Cards/tutorLoveEdufeat";
import Content from "../../Components/Layouts/Content";
export default function TutorLoveEdufeat() {
  // const autoplay = useRef(Autoplay({ delay: 5000 }));
  const mobile = useMediaQuery('(max-width: 600px)');
  const tab = useMediaQuery('(max-width: 1200px)');
  const pcDesktop = useMediaQuery('(min-width: 1199px)');
  const [step, setStep] = useState(2)
  useEffect(() => {
    if(mobile) setStep(1)
    if(tab) setStep(2)
    if(pcDesktop) setStep(3)
  }, [mobile,tab,pcDesktop])
  
  const cards = [
    {
      img: person1,
      name: "Sonal Garg",
      college:"Krishna Institute of Engg College",
      description:
        "Overall experience was really good. It is best in terms of a part time job. Also one has totally flexibility on choosing the assignment to work on and if break from the worm required. You can continue the work when you are able to. ",
    },

    {
      img: person2,
      name: "Saumitra Pandey",
      college:"BITS Pilani",
      description:
        "In my one year with EduFeat, i have become a better engineer. The vast array of problems from various subjects helped me better my concepts and deepening my understanding. Working as a SME for EduFeat was my 1st  and i will always cherish the experience. I wish all the luck for EduFeat . May you achieve all your aspirations. ",
    },

    {
      img: person3,
      name: "Mridul Gupta",
      college:"NIT Jalandhar",
      description:
        "Cleared the BARC entrance and GATE exam (AIR250) without any coaching. After that, I cleared the BARC Scientific Officer interview and got selected. Currently working as Scientific Officer.",
    },
    {
      img: person4,
      name: "Shagun Agarwal ",
      college:"NIT Jalandhar",
      description:
        "The day I got into the platform my life kind of changed and  I became economically independent. The learning which I got was very helpful in my academics and competitive exams. Will surely recommend to my juniors to work on this platform for great learning and earning.",
    },

    {
      img: person5,
      name: "Abhinav Tiwari ",
      college:"BITS Pilani",
      description:
        "EduFeat has made me a responsible person. I don't know how, but it has. I can manage my time easily now. Whenever there is a session at night, I manage my work in daytime so that i'm available for the session. Edufeat also taught me efficiency. I try to solve less problems but correctly thereby increasing my efficiency. ",
    },

    {
      img: person6,
      name: "Manikanta",
      college:" IIT Kharagpur",
      description:
        "Edufeat helped me learn things in different way besides good earnings. The preference of confirming or declining sessions is completely with the decision of myself which is great.",
    },
    {
      img: person7,
      name: "Kiran Pabreja",
      college:"Banaras University",
      description:
        "I have earned money for the first time.I faced different questions, most of which were really interesting, and I learned a lot during my time here.",
    },

    {
      img: person8,
      name: "Pratyasha Bhardwaj",
      college:"IIT Delhi",
      description:
        "It provided me with the application platform for my knowledge. It also helped me to add up some new concept in my knowledge bag every moment.",
    },

    {
      img: person9,
      name: "Suyash Agrawal ",
      college:"NIT Warangal",
      description:
        "I didn't have to ask for money from my parents so it made me independent. And I got an insight in teaching as I myself provided solutions for questions so being on this side was very nice.",
    },
  ];
console.log(Math.ceil(cards.length/step));

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
            autoPlay
            showIndicators={true}
            // selectedItem={active}
            showStatus={false}
            swipeable={false}
            infiniteLoop={true}
          >
            {Array(Math.ceil(cards.length/step)).fill(0).map((_,d)=>(
              <div className="flex gap-8 pt-14 flex-wrap lg:flex-nowrap justify-center">
                {cards.slice(d*step,((d+1)*step)).map((card, i) =>(
                  <TutorLoveEdufeatCard
                  img={card.img}
                  name={card.name}
                  college={card.college}
                  description={card.description}
                />
                ))}
              </div>
            ))}
            {/* {cards.map((card, i) => {
              const length = cards.length
              return <div className="flex gap-8 pt-11 flex-wrap lg:flex-nowrap justify-center">
                <TutorLoveEdufeatCard
                  img={card.img}
                  name={card.name}
                  description={card.description}
                />
              </div>
            }
            )} */}
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
