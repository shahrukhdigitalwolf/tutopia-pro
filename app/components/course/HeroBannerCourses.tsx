import Link from 'next/link'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import HeadlineCourse from './HeadlineCourse'
import Image from 'next/image'

function HeroBannerCourses() {
  return (
    <div>
        <div className='mb-3'>
            <Breadcrumbs/>
        </div>
        <div className='mb-3'>
            <HeadlineCourse
              text='[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025'
            />
        </div>
        <div className='mb-3'>
            <p className='text-white'>Full Practice Exam included + explanations | Learn Cloud Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!</p>
        </div>
        <div className='mt-5 mb-5'>
            <span className='bg-[#44b8a5] text-white px-4 py-1 rounded'>Bestseller</span>
        </div>
        <div className='flex items-center gap-x-2'>
            <p className='font-bold text-white'>Created by</p>
            <Link href="" className='text-[#c0c4fc]'>Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer</Link>
        </div>
        <div className='mt-5 flex items-center gap-x-3'>
            <div className='flex items-center gap-x-1'>
                <Image src='/assets/icons/exclamation-mark.png' alt='' width={20} height={20} />
                <span className='text-white'>Last updated 07/2025</span>
            </div>
            <div className='flex items-center gap-x-1'>
                <Image src='/assets/icons/globe.png' alt='' width={20} height={20} />
                <span className='text-white'>English</span>
            </div>
        </div>
    </div>
  )
}

export default HeroBannerCourses