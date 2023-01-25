import React, { useState, useRef } from "react";
import Content from "../../Components/Layouts/Content";
import heroSectionimg from "../../Assets/herosection.svg";
import { Button } from "@mantine/core";
import heroSectionImg2 from "../../Assets/herosSectionImg2.svg";
import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

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
export default function HeroSection() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="bg-lotion">
      <Content>
        <div className="grid md:grid-cols-2 py-11 justify-between items-center">
          <div className="">
            <div className="max-w-xl grid gap-4">
              <div className="text-primary font-semibold text-[32px]  md:text-6xl md:leading-relaxed ">
                Earn with Edufeat by tutoring online.
              </div>
              <p className="py-4">
                Become a Subject Matter Expert today and get paid by solving
                questions at your own convenience. Encash your knowledge now!
              </p>
              <div className="flex flex-col gap-3 md:items-center md:flex-row ">
                <div className="text-white">
                  <Button
                    color="#29329c"
                    className="text-white bg-primary"
                    size="md"
                  >
                    Become a Tutor
                  </Button>
                </div>
                <div className="text-sm">
                  Top Experts earn upto ₹50,000 per month.
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[49px]">
            <Carousel
              loop
              align="start"
              draggable={false}
              classNames={classes}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              <Carousel.Slide>
                <img
                  src={heroSectionimg}
                  className="object-cover md:h-80 mx-auto"
                  alt="img  "
                />
                {/* <div className=" my-8 text-center">
                Work anytime, anywhere, Get paid!
              </div> */}
              </Carousel.Slide>
              <Carousel.Slide>
                <div className="">
                  <img
                    src={heroSectionImg2}
                    className="object-cover md:h-80 mx-auto "
                    alt="img  "
                  />
                  {/* <div className=" my-8 text-center ">
                  Build Your Future With Us!
                </div> */}
                </div>
              </Carousel.Slide>
            </Carousel>
          </div>

          {/* <div className="flex items-center gap-4 justify-center">
            <div className="bg-primary w-6 h-6 flex justify-center items-center text-white rounded-xl text-lg cursor-pointer">
              {"<"}
            </div>
            <div className="bg-primary w-6 h-6 flex justify-center  items-center text-white rounded-xl text-lg cursor-pointer">
              {">"}
            </div>
          </div> */}
        </div>
      </Content>
    </div>
  );
}
