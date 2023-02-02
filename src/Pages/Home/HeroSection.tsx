import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Content from "../../Components/Layouts/Content";
import img from "../../Assets/editorimg.svg";
import graduate from "../../Assets/graduate.svg";
import stars from "../../Assets/stars.svg";
import messageStar from "../../Assets/messageStar.svg";
import smile from "../../Assets/smile.svg";
import { Button } from "@mantine/core";
import heart from "../../Assets/heart.svg";
import verified from "../../Assets/verified.svg";
import { RichTextEditor } from "@mantine/rte";
import spiral from "../../Assets/spiral.svg";
import herosectionpic from "../../Assets/herosectionpic.svg";
import { Group, Text, useMantineTheme } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

export default function HeroSection(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();

  const [value, onChange] = useState(
    "<p>Type your question here or add files</p>"
  );
  return (
    <div className="bg-lightSkyBlue">
      <Content>
        <>
          <div className="items-center ">
            <div className="grid md:grid-cols-2 py-11 justify-between items-center md:gap-[157px]">
              <div className="">
                <div className="flex items-center gap-[5px] flex-row ">
                  <div className="font-semibold text-lg font-sans">
                    24/7 Course Help
                  </div>
                  <img src={heart} alt="heart" />
                </div>
                <div className="max-w-xl grid gap-4">
                  <div className="text-primary font-semibold text-6xl  leading-relaxed ">
                    Best Academic helps with great prices!
                  </div>
                  <p className="py-4">
                    Our tutors are here to help you in every step of your
                    course!
                  </p>

                  <div className="flex flex-col gap-3 md:items-center md:flex-row ">
                    <div className="">
                      <Link to="/tutor">
                        <Button
                          color="#29329c"
                          className="text-white bg-primary"
                          size="md"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-start gap-[5px]">
                      <img src={verified} alt="verified" />
                      <div className="text-sm">100% verified answers</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mx-auto">
                <img src={img} className="object-cover  " alt="img  " />
              </div> */}
              <div>
                <div
                  className="font-semibold text-lg pb-[12px] text-center text-gray "
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  Got a question? We have the Answer.
                </div>
                <div className=" flex relative ">
                  <div className="2xl:hidden md:visible">
                    <img src={herosectionpic} alt="hero" />
                  </div>
                  <RichTextEditor
                    id="rte"
                    value={value}
                    onChange={onChange}
                    formats={["bold", "italic", "underline"]}
                    controls={[["bold", "underline"]]}
                    className="w-[323px] h-[327px] md:w-[392px] md:h-[327px] justify-center rounded-2xl overflow-hidden   "
                    classNames={{
                      toolbarControl:
                        "border-none bg-[#4a4a68] text-white hover:bg-[#ffffff22]",
                      toolbar: "bg-[#4a4a68] rounded-t-2xl",
                    }}
                   />
                   <div className="absolute bottom-0 ">
                   <Dropzone
                    className=" w-fit h-[90px] bottom-3  "
                      onDrop={(files) => console.log("accepted files", files)}
                      onReject={(files) => console.log("rejected files", files)}
                      maxSize={3 * 1024 ** 2}
                      accept={IMAGE_MIME_TYPE}
                      {...props}
                    >
                      <Group
                        position="center"
                        spacing="xl"
                        style={{ minHeight: 220, pointerEvents: "none" }}
                      >
                        <Dropzone.Accept>
                          <IconUpload
                            size={50}
                            stroke={1.5}
                            color={
                              theme.colors[theme.primaryColor][
                                theme.colorScheme === "dark" ? 4 : 6
                              ]
                            }
                          />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                          <IconX
                            size={50}
                            stroke={1.5}
                            color={
                              theme.colors.red[
                                theme.colorScheme === "dark" ? 4 : 6
                              ]
                            }
                          />
                        </Dropzone.Reject>
                        {/* <Dropzone.Idle>
                          <IconPhoto size={50} stroke={1.5} />
                        </Dropzone.Idle> */}

                        {/* <div>
                          <Text size="xl" inline>
                            Drag images here or click to select files
                          </Text>
                          <Text size="sm" color="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should
                            not exceed 5mb
                          </Text>
                        </div> */}
                      </Group>
                    </Dropzone>
                   </div>
                    
                 
                </div>
                <div className="pt-[15px] w-full h-full flex justify-center gap-[40px] ">
                  <img
                    src={spiral}
                    alt="spiral"
                    className="2xl:hidden md:visible"
                  />
                  <a href="https://tutor.edufeat.com" target="_blank">
                    <Button className="bg-primary">Get Solution</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      </Content>
      <div className="border-[1px] border-solid  border-white">
        <Content>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[185px] py-3">
            {data.map((item, i) => (
              <div className="flex gap-4 ">
                <img className="w-[50px] h-[50px] " src={item.img} alt="" />
                <div className="font-gray">
                  <p className="font-semibold mb-2 text-lg">{item.title}</p>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Content>
      </div>
    </div>
  );
}
const data = [
  {
    img: graduate,
    description: "Subject Matter experts",
    title: "10,000+",
  },
  {
    img: messageStar,
    description: "Student reviews",
    title: "3,489+",
  },
  {
    img: smile,
    description: "Happy Students",
    title: "12,989+",
  },
  {
    img: stars,
    description: "Ratings",
    title: "4.9/5",
  },
];
