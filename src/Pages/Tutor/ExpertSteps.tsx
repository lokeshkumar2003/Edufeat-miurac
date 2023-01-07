import Content from '../../Components/Layouts/Content'
import img from '../../Assets/expert.svg'
import { Button, createStyles, Stepper } from '@mantine/core'
import { useState } from 'react'
import BenifitStepsCard from '../../Components/Cards/ExpertStepsCard'

export default function ExpertSteps() {
  const [active, setActive] = useState(1)
  const steps = [
    {
      label: 'Sign-Up',
      description:
        'Signup and create your profile. Fill in all the required information.',
    },
    {
      label: 'Online Screening',
      description: 'Solve and submit the test as per instructions.',
    },
    {
      label: 'Verification',
      description:
        'Our team verifies your credentials including the documents.',
    },
    {
      label: 'Start Answering',
      description:
        'Congratulations! You are an expert Start working and earning.',
    },
  ]

  return (
    <div className='bg-lotion py-24'>
      <Content>
        <div className=''>
          <div className='heading text-primary text-center py-4 mb-[30px]'>
            Become an expert in 4 easy steps
          </div>
          <div className='grid md:grid-cols-2 gap-20 '>
            <div className=''>
              <img src={img} className='object-cover  ' alt='' />
            </div>
            <div className=''>
              <Stepper
                active={active}
                onStepClick={setActive}
                orientation='vertical'
                size='sm'
                className='expert'
              >
                {steps.map((item, i) => {
                  return (
                    <Stepper.Step
                      label={item.label}
                      description={item.description}
                      className={active >= i ? 'active' : ''}
                    />
                  )
                })}
              </Stepper>
            </div>
          </div>
          <div className='my-8 flex justify-center'>
           
            <Button color='#29329c' className='text-white bg-primary' size='md'>
              Become a Tutor
            </Button>
          </div>
        </div>
      </Content>
    </div>
  )
}
