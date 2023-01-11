import React from 'react'
import Content from '../../Components/Layouts/Content'

const aboutGoalsData = [
  {
    title: 'Mission',
    discription: `Our mission is to EMPOWER EVERY STUDENT to excel in their studies. May it
be a student seeking guidance or a student desiring to be a tutor. We believe in
unleashing the potential of each student.
`,
  },
  {
    title: 'Vision',
    discription: `Our Aim is to simply help students reach their full potential. We strive to make
Edufeat the one stop solution for all tutoring needs.
`,
  },
]
export default function AboutGoals() {
  return (
    <div className='bg-lightbg py-16'>
      <Content>
        <div className=''>
          {aboutGoalsData.map((about, i) => (
            <div className={`max-w-4xl ${i % 2 ? 'md:ml-auto' : ''} `}>
              <div className='heading text-primary my-10'>{about.title} </div>

              <div className='shadow-card text-base font-normal text-justify text-gray bg-white rounded-3xl py-[40px] px-[87px]'>
                {about.discription}
              </div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  )
}
