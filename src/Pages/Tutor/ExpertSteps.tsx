import Content from "../../Components/Layouts/Content";
import img from "../../Assets/expert.svg";
import { Button, createStyles, Stepper } from "@mantine/core";
import { useState, useEffect, useRef } from "react";
import BenifitStepsCard from "../../Components/Cards/ExpertStepsCard";
import tick from "../../Assets/tick.svg";
import tick2 from "../../Assets/tick2.svg";
import img2 from "../../Assets/Online screening.svg";
import img3 from "../../Assets/Verification.svg";
import img4 from "../../Assets/Start answering.svg";
import { Carousel } from "@mantine/carousel";
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

export default function ExpertSteps() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        if (prev === 3) {
          return 0;
        }
        return prev + 1;
      });
      console.log(active);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const steps = [
    {
      label: "Sign-Up",
      description:
        "Signup and create your profile. Fill in all the required information.",
    },
    {
      label: "Online Screening",
      description: "Solve and submit the test as per instructions.",
    },
    {
      label: "Verification",
      description:
        "Our team verifies your credentials including the documents.",
    },
    {
      label: "Start Answering",
      description:
        "Congratulations! You are an expert Start working and earning.",
    },
  ];

  return (
    <div className="bg-lotion py-24">
      <Content>
        <div className="">
          <div className="heading text-primary text-center py-4 mb-[30px]">
            Become an expert in 4 easy steps
          </div>
          <div className="grid md:grid-cols-2 gap-20 ">
            <div className="">
              <Carousel
                mx="auto"
                loop
                align="center"
                slideSize="100%"
                draggable={false}
                classNames={classes}
                plugins={[autoplay.current]}
                withControls={false}
              >
                <Carousel.Slide>
                  <img
                    src={img}
                    className="object-cover  w-[564.69px] h-[476.79] "
                    alt=""
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src={img2}
                    className="object-cover  w-[564.69px] h-[476.79] "
                    alt=""
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src={img3}
                    className="object-cover  w-[564.69px] h-[476.79] "
                    alt=""
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src={img4}
                    className="object-cover  w-[564.69px] h-[476.79] "
                    alt=""
                  />
                </Carousel.Slide>
              </Carousel>
            </div>
            <div className="">
              <Stepper
                active={active}
                // onStepClick={setActive}
                orientation="vertical"
                size="sm"
                className="expert"
                classNames={{
                  verticalSeparator: "broder-solid border-l-[8px] -ml-1  ",
                }}
                styles={{
                  separator: {
                    height: 10,
                    marginLeft:-2,
                    marginRight:-2,
                  },
                  stepIcon: {
                    backgroundColor: "transparent",
                  },
                  step: {
                    padding: 0,
                  },
                }}
              >
                {steps.map((item, i) => {
                  return (
                    <Stepper.Step
                      label={item.label}
                      description={item.description}
                      className={active === i ? "active" : ""}
                      // completedIcon={<img src={tick} alt="tick" />}
                      icon={<img src={tick2} alt="tick" />}
                    />
                  );
                })}
              </Stepper>
            </div>
          </div>
          <div className="my-8 flex justify-center">
            <Button color="#29329c" className="text-white bg-primary" size="md">
              Become a Tutor
            </Button>
          </div>
        </div>
      </Content>
    </div>
  );
}
