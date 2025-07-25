import React from 'react'
import LpHeader from '../components/header/LpHeader'
import HeroBannerCourses from '../components/course/HeroBannerCourses'
import FormDefault from '../components/FormDefault'
import SubheadingCourse from '../components/course/SubheadingCourse'
import CourseModuleAccordion from './CourseModuleAccordion'

const heroBanner = {
    breadcrumb: 'Certificate Course',
    heading: 'Digital Marketing Course [ 6 Months ]',
    desc: 'Early exit after 13 months with Certification in Game Design & Art.'
}

/* const courseInclude = [
    {
        title: 'Become proficient in Business analysis techniques to work with complex datasets and uncover meaningful insights.',
    },
    {
        title: 'Learn to drive business decisions by extracting actionable insights from raw data.',
    },
    {
        title: 'Develop expertise in statistical methods for making informed, data-backed recommendations. ',
    },
    {
        title: 'Gain hands-on experience for effective data manipulation and analysis.',
    },
    {
        title: 'Master tools like Tableau, Power BI, and Excel to create impactful data visualizations. ',
    },
    {
        title: 'Build expertise in documenting and analysing business requirements to align data strategies with organizational goals. ',
    },
    {
        title: 'Understand process optimization methodologies for improving business efficiency. ',
    },
    {
        title: 'Enhance communication skills to present data-driven insights clearly to diverse stakeholders.',
    },
] */

function DigitalMarketing() {
    return (
        <>
            <LpHeader />
            <main className="bg-[#000000]">
                <section className="bg-[#0c0c0c] py-6 lg:py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-[60%]">
                                <HeroBannerCourses
                                    heroBanner={heroBanner}
                                />
                            </div>
                            <div className="w-full lg:w-[30%]"></div>
                        </div>
                    </div>
                </section>

                <section className="py-6">
                    <div className="container mx-auto px-4">

                        <div className="flex flex-wrap justify-center">

                            <div className="w-full lg:w-[60%] md:px-1.5">

                                <div>
                                    {/* <div className="border border-[#6bffca] mb-10 mt-5">
                                        <div className="bg-[#232428] py-3 px-3">
                                            <p className="text-white text-[18px] font-bold">
                                                Objective:
                                            </p>
                                        </div>
                                        <div className="px-3 py-5">
                                            <p className="text-white">
                                                Equip students with practical knowledge and skills to analyse complex datasets,
                                                extract actionable insights, and optimize business processes using industry-standard tools. Tools are
                                                introduced progressively to ensure in-depth learning.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-10">
                                        <h2 className='text-[20px] lg:text-[25px] font-bold text-white'>What You Will Achieve By completing this course, learners will:</h2>
                                        <div className="flex flex-wrap gap-y-3 mt-3">
                                            {courseInclude.map((ele, i) => (
                                                <div key={i} className="w-full md:w-[100%] px-1.5">
                                                    <div className="flex items-start gap-x-2">
                                                        <Image
                                                            className="w-4 h-auto"
                                                            src="/assets/icons/tick.png"
                                                            alt="tick"
                                                            width={20}
                                                            height={20}
                                                        />
                                                        <span className="text-white">{ele.title}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}


                                    <div className="mb-10">
                                        <SubheadingCourse text="Course Details" />
                                        <div>
                                            <CourseModuleAccordion/>
                                        </div>
                                    </div>
                                </div>


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
        </>
    )
}

export default DigitalMarketing

