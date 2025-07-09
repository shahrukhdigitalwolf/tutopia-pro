"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";

const accordionData = [
  {
    title: "Introduction",
    innerDetails: [
      {
        desc: "Course Introduction",
        icon: "/assets/icons/video.png",
        lecture: "5 lecture",
        totalTime: "5 min",
        time: "04:42",
        vidUrl: "",
      },
      {
        desc: "Course Introduction",
        icon: "/assets/icons/video.png",
        lecture: "5 lecture",
        totalTime: "5 min",
        time: "04:42",
        vidUrl: "",
      },
    ],
  },
  {
    title: "Code & Slides Download",
    innerDetails: [
      {
        desc: "Code & Slides Download",
        icon: "/assets/icons/video.png",
        lecture: "5 lecture",
        totalTime: "5 min",
        time: "04:42",
        vidUrl: "",
      },
    ],
  },
];

const CourseDetailsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first item open

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-full mx-auto mt-5">
      {accordionData.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="bg-gray-800 mb-5">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-[20px] text-left text-white px-4 py-3 font-bold hover:bg-gray-700 transition"
            >
              <span>{item.title}</span>
              <span className="text-xl">
                {isOpen ? <RemoveIcon /> : <AddIcon />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-900 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.innerDetails.map((ele, j) => {
                return (
                  <div key={j} className="flex flex-wrap px-5 py-3">
                    <div className="w-full md:w-[80%]">
                      <div className="flex items-center gap-x-2">
                        <Image
                          src={ele.icon}
                          alt="icons"
                          width={20}
                          height={20}
                        />
                        <span className="text-white text-[15px]">
                          {ele.desc}
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-[20%]">
                      <p className="text-white text-[15px] text-right">
                        {ele.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseDetailsAccordion;
