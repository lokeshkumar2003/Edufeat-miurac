import React,{useState} from 'react'
import Content from '../../Components/Layouts/Content'
import img from '../../Assets/faq.svg'
import { FaqAccordionComponent } from './FaqAccordion'
import { MoreFaqAccordionComponent } from './MoreFaq'

export default function Faq() {
  const[show,setShow]=useState(false)
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
              {
                show?<MoreFaqAccordionComponent />:null
              }
              
              <div className="text-primary text-center md:text-left" onClick={()=>setShow(!show)} >
                {show?"show less<":"show more>"}
              </div>

            </div>
          </div>
        </div>
      </Content>
    </div>
  )
}
