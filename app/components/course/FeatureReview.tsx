import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
import ToggleReviewButtons from './ToggleReviewButton'

function FeatureReview() {
  return (
    <div className='bg-[#0e0e0f] border border-[#6bffca] p-5'>
        <div className='mb-5'>
            <h2 className='text-white text-[25px] font-bold'>Featured review</h2>
        </div>
        <div className='flex items-center gap-x-3'>
            <div>
                <Image className='w-18 h-18 object-cover rounded-full' src='/assets/img/faculty/3.png' alt='' width={150} height={150} />
            </div>
            <div className='text-white'>
                <h5 className='text-[20px] font-bold'>Anton Robin S.</h5>
                <p className='text-[15px]'>3 courses</p>
                <p className='text-[15px]'>2 reviews</p>
            </div>
        </div>  
        <div className='flex items-center gap-x-1 my-3'>
            <Rating name="read-only" defaultValue={5} precision={0.5} size='small' readOnly />
            <p className='text-[12px] text-slate-500'>5 years ago</p>
        </div>
        <div className='mb-5'>
            <p className='text-white'>What a Great explanation with very detail information for me as the newbie Cloud Learner. This Course is my second source after AWS APN Learning Portal. I do really enjoy and easy to understand every single topic and lab demo. I would express my thankfulness to all Instructors who created and provided this course for helping many candidates of Cloud Practitioners around the globe. Thank you from Jakarta, Indonesia.</p>
        </div>
        <div>
            <p className='text-white text-[13px] mb-3'>Was this review helpful?</p>
            <ToggleReviewButtons/>
        </div>
    </div>
  )
}

export default FeatureReview
