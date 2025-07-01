'use client'
import React from 'react'
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

function ProgramsSlider() {
  return (
    <div>
      <Splide
        aria-label="course Details"
        options={{
          perPage: 4,
          rewind: true,
          gap: '1rem',
        }}
      >
        {
          [...Array(6)].map((_,i)=>{
            return(
              <SplideSlide key={i}>
                  <div className='relative'>
                      <div>
                          <Image className='mx-auto rounded-xl' src="/assets/img/others/program-1.webp" alt="" width={600} height={800}/>
                      </div>
                      <div className='bg-black rounded-xl py-3 absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%]'>
                          <div className='border-b border-slate-200 text-center px-3 pb-10'>
                              <h5 className='text-[25px] font-semibold text-[#44b8a5] leading-tight'>Data Science & Ai/ML</h5>
                              <span className='text-[15px] text-white'>For B Tech, BCA & BSc Students</span>
                          </div>
                          <div className='text-center px-3 pt-3'>
                              <h5 className='text-[20px] text-[#44b8a5]'>Course Duration</h5>
                              <p className='text-white'>12 Months</p>
                          </div>
                      </div>
                  </div>
              </SplideSlide>
            )
          })
        }
      </Splide>
    </div>
  )
}

export default ProgramsSlider
