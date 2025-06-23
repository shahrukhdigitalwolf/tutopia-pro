'use client'
import React from 'react'
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

interface College {
  name: string;
  course: string;
  rating: string;
}

interface SliderProps {
  sliderData: College[];
}

function Slider({ sliderData }: SliderProps) {
  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 4,
          rewind: true,
          gap: '1rem',
        }}
      >
        {sliderData.map((item, index) => (
          <SplideSlide key={index}>
            <div className="bg-[#2B2B2F] p-5 rounded-[30px]">
              <div>
                <Image src="/assets/icons/fi_3008623.png" alt="" width={45} height={45} />
              </div>
              <div className="mt-2 mb-5">
                <h3 className="text-[18px] text-white leading-tight mb-3">{item.name}</h3>
                <span className="text-white text-[15px] bg-[#373337] px-2 py-1 rounded-full">{item.course}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src="/assets/icons/yellow-star.png" alt="star" width={20} height={21} />
                <p className="text-white font-medium">{item.rating}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Slider;
