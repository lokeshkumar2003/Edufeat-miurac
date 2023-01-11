import React from 'react'

type SubjectPageCardProps = {
  img: string
  title: string
  subjectContent: {
    name: string
  }[]
}
export const SubjectPageCard = (props: SubjectPageCardProps) => {
  const { img, title, subjectContent } = props
  return (
    <div className='subjectPageCard w-auto h-auto p-5'>
      <div className='flex gap-4  w-56 text-center px-14 py-7 '>
        <img className='w-16 h-16 ' src={img} alt='subjectimg' />
        <div className='text-gray text-xl font-semibold p-3 flex-1'>
          {title}
        </div>
      </div>

      <div className='text-gray font-normal px-16 text-xl text-left w-55 '>
        {subjectContent.map((sub, index) => (
          <div>{sub.name}</div>
        ))}
      </div>
    </div>
  )
}
