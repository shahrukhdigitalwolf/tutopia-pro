import React from 'react'
import LpHeader from '../components/header/LpHeader'
import HeroBannerCourses from '../components/course/HeroBannerCourses'
import FormDefault from '../components/FormDefault'
import Image from 'next/image'
import SubheadingCourse from '../components/course/SubheadingCourse'
import CourseModuleAccordion from './CourseModuleAccordion'

const heroBanner = {
    breadcrumb: 'Certificate Course',
    heading: 'Business Analytics Course [ 6 Months ]',
    desc: 'Early exit after 13 months with Certification in Game Design & Art.'
}

const courseInclude = [
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
]

function BusinessAnalytics() {
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

                                {/* <div className="mb-10 sticky top-15 bg-[#000] py-3">
                                    <ul className="flex items-center gap-x-3">
                                    <li>
                                        <Link className="border border-[#44b8a5] hover:bg-gray-800 text-white rounded px-5 py-1" href="#part1">Part 1</Link>
                                    </li>
                                    <li>
                                        <Link className="border border-[#44b8a5] hover:bg-gray-800 text-white rounded px-5 py-1" href="#part2">Part 2</Link>
                                    </li>
                                    <li>
                                        <Link className="border border-[#44b8a5] hover:bg-gray-800 text-white rounded px-5 py-1" href="#part3">Part 3</Link>
                                    </li>
                                    </ul>
                                </div> */}

                                <div>
                                    <div className="border border-[#6bffca] mb-10 mt-5">
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
                                    {/* <div className="border border-[#6bffca] mb-10">
                <div className="py-3 px-3">
                    <p className="text-[25px] text-white font-bold">
                        Common Job Roles:
                    </p>
                </div>
                <div className="px-3 py-5 flex flex-wrap gap-y-5">
                    {
                        commonJobRoles.map((ele, i) => (
                            <div key={i} className="w-full md:w-[50%]">
                                <div className="flex gap-x-2 items-start">
                                    <Image
                                        className="w-4 h-4 mt-1"
                                        src="/assets/icons/tick-30.png"
                                        alt=""
                                        width={25}
                                        height={25}
                                    />
                                    <p className="text-[15px] text-white">
                                        {ele.points}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div> */}

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
            </div>



                                    {/* <div className="mb-10">
                <SubheadingCourse text="Certification" />
                <div className="flex flex-wrap gap-2 mt-3">
                    {['Final Assessment', 'Project Submission', 'Project Interview'].map((ele, i) => (
                        <p
                            key={i}
                            className="border border-[#6bffca] rounded text-white px-4 py-2 hover:bg-[#333]"
                        >
                            {ele}
                        </p>
                    ))}
                </div>
            </div> */}

                                    <div className="mb-10">
                <SubheadingCourse text="Course Details" />
                <div>
                    <CourseModuleAccordion/>
                </div>
            </div>

            <div className="mb-10">
                <SubheadingCourse text="Sample Projects for the Course" />
                <div className='mt-5'>
                    <ul className='ps-3 list-decimal text-white'>
                        <li className='mb-2'>
                            <span className='text-[20px]'>Retail Sales Analysis </span>
                            <ul className='ps-3 list-disc'>
                                <li className='mt-1'>Use Excel and Power Query to clean and analyse retail data, creating an interactive 
                                dashboard. </li>
                            </ul>
                        </li>
                        <li className='mb-2'>
                            <span className='text-[20px]'>Customer Segmentation Using SQL</span>
                            <ul className='ps-3 list-disc'>
                                <li className='mt-1'>Write SQL queries to identify customer groups based on behaviour.</li>
                            </ul>
                        </li>
                        <li className='mb-2'>
                            <span className='text-[20px]'>Marketing Campaign Analysis</span>
                            <ul className='ps-3 list-disc'>
                                <li className='mt-1'>Build a Power BI dashboard to assess the performance of marketing campaigns.</li>
                            </ul>
                        </li>
                        <li className='mb-2'>
                            <span className='text-[20px]'>Geospatial Sales Analysis</span>
                            <ul className='ps-3 list-disc'>
                                <li className='mt-1'>Use Tableau to visualize regional sales performance and identify growth 
                                opportunities.</li>
                            </ul>
                        </li>
                        <li className='mb-2'>
                            <span className='text-[20px]'>Capstone: End-to-End Analytics Solution</span>
                            <ul className='ps-3 list-disc'>
                                <li className='mt-1'>Combine data cleaning (Power Query), analysis (SQL), and visualization (Power 
                                    BI/Tableau) to solve a business problem.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

                                    {/*  <div className="mb-10">
                <div className="mb-3">
                    <SubheadingCourse text="Game Design Projects" />
                </div>
                <div>
                    <ul className="list-decimal ps-5 text-white">
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Game Concept Document</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Create a detailed concept for a game, including mechanics, target audience, and story.</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Paper Prototype for Mechanics</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Design a paper-based prototype to test a game mechanic.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="text-[20px] text-[#6bffca] font-semibold">Mock-Up Level Design</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Sketch or prototype a simple level for a puzzle or adventure game.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> */}
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

export default BusinessAnalytics
