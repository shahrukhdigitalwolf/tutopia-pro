'use client'
import React from 'react'
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

function TestimonialSlider() {
  return (
    <div>
      <Splide
        aria-label="course Details"
        options={{
          perPage: 3,
          rewind: true,
          gap: '1rem',
          padding:'12rem',
        }}
      >
        {
            [...Array(5)].map((_,i)=>{
                return(
                    <SplideSlide key={i}>
                            
                        <div>
                            <div className="border-8 border-[#2B2B2F] bg-[#232428] p-4 rounded-xl">
                                <Image src='/assets/icons/quotes.png' alt="" width={40} height={40} />
                                <p className="text-white py-6 text-[15px]">“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”</p>
                                <div className="flex items-center gap-x-2">
                                <Image src='/assets/icons/avatar.png' alt="" width={48} height={48} />
                                <div>
                                    <span className="text-white font-medium">Bessie Cooper</span><br/>
                                    <span className="text-[#CCC] text-[12px]">Client proffesion</span>
                                </div>
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

export default TestimonialSlider
