import React from "react";
import HeroBannerCourses from "../components/course/HeroBannerCourses";
import Link from "next/link";
import Image from "next/image";
import SubheadingCourse from "../components/course/SubheadingCourse";
import { courseInclude } from "../data/courseInclude";
import CourseDetailsAccordion from "../components/course/CourseDetailsAccordion";


function page() {
  return (
    <main className="bg-[#000000]">
      <section className="bg-[#232428] py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-[60%]">
              <HeroBannerCourses />
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-[60%] px-1.5">
              <div className="border border-[#2c2c2c] mb-10 mt-5">
                <div className="bg-[#232428] py-3 px-3">
                  <p className="text-white text-[18px] font-bold">
                    Prepare for your certification with this course.Learn more
                  </p>
                </div>
                <div className="px-3 py-5">
                  <Link className="text-[#c0c4fc]" href="#">
                    AWS Certified Cloud Practitioner
                  </Link>
                  <p className="text-white">
                    Issued by Amazon Web Services Training and Certification
                  </p>
                </div>
              </div>
              <div className="border border-[#2c2c2c] mb-10">
                <div className="py-3 px-3">
                  <p className="text-[25px] text-white font-bold">
                    What you'll learn
                  </p>
                </div>
                <div className="px-3 py-5 flex flex-wrap gap-y-5">
                  <div className="w-full md:w-[50%]">
                    <div className="flex gap-x-2 items-start">
                      <Image
                        className="w-4 h-4 mt-1"
                        src="/assets/icons/tick-30.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                      <p className="text-[15px] text-white">
                        FULLY UPDATED FOR CLF-C02: Pass the AWS Certified Cloud
                        Practitioner Certification
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-[50%]">
                    <div className="flex gap-x-2 items-start">
                      <Image
                        className="w-4 h-4 mt-1"
                        src="/assets/icons/tick-30.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                      <p className="text-[15px] text-white">
                        Full Practice Exam with Explanations included!
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-[50%]">
                    <div className="flex gap-x-2 items-start">
                      <Image
                        className="w-4 h-4 mt-1"
                        src="/assets/icons/tick-30.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                      <p className="text-[15px] text-white">
                        Learn the AWS Fundamentals (EC2, ELB, ASG, RDS,
                        ElastiCache, S3)
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-[50%]">
                    <div className="flex gap-x-2 items-start">
                      <Image
                        className="w-4 h-4 mt-1"
                        src="/assets/icons/tick-30.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                      <p className="text-[15px] text-white">
                        All 300+ slides available as downloadable PDF
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <SubheadingCourse text="Explore related topics" />
                <div className="flex flex-wrap gap-x-2 mt-3">
                  {[...Array(2)].map((_, i) => (
                    <Link
                      href="#"
                      key={i}
                      className="border border-[#2c2c2c] rounded text-white px-4 py-2 hover:bg-[#333]"
                    >
                      Amazon AWS
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <SubheadingCourse text="This course includes:" />
                <div className="flex flex-wrap gap-y-3 mt-3">
                    {
                        courseInclude.map((ele,i)=>(
                            <div key={i} className="w-full md:w-[50%]">
                                <div className="flex items-center gap-x-2">
                                    <Image className="w-4 h-auto" src={ele.icon} alt="tick" width={20} height={20}/>
                                    <span className="text-white">{ele.title}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
              </div>

                <div>
                    <SubheadingCourse text="Course content" />
                    <div>
                        <CourseDetailsAccordion/>
                    </div>
                </div>

            </div>
            <div className="w-full lg:w-[40%] px-1.5">
              <p className="text-white">Form</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
