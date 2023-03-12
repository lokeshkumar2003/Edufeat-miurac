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
          <div className="flex flex-wrap gap-10 justify-center ">
           
              {subjectsData.map((item, i) => (
                <SubjectCard key={i} img={item.img} title={item.title} subject={item.subject} />
              ))}
            
          </div>
        </div>
      </Content>
    </div>
  );
}
