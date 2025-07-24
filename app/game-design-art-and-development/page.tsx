import React from "react";
import HeroBannerCourses from "../components/course/HeroBannerCourses";
import FormDefault from "../components/FormDefault";
import LpHeader from "../components/header/LpHeader";
import Footer from "../components/footer/Footer";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";


function page() {
  return (
    <>
      <LpHeader />
      <main className="bg-[#000000]">
        <section className="bg-[#0c0c0c] py-6 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-[60%]">
                <HeroBannerCourses />
              </div>
              <div className="w-full lg:w-[30%]"></div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="container mx-auto px-4">

            <div className="flex flex-wrap justify-center">

              <div className="w-full lg:w-[60%] md:px-1.5">

                {/* --------------------- */}
                <Part1 />
                {/* ------------------- */}
                <Part2 />
                {/* -------------------- */}
                <Part3 />
                {/* -------------------- */}

                {/* <div className="mb-10">
                  <div className="mb-3">
                    <SubheadingCourse text="Description" />
                  </div>
                  <CourseDescription />
                </div>

                <div className="mb-10">
                  <FeatureReview />
                </div>

                <div className="mb-10">
                  <div className="mb-3">
                    <SubheadingCourse text='Students also bought' />
                  </div>
                  <SuggestionCourses />
                </div>

                <div>
                  <div className="flex items-center gap-x-2">
                    <StarOutlinedIcon sx={{ fontSize: '17px' }} className='text-amber-600' />
                    <span className="text-white text-[18px] md:text-[25px] font-bold"> 4.7 course rating</span>
                    <span className="text-white text-[18px] md:text-[25px] font-bold">|</span>
                    <span className="text-white text-[18px] md:text-[25px] font-bold">256K ratings</span>
                  </div>
                  <div className="flex flex-wrap gap-y-5 mt-5">
                    {
                      reviewData.slice().reverse().slice(0, 4).map((ele, i) => {
                        return (
                          <div key={i} className="w-full md:w-[50%] px-2">
                            <CourseReview
                              name={ele.userName}
                              review={ele.review}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="mt-5">
                    <CourseReviewPopup />
                  </div>
                </div> */}

              </div>

              {/* ------------------------------------ */}

              <div className="w-full lg:w-[30%] md:px-1.5 relative">
                <div className="sticky top-18">
                  <FormDefault />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page;
