import React from 'react'
import { SubjectPageCard } from '../../Components/Cards/subjectListCard'
import Content from '../../Components/Layouts/Content'
import { SubjectPageData } from '../../Helpers/Data/SubjectPageData'

export const SubjectContent = () => {
  return (
    <div className='bg-mintCream py-8 w-full h-full '>
      <Content>
        <div className='p-22'>
          <div className='heading text-primary text-center py-4 '>Subjects</div>
          <div className='flex flex-wrap gap-10 justify-center  p-14 '>
            {SubjectPageData.map((item, i) => (
              <SubjectPageCard key={i} img={item.img} title={item.title} subjectContent={item.subjectContent}/>
            ))}
          </div>
        </div>
      </Content>
    </div>
  )
}
