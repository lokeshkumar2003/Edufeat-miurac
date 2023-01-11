import React from 'react'
import './styles.css'

type PersonaliseCardProps = {
  img: string
  title: string
  description: string
  color: string
}
export default function PersonaliseCard(props: PersonaliseCardProps) {
  const { img, title, description, color } = props

  return (
    <div
          className={`personaliseCard  border-l-[8px] border-solid  grid justify-center items-center py-10 `}
          style={{
              borderLeftColor: color
          }}
    >
      <div className='text-center w-11/12 mx-auto'>
        <img src={img} alt='img' className='mx-auto w-32 object-contain h-32' />
        <h2 className='text-center font-semibold mb-6 mt-3'>{title}</h2>
        <p className='text-left '>{description}</p>
      </div>
    </div>
  )
}
