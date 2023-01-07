import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/whitelogo.svg'
import { AiOutlineMail } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

import Content from './Content'
import { Button } from '@mantine/core'
const footerItems = [
  ['about', 'contact', 'blog', 'login'],
  ['privacy policy', 'refund policy', 'terms & conditions'],
]

const socialMedias = [
  {
    icon: <FaLinkedinIn />,
    label: 'Linked in',
  },
  {
    icon: <BsInstagram />,
    label: 'Instagram',
  },
  {
    icon: <FaFacebookF />,
    label: 'Facebook',
  },
]
export default function Footer() {
  return (
    <div className='  bg-darkblue  py-10 text-sm'>
      <Content>
        <div className=''>
          <div className='flex flex-col md:flex-row gap-8 flex-wrap'>
            <div className='flex-1 text-center md:text-left '>
              <div className='w-64  mx-auto md:mx-0'>
                <img src={logo} alt='logo' />
              </div>
              <div className='w-64  mx-auto md:mx-0 text-white'>
                Office 901, 9th Floor, Ergo Tower, Sector V, Salt lake 700091
              </div>
            </div>

            <div className=''>
              <div className='flex md:gap-20 gap-4 flex-col md:flex-row items-start'>
                {footerItems.map((arr, i) => (
                  <div className='w-full'>
                    <div className='ul list-none grid gap-4 '>
                      {arr.map((item, i) => (
                        <Link
                          to={`/${item.split(' ')[0]}`}
                          className='text-center md:text-left'
                          key={i}
                        >
                          <div className='capitalize text-white text-base '>
                            {item}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className='grid gap-4 w-full '>
                  <div className='grid gap-4 order-last md:order-first w-64 md:w-full mx-auto  text-base'>
                    <div className='flex gap-2  text-white '>
                      <span>
                        <AiOutlineMail size={20} />
                      </span>
                      Email: support@edufeat.com
                    </div>
                    <div className=''>
                      <div className='text-white'>Drop your CV: </div>
                      <div className='text-white'>tutorhr@edufeat.com</div>
                    </div>
                    <div className='flex gap-2 text-white '>
                      <span>
                        <IoCallOutline size={20} />
                      </span>
                      Phone: +91-8240014127
                    </div>
                  </div>
                  <div className='flex justify-center md:justify-start '>
                    <Button color='#29329c' className='text-white' size='md'>
                      Become a Tutor
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-4 flex gap-4 items-center md:justify-start justify-center'>
            {socialMedias.map((social, i) => (
              <div className='flex gap-2 items-center text-xl text-white'>
                {social.icon}
                <div className='text-sm text-white'>{social.label} </div>
              </div>
            ))}
          </div>
          <div className='max-w-3x text-center text-[10px] mt-16 grid gap-1'>
            <div className='text-white'>
              Copyright © 2022 edufeat.com. All Rights Reserved
            </div>{' '}
            <div className='text-white'>
              Disclaimer: The products and services provided by this website are
              solely for guidance and learning purposes.
            </div>
            <div className='text-white'>
              Students are solely responsible for doing their own work.
              Materials should not be used for any other purpose or direct
              submission.
            </div>
          </div>
        </div>
      </Content>
    </div>
  )
}
