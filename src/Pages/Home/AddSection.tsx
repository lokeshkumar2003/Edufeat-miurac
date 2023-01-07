import React from 'react'
import Content from '../../Components/Layouts/Content'
import freepik from '../../Assets/freepikSparklesinject59.svg'


export default function AddSection() {
  return (
    <div className='bg-lightbg py-16'>
      <div className='linearbluebg pb-10 pt-8 rounded-3xl'>
        <Content>
          <div className=''>
            <img src={freepik} alt='sparkles' className='absolute w-[185.51px] h-[249.79px]  left-[1216.35px]'/>
            <img src={freepik} alt='sparkles' className='absolute w-[231.84px] h-[205.71px]  left-[92.35px]'/>
            <div className='text-center text-white'>Edufeat</div>
            <div className='text-turquoise text-4xl font-medium leading-relaxed md:w-3/5 mx-auto md:my-10 my-5'>
              95% students get better grades when they study with us.
            </div>
          </div>
        </Content>
      </div>
    </div>
  )
}
