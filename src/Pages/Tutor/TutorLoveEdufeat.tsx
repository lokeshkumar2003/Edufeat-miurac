import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import person1 from "../../Assets/person1.svg";
import person2 from "../../Assets/person2.svg";
import person3 from "../../Assets/person3.svg";
import person4 from "../../Assets/person4.svg";
import person5 from "../../Assets/person5.svg";
import person6 from "../../Assets/person6.svg";
import person7 from "../../Assets/person7.svg";
import person8 from "../../Assets/person8.svg";
import person9 from "../../Assets/person9.svg";
import { createStyles } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Content from "../../Components/Layouts/Content";

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
    position: "absolute",
  },

  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));
export default function TutorLoveEdufeat() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <div className="bg-lightbg">
      <div className="font-sans font-semibold text-[42px] pt-[90px] text-center text-primary ">
        Tutors Love Edufeat
      </div>
      <div className="flex max-w-[1440px] mx-auto ">
        <Carousel
          mx="auto"
          loop
          align="center"
          withIndicators
          slideSize="100%"
          draggable={false}
          classNames={classes}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          styles={{
            indicator: {
              width: 15,
              height: 15,
            },
          }}
          slideGap={"lg"}
        >
          <Carousel.Slide>
            <div className="flex">
              <img src={person1} alt="person" />
              <img src={person2} alt="person" />
              <img src={person3} alt="person" />
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex">
              <img src={person4} alt="person" />
              <img src={person5} alt="person" />
              <img src={person6} alt="person" />
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex ">
              <img src={person7} alt="person" />
              <img src={person8} alt="person" />
              <img src={person9} alt="person" />
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}
