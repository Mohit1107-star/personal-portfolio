import {assets} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto 
        mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            assudanimohit99@gmail.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-top
    border-gray-400 mx-[10%] mt-5 py-4'>
        <p>© 2025 Mohit Assudani. All rights reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Mohit1107-star">GitHub</a></li>
            <li><a target='_blank' href="https://in.linkedin.com/in/mohitassudani99">LinkedIn</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
