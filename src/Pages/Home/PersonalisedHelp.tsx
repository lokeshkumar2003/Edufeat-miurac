import React from 'react'
import PersonaliseCard from '../../Components/Cards/PersonaliseCard'
import Content from '../../Components/Layouts/Content'
import { personalisedData } from '../../Helpers/Data/PersonalisedData'

export default function PersonalisedHelp() {
  return (
    <div className='bg-lotion py-24'>
      <Content>
        <div className=''>
          <div className='text-primary heading text-center mb-[70px]'>
            Get personalised help with
          </div>
          <div className='flex flex-wrap gap-10 justify-center'>
            {personalisedData.map((item, i) => (
              <PersonaliseCard {...item} key={i} />
            ))}
          </div>
        </div>
      </Content>
    </div>
  )
}
