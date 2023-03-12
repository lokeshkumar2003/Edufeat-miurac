import React from "react";
import SubjectCard from "../../Components/Cards/SubjectCard";
import Content from "../../Components/Layouts/Content";
import { subjectsData } from "../../Helpers/Data/SubjectsData";
import { Accordion, useMantineTheme } from "@mantine/core";

export default function Subjects() {
  return (
    <div className="bg-lotion py-8">
      <Content>
        <div className="">
          <div className="heading text-primary text-center py-4">Subjects</div>
          <Accordion>
            <div className="flex flex-wrap gap-10 justify-center ">
              {subjectsData.map((item, i) => (
                // <SubjectCard
                //   key={i}
                //   img={item.img}
                //   title={item.title}
                //   subject={item.subject}
                // />
                <Accordion.Item value={item.title}>
                  <Accordion.Control>
                    <div className="flex items-center gap-4 w-[280px] md:w-[350px]">
                      <img src={item.img} alt="subimg" />
                      <div className="">{item.title}</div>
                    </div>
                  </Accordion.Control>
                  <Accordion.Panel>{item.subject}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </div>
          </Accordion>
        </div>
      </Content>
    </div>
  );
}
