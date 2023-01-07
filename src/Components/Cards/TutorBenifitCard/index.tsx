import React from 'react'

type AppProps = {
  title: string
  img: string
  description: string
}
export default function TutorBenifitCard(props: AppProps) {
  const { title, img, description } = props
  return (
    <div className='bg-white p-8 benefitCard'>
      <div className=''>
        <img src={img} className='w-80 h-80 mx-auto  object-cover' alt='img' />
      </div>
      <div className='heading text-primary text-center mb-3 '>{title}</div>

      <p className='text-gray '>{description}</p>
    </div>
  )
}
