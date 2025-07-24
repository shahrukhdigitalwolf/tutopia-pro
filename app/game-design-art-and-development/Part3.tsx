import Image from 'next/image'
import React from 'react'
import SubheadingCourse from '../components/course/SubheadingCourse';
import CourseDetailsAccordion from '../components/course/CourseDetailsAccordion';

const commonJobRoles = [
    {
        points: 'Junior Game Programmer'
    },
    {
        points: 'Gameplay Engineer'
    },
    {
        points: 'Level Scripter'
    },
    {
        points: 'Technical Game Designer'
    },
    {
        points: 'Multiplayer Systems Developer'
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
        title: 'Module 1: Introduction to Game Programming',
        duration: '1 Month',
        Objective: 'Learn programming fundamentals and Unity’s scripting system.',
        Syllabus: [
            'Basics of C# Programming (Variables, Loops, Functions)',
            'Understanding Unity’s Component System',
            'Scripting Game Objects and Simple Interactions',
            'Debugging Basics',
        ],
        Project: 'Create a simple game with interactive objects (e.g., a maze or click-based game).'
    },
    {
        title: 'Module 2: Gameplay Mechanics and Physics',
        duration: '2 Months',
        Objective: 'Implement advanced gameplay mechanics and use Unity’s physics system.',
        Syllabus: [
            'Player Movement Systems (Walking, Jumping)',
            'Physics-Based Interactions (Gravity, Collisions)',
            'Power-Ups and Temporary Abilities',
            'Animation Integration for Gameplay',
        ],
        Project: 'Develop a platformer game with collectibles and hazards.'
    },
    {
        title: 'Module 3: Mobile Game Development',
        duration: '2 Months',
        Objective: 'Introduce students to mobile game development, covering key concepts, optimization techniques and platform-specific considerations.',
        Syllabus: [
            'Introduction to Mobile Game Development',
            'Unity’s Universal Render Pipeline',
            'Optimizing Performance for Mobile Games',
            'Implementing Mobile Controls & Input Systems',
            'Testing & Debugging on Mobile Devices',
            'Google Play deployment process',
        ],
        Project: 'Create a small mobile puzzle game that includes interactive UI elements, responsive touch controls.'
    },
    {
        title: 'Module 4: Multiplayer Systems',
        duration: '2 Months',
        Objective: 'Learn the basics of multiplayer game development, networking, and real-time interactions.',
        Syllabus: [
            'Networking Concepts for Games (P2P vs. Client-Server)',
            'Synchronizing Game States Across Players',
            'Real-Time Interaction (Chat, Leaderboards)',
            'Basic Multiplayer Game Prototype',
        ],
        Project: 'Create a simple multiplayer game (e.g., a 2-player racing game or battle arena).'
    },
    {
        title: 'Module 5: Game AI, Procedural Systems and VR implementation',
        duration: '2 Months',
        Objective: 'Introduce AI systems and procedural content generation.',
        Syllabus: [
            'Basics of Game AI: Pathfinding',
            'AI Behavior, Goal-Oriented AI',
            'Procedural Level Generation Techniques',
            'Adaptive AI and Difficulty Adjustment',
            'Setup and work around in VR',
            'Implementing playable VR Control',
        ],
        Project: 'Build a game with AI-controlled characters and also make it in a VR Environment (e.g., enemies or NPCs).'
    },
    {
        title: 'Module 6: Game Optimization and Deployment',
        duration: '1 Month',
        Objective: 'Prepare games for deployment across platforms while optimizing performance.',
        Syllabus: [
            'Asset Optimization (Textures, Models, Audio)',
            'Performance Profiling Using Unity Tools',
            'Cross-Platform Deployment for PC and Mobile',
            'Game Marketing and Publishing Basics',
            'Setup and work around in VR',
            'Implementing playable VR Control',
        ],
        Project: 'Build a game with AI-controlled characters and also make it in a VR Environment (e.g., enemies or NPCs).'
    },
    {
        title: 'Module 7: Project (Package and publish a complete game prototype to a platform of choice)',
        duration: '1 Month',
        Objective: '',
        Syllabus: [
            'Publishing of game',
            'Monetization',
            'In-App Purchase',
        ],
        Project: ''
    },
]

function Part3() {
    return (
        <>
            <div className='mb-3'>
                <span className='bg-[#44b8a5] text-white font-semibold px-4 py-2 rounded'>Part 3</span>
                <h2 className="text-[25px] text-white mt-3 leading-tight">Game Development ( 11 Months )</h2>
            </div>
            <div className="border border-[#6bffca] mb-10 mt-5">
                <div className="bg-[#232428] py-3 px-3">
                    <p className="text-white text-[18px] font-bold">
                        Objective:
                    </p>
                </div>
                <div className="px-3 py-5">
                    <p className="text-white">
                        Teach the skills needed to implement and develop fully functional games using Unity. Students will learn coding basics, multiplayer systems, AI, and deployment.
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
                    <SubheadingCourse text="Game Development Projects" />
                </div>
                <div>
                    <ul className="list-decimal ps-5 text-white">
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Puzzle Game Prototype (Game Design Focus) [Mobile+PC+Web]</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Design a simple puzzle game with engaging mechanics and level progression.</li>
                                <li>Tools: Unity (non-coding prototyping).</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Platformer with Physics (Game Development Focus) [Mobile + console]</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Create a 2D platformer game featuring gravity, power-ups, and animations.</li>
                                <li>Tools: Unity, C#.</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">Multiplayer Racing Game [PC]</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Develop a racing game with real-time multiplayer capabilities and leaderboards.</li>
                                <li>Tools: Unity Networking (Photon PUN).</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">AI Adventure Game [PC+Mobile]</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Design a game where AI-driven NPCs interact with the player, creating dynamic challenges.</li>
                                <li>Tools: Unity, NavMesh.</li>
                            </ul>
                        </li>
                        <li className="mb-3">
                            <span className="text-[20px] text-[#6bffca] font-semibold">End-to-End Game Prototype [Web]</span>
                            <ul className="list-disc text-white ps-5 mt-2">
                                <li>Create a fully functional game combining learned skills, from mechanics to deployment.</li>
                                <li>Tools: Unity, Unity Profiler for optimization.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Part3
