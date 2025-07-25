'use client'
import React from 'react'
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

interface course{
    img: string,
    title: string,
    duration: string,
    sessionHours: string,
    description: string,
    price: string
}

interface sliderProps{
    sliderData: course[]
}

function DegreeCourseSlider({sliderData} : sliderProps) {


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
            sliderData.map((ele,i)=>{
                return(
                    <SplideSlide key={i}>
                            <div className='rounded-[15px] border border-[#B0FE6A] group'>
                                <div>
                                    <Image className='rounded-t-[13px]' src={ele.img} alt='course-img' width={430} height={240} />
                                </div>
                                <div className='px-4 py-3'>
                                    <div className='mb-4'>
                                        <h2 className='text-[22px] text-white leading-tight mb-3'>{ele.title}</h2>
                                    </div>
                                    <div className='flex flex-wrap items-center gap-x-2 mb-4'>
                                        <span className='bg-[#373337] text-[15px] text-white px-3 py-1 rounded-full'>{ele.duration}</span>
                                        <span className='bg-[#373337] text-[15px] text-white px-3 py-1 rounded-full'>{ele.sessionHours}</span>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='text-[#949396]'>{ele.description}</p>
                                    </div>
                                    <div>
                                        <span className='text-white text-[20px] font-semibold'>{ele.price}</span>
                                    </div>
                                </div>
                                <div className='bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] rounded-b-[13px] transition-all duration-300 max-h-0 group-hover:max-h-[100px] group-hover:py-2 overflow-hidden'>
                                    <a href='#' className='text-center block'>View More</a>
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

export default DegreeCourseSlider
