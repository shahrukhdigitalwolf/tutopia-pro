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
          pagination:false,
          classes: {
            arrows: "splide__arrows",
            arrow: "splide__arrow !bg-[#000] lg:!w-[4em] lg:!h-[4em] bgborder !opacity-100 !top-[40%]",
            prev: "splide__arrow--prev lg:!left-[-2em]",
            next: "splide__arrow--next lg:!right-[-2em]",
          },
          breakpoints: {
            1200: { perPage: 2, gap: '1rem' },
            640 : { perPage: 1, },
          },
        }}
      >
        {
          [...Array(6)].map((_,i)=>{
            return(
              <SplideSlide key={i}>
                  <div className='relative group rounded-xl overflow-hidden'>
                      <div>
                          <Image className='mx-auto rounded-xl group-hover:scale-105 transition-all duration-500' src="/assets/img/others/program-1.webp" alt="" width={600} height={800}/>
                      </div>
                      <div className='bg-[#000000b0] rounded-xl py-3 absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] backdrop-blur-[2px]'>
                          <div className='border-b border-slate-400 text-center px-3 pb-10'>
                              <h5 className='text-[25px] font-semibold bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight'>Data Science & Ai/ML</h5>
                              <span className='text-[15px] text-white'>For B Tech, BCA & BSc Students</span>
                          </div>
                          <div className='text-center px-3 pt-3'>
                              <h5 className='text-[20px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent]'>Course Duration</h5>
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
