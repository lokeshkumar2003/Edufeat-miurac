// import Content from "../../Components/Layouts/Content";
import img from "../../Assets/expert.png";
import { Button, Container, createStyles, Loader, Stepper } from "@mantine/core";
import { useState, useEffect, useRef } from "react";
import useImage from 'use-image';
import BenifitStepsCard from "../../Components/Cards/ExpertStepsCard";
import tick from "../../Assets/tick.svg";
import tick2 from "../../Assets/tick2.svg";
import img2 from "../../Assets/Online screening.png";
import img3 from "../../Assets/Verification.png";
import img4 from "../../Assets/Start answering.png";
// import { Carousel } from "@mantine/carousel";
// import Autoplay from "embla-carousel-autoplay";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
const stepimage=[
  {
    img:img,
  },
  {
    img:img2,
  },
  {
    img:img3,
  },
  {
    img:img4
  }
]
export default function ExpertSteps() {
  const { classes } = useStyles();
  // const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if(imgsLoaded){
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
    }
  }, [imgsLoaded]);
  const loadImage = (image:string) => {
    return new Promise((resolve, reject) => {
      const loadImg = new Image()
      loadImg.src = image
      // wait 2 seconds to simulate loading time
      loadImg.onload = () => resolve(image)

      loadImg.onerror = err => reject(err)
    })
  }
  useEffect(() => {
    Promise.all(stepimage.map(image => loadImage(image.img)))
    .then(() => setImgsLoaded(true))
    .catch(err => console.log("Failed to load images", err))
  
    return () => {
      
    }
  }, [])
  
  
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
  if(!imgsLoaded) return <div className="w-full h-96 flex justify-center items-center"> <Loader variant="dots" /></div>
  return (
    <div className="bg-lotion py-24">
      {/* <Container> */}
        <div className="mx-auto">
          <div className="heading text-primary text-center py-4 mb-[30px]">
            Become an expert in 4 easy steps
          </div>
          <div className="grid w-full md:grid-cols-2 gap-20 ">
            <div className="">
              <Carousel
                // mx="auto"
                // w={"100%"}
                // loop
                // align="center"
                // slideSize="100%"
                className=""
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
                selectedItem={active}
                showStatus={false}
                // draggable={false}
                // classNames={classes}
                // plugins={[autoplay.current]}
                // withControls={false}
                
              >
                { stepimage.map((item,i)=>{
                  return(
                    <div key={i}>
                      <img src={item.img} alt="img" style={{width:"calc(100% - 40px)"}} className="mx-auto md:h-[476px] object-contain "/>
                    </div>
                  )
                })

                }
              </Carousel>
            </div>
            <div className="">
              <Stepper
                active={active}
                onStepClick={setActive}
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
                      style={{width:"calc(100% - 40px)"}}
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
      {/* </Container> */}
    </div>
  );
}
