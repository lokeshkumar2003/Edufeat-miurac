import React from 'react'
import Content from '../../Components/Layouts/Content'
import heroSectionimg from '../../Assets/aboutUsHeroSection.svg'

export default function HeroSection() {
  return (
    <div className='bg-lotion'>
      <Content>
        <div className='grid md:grid-cols-2 py-11 justify-between items-center'>
          <div className=''>
            <div className='max-w-xl grid gap-4'>
              <div className='text-primary font-semibold text-6xl leading-relaxed '>
                A team made of experts!!
              </div>
              <p className='py-4 leading-8'>
                Edufeat provides a platform for students all around the globe to
                get academic help from thousands of excellent experts, available
                24/7. Our products and services are designed to improve the
                outcome of a student's academic performance. Edufeat Experts are
                here to give you the best academic assistance you may find
                online. We believe there is no such thing as a "Poor student''
                but only a ''Lost student''.We are here to remove that void and
                make every student excel in their studies with top-graded
                guidance.
              </p>
            </div>
          </div>
          <div className='mx-auto'>
            <img
              src={heroSectionimg}
              className='object-cover md:h-80'
              alt='img  '
            />
          </div>
        </div>
      </Content>
    </div>
  )
}
