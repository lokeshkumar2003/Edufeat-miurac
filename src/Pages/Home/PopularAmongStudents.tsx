import React from 'react'
import Content from '../../Components/Layouts/Content'
import completeokacceptgoodtick from '../../Assets/completeokacceptgoodtick.svg'
const popularAmongStudentsData = [
  {
    description: '24/7 Expert Help',
  },
  {
    description: 'Timely Submissions',
  },
  {
    description: 'Classified and Confidential',
  },
  {
    description: 'Zero Plagiarism ( Plagiarism free works )',
  },
  {
    description: 'High Precision Accuracy',
  },
  {
    description: '100% Money back guarantee',
  },
  {
    description: 'Reliable and Professional',
  },
]
export default function PopularAmongStudents() {
  return (
    <div className='bg-lightSkyBlue py-20'>
      <Content>
        <div className='items-center'>
          <div className='text-primary heading font-semibold text-center mb-16'>
            We are we popular among students for
          </div>
          <div className='flex md:w-4/5 mx-auto flex-wrap gap-6 justify-center align-center '>
            {popularAmongStudentsData.map((item) => (
              <div className='flex md:w-[400px] w-[350px] py-4 px-4 gap-6 bg-white rounded-lg  '>
                <img className='h-5 text-sm' src={completeokacceptgoodtick} alt='completedimg' />
                <div className='flex'>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </div>
  )
}
