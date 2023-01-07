import React from 'react'
import img from '../../../Assets/subjectMecEng.svg'
type SubjectCardProps = {
  img: string
  title: string
}
export default function SubjectCard(props: SubjectCardProps) {
  const { img, title } = props
  return (
    <div className='subjectCard  md:h-28 h-32 flex items-center px-6  '>
      <div className='flex gap-4 items-center w-full'>
        <img src={img} alt='subjectimg' />
        <div className='text-gray text-xl font-semibold flex-1'>{title}</div>
        <div className='text-gray font-semibold text-3xl '>+</div>
      </div>
    </div>
  )
}
