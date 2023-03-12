import React from 'react'
import img from '../../../Assets/subjectMecEng.svg'
import Subject  from '../../../Pages/Subjects'
import { Link } from 'react-router-dom'
type SubjectCardProps = {
  img: string
  title: string
  subject:any
}
export default function SubjectCard(props: SubjectCardProps) {
  const { img, title } = props
  return (
    <div>
      <Link to={'/Subject'}>
      <div className='subjectCard  md:h-28 h-32 flex items-center px-6  '>
      <div className='flex gap-4 items-center w-full'>
        <img src={img} alt='subjectimg' />
        <div className='text-gray text-xl font-semibold flex-1'>{title}</div>
        
      </div>
    </div>
      </Link>
    </div>
    
  )
}
