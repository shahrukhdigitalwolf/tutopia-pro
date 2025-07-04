"use client";
import React from "react";
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

function FutureSlider() {
  return (
    <div>
      <Splide
        aria-label="course Details"
        options={{
          perPage: 4,
          rewind: true,
          gap: "1rem",
          pagination:false,
          classes: {
            arrows: "splide__arrows",
            arrow: "splide__arrow !bg-[#000] lg:!w-[4em] lg:!h-[4em] bgborder !opacity-100 !top-[40%]",
            prev: "splide__arrow--prev lg:!left-[-2em]",
            next: "splide__arrow--next lg:!right-[-2em]",
          },
          breakpoints: {
            1200: { perPage: 3, gap: "1rem" },
            640: { perPage: 1 },
          },
        }}
      >
        {
            [...Array(6)].map((_,i)=>{
                return(
                    <SplideSlide key={i}>
                        <div>
                            <div className="overflow-hidden rounded-3xl">
                            <Image
                                className="mx-auto rounded-3xl hover:scale-105 transition-all duration-500"
                                src="/assets/img/others/school.jpg"
                                alt=""
                                width={500}
                                height={314}
                            />
                            </div>
                            <div className="text-cente pt-5">
                                <h5 className="text-[25px] text-center font-semibold mb-1 bg-gradient-to-r from-[#FFF] to-[#FFF] [background-clip:text] [-webkit-text-fill-color:transparent]">
                                    ablished fact the reader
                                </h5>
                                <p className="text-[20px] text-center font-semibold text-white">18 Courses</p>
                            </div>
                        </div>
                    </SplideSlide>
                )
            })
        }
      </Splide>
    </div>
  );
}

export default FutureSlider;
