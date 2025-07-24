import Image from 'next/image'
import React from 'react'
import SubheadingCourse from '../components/course/SubheadingCourse';
import CourseDetailsAccordion from '../components/course/CourseDetailsAccordion';

const commonJobRoles = [
    {
        points: '3D Artist'
    },
    {
        points: 'Environment Artist'
    },
    {
        points: 'Lighting Artist'
    },
    {
        points: 'Technical Artist (Entry-Level)'
    },
    {
        points: 'Texture Artist'
    },
    {
        points: 'Character Artist'
    },
    {
        points: 'VFX Artist'
    },
    {
        points: 'Technical Artist (Advanced)'
    },
    {
        points: 'Senior 3D Artist'
    },
    {
        points: 'Pipeline TD (Technical Director)'
    },
]

/* const courseInclude = [
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
] */

const courseDetails = [
    {
        title: 'Module 1: 3D Modeling for Games',
        duration: '2.5 Months',
        Objective: 'Learn to create game-ready 3D models using industry-standard tools and workflows.',
        Syllabus: [
            'Basics of 3D Modeling: Primitives and Topology',
            'Low-Poly vs. High-Poly Modeling',
            'Introduction to Maya',
            'Hard Surface & Organic Modeling Techniques ',
            'Exporting and Optimizing Models for Game Engine'
        ],
        Project: 'Create a set of low-poly props for a themed game environment.'
    },
    {
        title: 'Module 2: Texturing and Material Creation',
        duration: '2.5 Months',
        Objective: 'Master the art of texturing and creating realistic or stylized materials for game assets.',
        Syllabus: [
            'UV Mapping Basics and Advanced Techniques',
            'Using Substance Painter or Photoshop for Texturing',
            'Physically Based Rendering (PBR) Materials',
            'Stylized vs. Realistic Textures',
            'Advanced Texturing Workflow '
        ],
        Project: 'Design textures for a 3D model and apply them using a game engine.'
    },
    {
        title: 'Module 3: Environment and Prop Design',
        duration: '2 Months',
        Objective: 'Focus on designing immersive game environments and detailed props.',
        Syllabus: [
            'Principles of Environmental Composition',
            'Modular Asset Design for Environments',
            'Terrain Design and Detailing (Vegetation, Rocks, Water)',
            'Lighting and Atmosphere Setup in Unity',
        ],
        Project: 'Create a small, themed environment with props and lighting.'
    },
    {
        title: 'Module 4: Animation and VFX for Game Art',
        duration: '2 Months',
        Objective: 'Learn basic animation and visual effects techniques to enhance game art.',
        Syllabus: [
            'Rigging and Skinning for Game Assets',
            'Keyframe Animation Basics',
            'Particle Systems for Effects (Smoke, Fire, Explosions)',
            'Shader Graph and Custom Material Effects',
            'Real-time VFX Optimization ',
        ],
        Project: 'Create a rigged character or prop with simple animations and effects.'
    },
    {
        title: 'Module 5: Portfolio and Final Art Project',
        duration: '1 Month',
        Objective: 'Build a professional portfolio showcasing high-quality game art projects.',
        Syllabus: [
            'Selecting and Refining Portfolio Pieces',
            'Creating Turntable Renders',
            'Setting Up Online Portfolios (Art-Station, Behance)',
            'Finalizing and Presenting the Capstone Project',
            'Industry Portfolio Review & Feedback (Newly added topic)',
        ],
        Project: 'Develop a fully realized game environment or character as a capstone project.'
    },
]

function Part2() {
    return (
        <div className='border-b border-[#252525] mb-10'>
            <div className='mb-3'>
                <span className='bg-[#44b8a5] text-white font-semibold px-4 py-2 rounded'>Part 2</span>
                <h2 className="text-[25px] text-white mt-3 leading-tight">Game Art Asset Development ( 10 Months )</h2>
            </div>
            <div className="border border-[#6bffca] mb-10 mt-5">
                <div className="bg-[#232428] py-3 px-3">
                    <p className="text-white text-[18px] font-bold">
                        Objective:
                    </p>
                </div>
                <div className="px-3 py-5">
                    <p className="text-white">
                        Equip students with skills in 3D modeling, texturing, lighting, environment art, and animation to create high-quality game art assets.
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

            {/* <div className="mb-10">
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
            </div> */}

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
                    <CourseDetailsAccordion
                        courseDetails={courseDetails}
                    />
                </div>
            </div>

            <div className="mb-10">
                <div className="mb-3">
                    <SubheadingCourse text="Game Art Projects" />
                </div>
                <div>
                    <ul className="list-decimal ps-5 text-white">
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Stylized Prop Set</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Create a themed set of props (e.g., medieval tools or sci-fi gadgets) with stylized textures.</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Environment Art Scene</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Develop a small environment (e.g., forest clearing, room interior) with modular assets.</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Character Animation</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Rig and animate a simple character performing actions like walking or jumping.</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Visual Effects Demo</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Design a set of visual effects, such as a fire explosion or magical spell effect.</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Capstone Art Project</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Create a complete, polished game scene or character with textures, animations, and effects.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Part2
