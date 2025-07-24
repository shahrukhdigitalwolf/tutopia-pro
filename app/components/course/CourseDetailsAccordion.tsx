"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

/* const accordionData = [
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
]; */

interface courseProps {
  courseDetails: { 
    title: string; 
    duration: string; 
    Objective: string; 
    Syllabus: string[]; 
    Project: string; 
  }[]; 
}

const CourseDetailsAccordion = ({courseDetails}: courseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-full mx-auto mt-5">
      {courseDetails.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="bg-[#232428] border border-[#6bffca] mb-5">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-[16px] md:text-[20px] text-left text-[#6bffca] px-4 py-3 font-medium md:font-bold hover:bg-gray-700 transition"
            >
              <span>{item.title}</span>
              <span className="text-xl">
                {isOpen ? <RemoveIcon /> : <AddIcon />}
              </span>
            </button>
            

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#0f1011] px-5 ${
                isOpen ? "max-h-500 opacity-100 py-4" : "max-h-0 opacity-0"
              }`}
            >
              <div>
                <p className="text-white mb-2"><b className="text-[#6bffca]">Duration: </b>{item.duration}</p>
                <p className={`text-white ${item.Objective == '' ? 'hidden' : 'block'}`}><b className="text-[#6bffca]">Objective: </b>{item.Objective}</p>
              </div>
              <div className="pt-5">
                  <h4 className="text-[#6bffca] text-xl font-semibold mb-3">Syllabus</h4>
                  <ul className="list-decimal ps-4">
                    {item.Syllabus.map((ele, j) => {
                      return (
                          <li key={j} className="text-white text-[15px] mb-2">
                            {ele}
                          </li>
                        );
                      })}
                  </ul>
              </div>
              <div className={`pt-4 ${item.Project == '' ? 'hidden' : 'block'}`}>
                <h4 className={`text-[#6bffca] text-xl font-semibold mb-1`}>Project</h4>
                <p className="text-white">{item.Project}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseDetailsAccordion;
