import Image from 'next/image'
import React from 'react'
import SubheadingCourse from '../components/course/SubheadingCourse';
import CourseDetailsAccordion from '../components/course/CourseDetailsAccordion';

const commonJobRoles = [
    {
        points: 'Junior Game Designer'
    },
    {
        points: 'Level Designer'
    },
    {
        points: 'Narrative Designer (Entry-Level)'
    },
    {
        points: 'Gameplay Tester/QA Tester'
    },
    {
        points: 'Game Prototyping Specialist'
    },
]

const courseInclude = [
    {
        title: 'No Prior Programming Experience Required',
        icon: '/assets/icons/tick.png'
    },
    {
        title: 'Any Background',
        icon: '/assets/icons/tick.png'
    },
    {
        title: 'Basic Computer Skills',
        icon: '/assets/icons/tick.png'
    },
    {
        title: 'For Part 3: Game Development, a background in science or an interest in coding is recommended, Exposure to coding is added advantage.',
        icon: '/assets/icons/tick.png'
    },
]

const courseDetails = [
    {
        title: 'Module1: Fundamentals of Game Design',
        duration: '1 Month',
        Objective: 'Understand the core principles of game design, genres, and essential tools.',
        Syllabus: [
            'What is Game Design?',
            'History of Video Games and Genres',
            'Role of Game Designers in Development Teams',
            'Game Design Documentation (GDD) Basics',
            'Tools for Prototyping and Wireframing'
        ],
        Project: 'Create a basic Game Concept Document for a chosen genre.'
    },
    {
        title: 'Module 2: Game Mechanics and Systems',
        duration: '1 Months',
        Objective: 'Explore the building blocks of games, including mechanics, systems, and feedback loops.',
        Syllabus: [
            'Core Gameplay Loops and Progression Systems',
            'Scoring, Rewards, and Feedback Mechanisms',
            'Procedural Game Mechanics and Emergent Gameplay (NEW)',
            'What is procedural game design?',
            'Prototyping Gameplay Systems Using Paper or Digital Tools'
        ],
        Project: 'Design a paper prototype of a game with scoring and progression systems.'
    },
    {
        title: 'Module 3: Level and Narrative Design',
        duration: '1 Months',
        Objective: 'Focus on creating compelling levels and engaging narratives for games.',
        Syllabus: [
            'Basics of Level Design: Flow and Navigation',
            'Environmental Storytelling',
            'Branching Narratives and Player Choice',
            'Rapid Level Prototyping in Unity (No Coding)',
        ],
        Project: 'Create a mock-up level design and a branching narrative for an RPG.'
    },
]

function Part1() {
    return (
        <div className='border-b border-[#252525] mb-10' id='part1'>
            <div className='mb-3'>
                <span className='bg-[#44b8a5] text-white font-semibold px-4 py-2 rounded'>Part 1</span>
                <h2 className="text-[25px] text-white mt-3">Game Design ( 3 Months )</h2>
            </div>
            <div className="border border-[#6bffca] mb-10 mt-5">
                <div className="bg-[#232428] py-3 px-3">
                    <p className="text-white text-[18px] font-bold">
                        Objective:
                    </p>
                </div>
                <div className="px-3 py-5">
                    <p className="text-white">
                        Provide foundational knowledge in game design, including mechanics, player psychology, level design, and prototyping. By the end of this part, students will be equipped to conceptualize and prototype game ideas.
                    </p>
                </div>
            </div>
            <div className="border border-[#6bffca] mb-10">
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
            </div>

            <div className="mb-10">
                <SubheadingCourse text="Prerequisite:" />
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

            <div className="mb-10">
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
            </div>

            <div className="mb-10">
                <SubheadingCourse text="Course Details" />
                <div>
                    <CourseDetailsAccordion
                        courseDetails={courseDetails}
                    />
                </div>
            </div>

            <div className="mb-10">
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
            </div>
        </div>
    )
}

export default Part1
