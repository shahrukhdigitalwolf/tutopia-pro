'use client'
import React from 'react'
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

function FutureSlider() {
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
        <SplideSlide>
            <div>
                <div>
                    <Image className='mx-auto rounded-3xl' src="/assets/img/others/school.jpg" alt="" width={315} height={314}/>
                </div>
                <div className='text-center text-white pt-5'>
                    <h5 className='text-[25px] font-semibold mb-2'>ablished fact the reader</h5>
                    <span className='text-[20px] font-semibold'>18 Courses</span>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div>
                <div>
                    <Image className='mx-auto rounded-3xl' src="/assets/img/others/school.jpg" alt="" width={315} height={314}/>
                </div>
                <div className='text-center text-white pt-5'>
                    <h5 className='text-[25px] font-semibold mb-2'>ablished fact the reader</h5>
                    <span className='text-[20px] font-semibold'>18 Courses</span>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div>
                <div>
                    <Image className='mx-auto rounded-3xl' src="/assets/img/others/school.jpg" alt="" width={315} height={314}/>
                </div>
                <div className='text-center text-white pt-5'>
                    <h5 className='text-[25px] font-semibold mb-2'>ablished fact the reader</h5>
                    <span className='text-[20px] font-semibold'>18 Courses</span>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div>
                <div>
                    <Image className='mx-auto rounded-3xl' src="/assets/img/others/school.jpg" alt="" width={315} height={314}/>
                </div>
                <div className='text-center text-white pt-5'>
                    <h5 className='text-[25px] font-semibold mb-2'>ablished fact the reader</h5>
                    <span className='text-[20px] font-semibold'>18 Courses</span>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div>
                <div>
                    <Image className='mx-auto rounded-3xl' src="/assets/img/others/school.jpg" alt="" width={315} height={314}/>
                </div>
                <div className='text-center text-white pt-5'>
                    <h5 className='text-[25px] font-semibold mb-2'>ablished fact the reader</h5>
                    <span className='text-[20px] font-semibold'>18 Courses</span>
                </div>
            </div>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default FutureSlider
