import React from 'react'
import Content from '../../Components/Layouts/Content'
import {Button} from '@mantine/core'

const HomeworkStepsData = [
  {
    title: 'Sign up',
    description: 'Fill up your details and complete the sign-up process.',
  },
  {
    title: 'Place your order',
    description:
      'Place your order Place your order by uploading your queries and wait for a quotation.',
  },
  {
    title: 'Payment',
    description:
      'We will quote a price depending on your order. Pay with the link provided.',
  },
  {
    title: 'Get your solutions',
    description:
      'Once payment is completed, you can sit back and relax. We will provide your solutions before the deadline.',
  },
]

export default function HomeworkSteps() {
  return (
    <div className='bg-lightSkyBlue py-14 '>
      <Content>
        <div className=''>
          <div className='text-primary heading text-center mb-8'>
            Get our help in 4 easy steps!
          </div>
          <p className='py-4 text-center text-base mb-10'>
            Get the best expert's help available 24/7 with 100% accuracy !
          </p>
          <div className='grid  mx-auto md:grid-cols-4 gap-6 place-items-center '>
            {HomeworkStepsData.map((step, i) => (
              <div className='bg-white  px-8 pt-6 pb-10 rounded-xl max-w-96 md:w-auto md:h-56 '>
                <div className='text-hint font-medium text-lg'>
                  Step {i + 1}
                </div>
                <h2 className='text-primary font-semibold text-center my-6 text-lg'>
                  {step.title}
                </h2>
                <p className='text-justify'>{step.description}</p>
              </div>
            ))}
          </div>
          <div className=" mt-12 flex justify-center items-center ">
            <a href="https://edufeat--website.web.app/" target="_blank" >

            <Button className="bg-primary font-semibold text-base">Get Service Now</Button>
            </a>
          </div>
        </div>
      </Content>
    </div>
  )
}
