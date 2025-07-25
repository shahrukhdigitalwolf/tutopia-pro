import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import HeadlineCourse from './HeadlineCourse'

interface bannerProps { heroBanner: { breadcrumb: string; heading: string; desc: string; }; }

function HeroBannerCourses({heroBanner}: bannerProps) {
    return (
        <div>
            <div className='mb-3'>
                <Breadcrumbs 
                    breadcrumb={heroBanner.breadcrumb}
                />
            </div>
            <div className='mb-3'>
                <HeadlineCourse
                    text={heroBanner.heading}
                />
            </div>
            <div className='mb-3'>
                <p className='text-white'>{heroBanner.desc}</p>
            </div>
            {/* <div className='mt-5 mb-5'>
            <span className='bg-[#44b8a5] text-white px-4 py-1 rounded'>Game Design (3 Months)</span>
        </div>
        <div className='md:flex items-center gap-x-2'>
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
        </div> */}
        </div>
    )
}

export default HeroBannerCourses