import React from 'react'
import Content from '../../Components/Layouts/Content'
import img from '../../Assets/faq.svg'
import { FaqAccordionComponent } from './FaqAccordion'
import { MoreFaqAccordionComponent } from './MoreFaq'

export default function Faq() {
  return (
    <div className='bg-lotion py-8'>
      <Content>
        <div className=''>
          <div className='heading text-primary text-center py-4'>
            Frequently asked questions
          </div>
          <div className='grid md:grid-cols-2 '>
            <div className=''>
              <img src={img} className='object-cover  ' alt='' />
            </div>
            <div className=''>
              <FaqAccordionComponent />
              <div className="text-primary text-center md:text-left">
                View more   {" >"}
              </div>
              {/* <MoreFaqAccordionComponent /> */}

            </div>
          </div>
        </div>
      </Content>
    </div>
  )
}
