"use client"
import Image from "next/image";
import LpHeader from "./components/header/LpHeader";
import BasicTabs from "./components/TopCollageTab";
import DegreeCourseTab from "./components/DegreeCourseTab";
import CertificateCoursesTab from "./components/CertificateCoursesTab";
import TestimonialSlider from "./components/TestimonialSlider";
import HeroBanner from "./components/home/HeroBanner";
import FutureSlider from "./components/home/FutureSlider";
import ProgramsSlider from "./components/home/ProgramsSlider";
import ExpertsCards from "./components/home/ExpertsCards";
import IndustryMoniterCards from "./components/home/IndustryMoniterCards";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import AOS from "aos";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])

  // const brandImg = [
  //   {imgSrc : '/assets/img/brand/amazone.webp',alt: 'amazone logo'},
  //   {imgSrc : '/assets/img/brand/google.webp',alt: 'google logo'},
  //   {imgSrc : '/assets/img/brand/lenovo.webp',alt: 'lenovo logo'},
  //   {imgSrc : '/assets/img/brand/microsoft.webp',alt: 'microsoft logo'},
  //   {imgSrc : '/assets/img/brand/slack.webp',alt: 'slack logo'},
  //   {imgSrc : '/assets/img/brand/youtube.webp',alt: 'youtube logo'},
  // ]

  // const topCollege = [
  //   {
  //     label: "UG/PG",
  //     data: [
  //       { name: "Jawaharlal Nehru University (JNU), Delhi", course: "20 Courses", rating: "4.4 (389 reviews)" },
  //       { name: "Indian Institute of Science (IISc), Bangalore", course: "22 Courses", rating: "4.4 (389 reviews)" },
  //       { name: "Banaras Hindu University (BHU), Uttar Pradesh", course: "16 Courses", rating: "4.4 (389 reviews)" },
  //       { name: "Vellore Institute of Technology (VIT), Tamil Nadu", course: "16 Courses", rating: "4.4 (389 reviews)" },
  //     ]
  //   },
  //   {
  //     label: "Diploma",
  //     data: [
  //       { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
  //       { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
  //       { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
  //       { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
  //     ]
  //   },
  //   {
  //     label: "PhD",
  //     data: [
  //       { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
  //       { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
  //       { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
  //       { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
  //     ]
  //   }
  // ];

  // const degreeCourse = [
  //   {
  //     label:'Degree Courses',
  //     data:[
  //       {
  //         img: '/assets/img/others/c1.jpg',
  //         title: 'MBA by Liverpool Business School (IMT Pathway)',
  //         duration: 'Master Degree - 1Yr',
  //         sessionHours: '120+ Live Session Hours',
  //         description: 'Live Case Studies and Projects',
  //         price: '180,000'
  //       },
  //       {
  //         img: '/assets/img/others/c2.jpg',
  //         title: 'MBA by Liverpool Business School (IMT Pathway)',
  //         duration: 'Master Degree - 1Yr',
  //         sessionHours: '120+ Live Session Hours',
  //         description: 'Live Case Studies and Projects',
  //         price: '180,000'
  //       }
  //     ]
  //   },
  //   {
  //     label:'Degree Courses 2',
  //     data:[
  //       {
  //         img: '/assets/img/others/c1.jpg',
  //         title: 'MBA by Liverpool Business School (IMT Pathway)',
  //         duration: 'Master Degree - 1Yr',
  //         sessionHours: '120+ Live Session Hours',
  //         description: 'Live Case Studies and Projects',
  //         price: '180,000'
  //       }
  //     ]
  //   },

  // ]

  // const certificateCourse = [
  //   {
  //     label:'BTC',
  //     data:[
  //       {
  //         img: '/assets/img/others/certificate-course-1.jpg',
  //         title: 'AWS certification program',
  //         iconList:[
  //           '/assets/icons/ps.png',
  //           '/assets/icons/ai.png',
  //           '/assets/icons/figma.png',
  //         ],
  //         duration: '4 Weeks | 60 Hours',
  //         courseType: 'Online',
  //         description: 'Over 5000+ students Enrolled',
  //         price: '180,000'
  //       }
  //     ]
  //   }
  // ]

  // const freeCourse = [
  //   {
  //     img: '/assets/img/others/certificate-course-1.jpg',
  //     title: 'AWS certification program',
  //     duration: '4 Weeks | 60 Hours',
  //     courseType: 'Online',
  //     description: 'Over 5000+ students Enrolled',
  //     price: '180,000'
      
  //   },
  //   {
  //     img: '/assets/img/others/certificate-course-1.jpg',
  //     title: 'AWS certification program',
  //     duration: '4 Weeks | 60 Hours',
  //     courseType: 'Online',
  //     description: 'Over 5000+ students Enrolled',
  //     price: '180,000'
      
  //   },
  //   {
  //     img: '/assets/img/others/certificate-course-1.jpg',
  //     title: 'AWS certification program',
  //     duration: '4 Weeks | 60 Hours',
  //     courseType: 'Online',
  //     description: 'Over 5000+ students Enrolled',
  //     price: '180,000'
      
  //   },
  //   {
  //     img: '/assets/img/others/certificate-course-1.jpg',
  //     title: 'AWS certification program',
  //     duration: '4 Weeks | 60 Hours',
  //     courseType: 'Online',
  //     description: 'Over 5000+ students Enrolled',
  //     price: '180,000'
      
  //   },
  // ]

  // const faculty = [
  //     {
  //       img:'/assets/img/faculty/1.png',
  //       name: 'Darrell Steward',
  //       degisnation: 'CEO & Founder',
  //       icon:'/assets/icons/yt.png'
  //     },
  //     {
  //       img:'/assets/img/faculty/2.png',
  //       name: 'Cody Fisher',
  //       degisnation: 'Project Manager',
  //       icon:'/assets/icons/yt.png'
  //     },
  //     {
  //       img:'/assets/img/faculty/3.png',
  //       name: 'Marvin McKinney',
  //       degisnation: 'Product Designer',
  //       icon:'/assets/icons/yt.png'
  //     },
  //     {
  //       img:'/assets/img/faculty/4.png',
  //       name: 'Leslie Alexander',
  //       degisnation: 'UI Designer',
  //       icon:'/assets/icons/yt.png'
  //     },
  // ]

  // const awards = [
  //   {
  //     img: '/assets/img/awards/awards1.webp',
  //     title: "Best Online Learning Platform",
  //     text: "Recognized by [Awarding Organization] for innovation in e-learning and student engagement."
  //   },
  //   {
  //     img: '/assets/img/awards/awards2.webp',
  //     title: "Top EdTech Startup",
  //     text: "Honored by [Industry Association] for revolutionizing career-focused online education."
  //   },
  //   {
  //     img: '/assets/img/awards/awards3.webp',
  //     title: "Excellence in Upskilling",
  //     text: "Awarded by [Tech/Business Forum] for bridging skill gaps with industry-relevant courses."
  //   },
  //   {
  //     img: '/assets/img/awards/awards4.webp',
  //     title: "Most Trusted Learning Platform",
  //     text: "Voted by students and professionals for high-impact career transformation."
  //   },
  // ];
  
  return (
    <>
        <LpHeader/>
        <main className="bg-[#232428]">
          <HeroBanner/>
          <section className="bg-black py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <h2 className="text-[45px] text-[#31ffcb] font-semibold">YOUR NEXT BIG STEP AFTER 10+2!</h2>
                <p className="text-[30px] text-white leading-tight">Choose the perfect UG/PG program<br/>
                from top universities and shape your future.</p>
              </div>
              <FutureSlider/>
            </div>
          </section>

          <section className="py-20 bg-[#44b8a5]">
            <div className="conatiner mx-auto px-4">
              <h2 className="text-center text-white text-[25px] lg:text-[50px] font-bold max-w-full w-[1300px] mx-auto leading-tight">IS A DEGREE COURSE ENOUGH
              TO FACE THE EVOLVING JOB MARKET?</h2>
              <h3 className="text-center text-black text-[25px] lg:text-[50px] font-bold max-w-full w-[1300px] mx-auto leading-tight">THE ANSWER IS A BIG NO!</h3>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap text-center">
                  <div className="w-full lg:w-[45%]">
                    <div className="bg-[#44b8a5] py-2 rounded-xl mb-5">
                      <span className="text-[40px] font-bold ">Why?</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl border-2 border-[#44b8a5] mb-5 h-[150px] flex justify-center flex-col">
                      <span className="text-white text-[22px] font-[200]">Many academic programs have yet to align fully with evolving industry demands.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl border-2 border-[#44b8a5] mb-5 h-[150px] flex justify-center flex-col">
                      <span className="text-white text-[22px] font-[200]">A lack of hands-on learning leaves graduates unprepared for real-world challenges, as employers prioritize practical skills.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl border-2 border-[#44b8a5] mb-5 h-[150px] flex justify-center flex-col">
                      <span className="text-white text-[22px] font-[200]">Rapid advancements require continuous skill upgrades, yet many students struggle to adapt.</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[10%] relative">
                    <div className="h-1 border-b-2 border-dashed border-[#44b8a5] absolute top-[27%] left-0 w-full"></div>
                    <div className="h-1 border-b-2 border-dashed border-[#44b8a5] absolute top-[55%] left-0 w-full"></div>
                    <div className="h-1 border-b-2 border-dashed border-[#44b8a5] absolute top-[85%] left-0 w-full"></div>
                  </div>
                  <div className="w-full lg:w-[45%]">
                    <div className="bg-[#44b8a5] py-2 rounded-xl mb-5">
                      <span className="text-[40px] font-bold">WHAT NEEDS TO BE DONE?</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl border-2 border-[#44b8a5] mb-5 h-[150px] flex justify-center flex-col">
                      <span className="text-white text-[22px] font-[200]">Enhance your degree with industry-relevant skill training, updated to keep pace with the latest trends and technological advancements.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl border-2 border-[#44b8a5] mb-5 h-[150px] flex justify-center flex-col">
                      <span className="text-white text-[22px] font-[200]">Acquire practical experience through project-based training modules and internships.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl border-2 border-[#44b8a5] mb-5 h-[150px] flex justify-center flex-col">
                      <span className="text-white text-[22px] font-[200]">Develop a strong portfolio with real-world projects that showcase your skills.</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="bg-[#000] py-5 px-4 rounded-xl border-2 border-[#44b8a5] mb-5">
                      <span className="text-white text-[22px] font-bold">TutopiaPRO serves as a transformative platform, bridging academia with the industry.</span>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          <section className="bg-black">
              <div className="bg-[#44b8a5] py-10">
                <h2 className="text-center text-[25px] lg:text-[45px] font-bold">JOIN PLACEMENT FOCUSED CERTIFICATE COURSES, TODAY!</h2>
              </div>
              <div className="container mx-auto px-4">
                <div className="text-center my-15">
                  <h3 className="text-[25px] lg:text-[40px] text-[#44b8a5]">How <span className="font-bold">TutopiaPRO</span> Empowers Students</h3>
                  <p className="text-white max-w-full w-[900px] mx-auto"> 
                      Cut through the confusion and gain clarity. Designed for B.Tech, BCA, BBA, and General Degree students,
                      TutopiaPRO bridges the gap between academia and industry with expert mentorship, real-world training,
                      and assured placement support-equipping you with the right skills for success
                  </p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[33.33%]">
                      <div className="border-2 border-[#44b8a5] bg-[#232428] ps-8 py-10 rounded-xl mb-5" style={{clipPath:'polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0)'}}>
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[30px] text-center text-white border-2 border-[#44b8a5] w-14 h-14 rounded-full flex justify-center flex-col">1</p>
                          </div>
                          <div>
                            <h4 className="text-[25px] text-[#44b8a5] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-[#44b8a5] bg-[#232428] ps-8 py-10 rounded-xl mb-5" style={{clipPath:'polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0)'}}>
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[30px] text-center text-white border-2 border-[#44b8a5] w-14 h-14 rounded-full flex justify-center flex-col">2</p>
                          </div>
                          <div>
                            <h4 className="text-[25px] text-[#44b8a5] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-[33.33%]">
                      <Image className="mx-auto" src="/assets/img/others/boy-2.jpg" alt="" width={400} height={500} />
                    </div>
                    <div className="w-full lg:w-[33.33%]">
                    <div className="border-2 border-[#44b8a5] bg-[#232428] ps-10 py-10 rounded-xl mb-5" style={{clipPath:'polygon(20% 0, 100% 0%, 100% 100%, 20% 100%, 0 50%)'}}>
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[30px] text-center text-white border-2 border-[#44b8a5] w-14 h-14 rounded-full flex justify-center flex-col">3</p>
                          </div>
                          <div>
                            <h4 className="text-[25px] text-[#44b8a5] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-[#44b8a5] bg-[#232428] ps-10 py-10 rounded-xl mb-5" style={{clipPath:'polygon(20% 0, 100% 0%, 100% 100%, 20% 100%, 0 50%)'}}>
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[30px] text-center text-white border-2 border-[#44b8a5] w-14 h-14 rounded-full flex justify-center flex-col">4</p>
                          </div>
                          <div>
                            <h4 className="text-[25px] text-[#44b8a5] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="mb-5">
                <h2 className="text-[25px] lg:text-[45px] text-white font-semibold text-center" data-aos="zoom-out-down">TutopiaPRO</h2>
                <p className="text-center text-[#44b8a5] text-[30px] leading-tight">CERTIFICATION PROGRAMS ARE DESIGNED BY INDUSTRY EXPERTS,<br/>
                TAILORED FOR REAL-WORLD PLACEMENTS.</p>
              </div>
              <div>
                <ProgramsSlider/>
              </div>
              <div className="mt-8">
                <p className="text-center text-white text-[20px]">CHOOSE ANY PROGRAM TO UPSKILL AND BUILD A BRILLIANT CAREER.</p>
              </div>
            </div>
          </section>

          <section className="bg-black px-4 lg:px-0">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-[50%] lg:ps-28 py-6 lg:py-20 flex flex-col justify-center">
                    <div>
                      <h2 className="text-[25px] lg:text-[30px] text-[#44b8a5] font-semibold leading-tight">Our Unique Methodology for<br/>
                        Smarter Learning & Deeper Understanding</h2>  
                    </div>
                    <div className="mt-8">
                      <div className="flex items-center gap-x-2">
                        <Image src="/assets/icons/flip.png" alt="flip" width={50} height={50} />
                        <h3 className="text-white text-[30px] font-semibold">FLIP METHOD OF TEACHING</h3>
                      </div>
                      <p className="text-white">Traditional learning can leave students struggling with new concepts. The Flip Method turns this
                      around by preparing students before class, making live sessions more interactive and effective.</p>
                    </div>
                    <div className="max-w-full w-[500px] mt-8">
                      <div className="flex items-center gap-x-2 border-2 border-[#44b8a5] rounded-xl p-4">
                        <div>
                          <Image src="/assets/icons/quotes.png" alt="flip" width={50} height={50} />
                        </div>
                        <div>
                          <h5 className="text-[#44b8a5] text-[20px] font-semibold">Pre-Class Preparation</h5>
                          <p className="text-white">Students watch structured video tutorials to build
                          a strong foundation before live sessions.</p>
                        </div>
                      </div>
                      <div>
                        <Image className="rotate-90 mx-auto" src='/assets/icons/arrow.png' alt="arrow" width={50} height={50} />
                      </div>
                      <div className="flex items-center gap-x-2 border-2 border-[#44b8a5] rounded-xl p-4">
                        <div>
                          <Image src="/assets/icons/quotes.png" alt="flip" width={50} height={50} />
                        </div>
                        <div>
                          <h5 className="text-[#44b8a5] text-[20px] font-semibold">Interactive Live Classes</h5>
                          <p className="text-white">With prior knowledge, students engage in
                          discussions, ask questions and clarify doubts</p>
                        </div>
                      </div>
                      <div>
                        <Image className="rotate-90 mx-auto" src='/assets/icons/arrow.png' alt="arrow" width={50} height={50} />
                      </div>
                      <div className="flex items-center gap-x-2 border-2 border-[#44b8a5] rounded-xl p-4">
                        <div>
                          <Image src="/assets/icons/quotes.png" alt="flip" width={50} height={50} />
                        </div>
                        <div>
                          <h5 className="text-[#44b8a5] text-[20px] font-semibold">Daily Mock Test</h5>
                          <p className="text-white">Short post-class assessments reinforce learning
                          and ensure steady improvement.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <p className="text-[#44b8a5] text-[25px] leading-tight">By flipping the learning process, students gain clarity,
                      confidence and real understanding.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] flex justify-end flex-col">
                    <Image className="ms-auto" src="/assets/img/others/boy-3.webp" alt="" width={800} height={838} />
                </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-full w-[900px] mx-auto mb-6">
                  <h2 className="text-[25px] lg:text-[45px] text-white leading-tight" data-aos="zoom-out-down">Meet the Experts Behind TutopiaPRO</h2>
                  <p className="text-white text-[20px]">
                    We extend our gratitude to senior professionals from leading IT and tech
                    companies for vetting our courses. Their expertise ensures industry relevance,
                    bridging the gap between academics and professional success.</p>
                </div>
                <div className="flex flex-wrap gap-y-5 max-w-full w-[1200px] mx-auto">
                  {
                    [...Array(6)].map((_,i)=>{
                      return(
                        <div key={i} className="w-full md:w-[50%] lg:w-[33.33%] px-2">
                          <ExpertsCards/>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
          </section>
          
          <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-full w-[1000px] mx-auto mb-6">
                  <h2 className="text-[25px] lg:text-[45px] text-white leading-tight">INTRODUCING OUR<br/>
                  ESTEEMED INDUSTRY MENTORS</h2>
                  <p className="text-white">
                    At TutopiaPRO, well known industry experts mentor students, bringing real-world experience into the virtual classroom.
                    With deep insights into emerging technologies, our instructors bridge the gap between academia and industry.
                    Through live interactive sessions, hands-on projects and personalized mentorship, students master practical skills and
                    develop a problem-solving mind-set. Guided by the best, they embark on a transformative learning journey-preparing
                    for a future of limitless opportunities.  
                  </p>
                </div>
                <div className="flex flex-wrap gap-y-5 max-w-full w-[1200px] mx-auto">
                  {
                    [...Array(6)].map((_,i)=>{
                      return(
                        <div key={i} className="w-full md:w-[50%] lg:w-[33.33%] px-2">
                          <IndustryMoniterCards/>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
          </section>
          

            {/* <section className="py-12 bg-[#232428]">
              <div className="max-w-full w-[1200px] mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-[50%] flex justify-center flex-col">
                      <div>
                        <span className="text-[65px] font-semibold bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] [background-clip:text] [-webkit-text-fill-color:transparent]">UI UX</span>
                        <h1 className="text-[65px] font-semibold text-[#FFFFFF] leading-tight">Masterclass</h1>
                        <div className="flex gap-x-2 items-center mb-8">
                          <span className="text-[18px] text-[#919296] font-[500]">Lesson 40</span>
                          <span className="text-[18px] text-[#919296] bg-[#313538] font-[500] px-4 rounded-full">Free</span>
                        </div>
                        <div>
                          <button className="bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] [background-clip:text] [-webkit-text-fill-color:transparent] border border-[#B0FE6A] px-6 py-1.5 rounded-full">Join Today</button>
                        </div>
                      </div>
                  </div>
                  <div className="w-full lg:w-[50%] relative">
                      <div className="flex flex-wrap gap-y-3">
                          <div className="w-[50%] px-1.5">
                            <div className="bg-[#313538] max-w-full w-[300px] h-[190px] rounded-3xl p-5 flex justify-around flex-col">
                              <p className="text-[35px] text-[#FFF] font-semibold">4.8</p>
                              <p className="text-[#FFF]">9k+ Positive feedback</p>
                            </div>
                          </div>
                          <div className="w-[50%] px-1.5">
                            <div className="relative z-20 bg-[#313538] max-w-full w-[300px] h-[190px] rounded-3xl p-5 flex justify-around flex-col overflow-hidden before:content-[''] before:bg-[url(/assets/img/bg/vector-1.png)] before:bg-cover before:bg-center before:absolute before:top-8 before:left-0 before:w-full before:h-full before:-z-10">
                              <p className="text-[#FFF] text-right">Active Users</p>
                              <p className="text-[35px] text-[#FFF] text-right font-semibold">50k+</p>
                            </div>
                          </div>
                          <div className="w-[50%] px-1.5">
                            <div className="relative z-20 bg-[#313538] max-w-full w-[300px] h-[300px] rounded-3xl p-5 flex justify-around flex-col overflow-hidden before:content-[''] before:bg-[url(/assets/img/bg/rectangle-2.png)] before:bg-contain before:bg-no-repeat before:bg-center before:absolute before:-top-10 before:left-20 before:w-[350px] before:h-[350px] before:-z-10">
                              
                            </div>
                          </div>
                          <div className="w-[50%] px-1.5">
                            <div className="relative z-20 bg-[#313538] max-w-full w-[300px] h-[300px] rounded-3xl p-5 flex justify-around flex-col overflow-hidden before:content-[''] before:bg-[url(/assets/img/bg/rectangle-2.png)] before:bg-contain before:bg-center before:absolute before:-top-0 before:left-0 before:w-[350px] before:h-[350px] before:-z-10">
                              
                            </div>
                          </div>
                      </div>
                      <Image className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20" src="/assets/img/others/boy.webp" alt="" width={309} height={496} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-y-4 pt-16">
                  {
                    brandImg.map((img, i ) =>{
                      return(
                        <div key={i} className="w-full md:w-[50%] lg:w-[16.66%]">
                            <Image className="mx-auto" src={img.imgSrc} alt={img.alt} width={113} height={56} />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section> */}

            {/* <section className="bg-[#232428] py-12">
              <div className="container mx-auto px-4">
                <div className="mb-4">
                  <h2 className="text-[30px] text-[#FFF] font-medium ps-3">Explore Top Colleges</h2>
                </div>
                <BasicTabs topCollege={topCollege} />
                
              </div>
            </section> */}

            {/* <section className="bg-[#232428] pb-12">
              <div className="max-w-full w-[900px] mx-auto px-4">
                  <div className="text-center mb-20">
                    <h2 className="text-[#FFF] text-[25px] lg:text-[45px] font-semibold leading-tight">Is a Degree Course Enough?</h2>
                    <h3 className="text-[40px] text-white">The answer is <span className="bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] [background-clip:text] [-webkit-text-fill-color:transparent]">BIG NO!</span></h3>
                  </div>
                  <div className="flex flex-wrap gap-y-4">
                      <div className="w-full lg:w-[50%] lg:pe-20 lg:border-r border-[#ffffff67]">
                        <div className="text-white">
                          <h4 className="text-[25px] font-semibold mb-5">Why?</h4>
                          <p className="text-[#EEEEEE] text-[13px]">There is a significant skill gap between academic education and industry demands.</p>
                          <hr className="my-10 opacity-30" />
                          <p className="text-[#EEEEEE] text-[13px]">Employers seek practical experience, not just theoretical knowledge.</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-[50%] lg:ps-20">
                        <div className="text-white">
                          <h4 className="text-[25px] font-semibold mb-5">What to do?</h4>
                          <p className="text-[#EEEEEE] text-[13px]">Enhance your degree with industry-relevant skill training.</p>
                          <hr className="my-10 opacity-30" />
                          <p className="text-[#EEEEEE] text-[13px]">Gain hands-on experience through internships.</p>
                          <hr className="my-10 opacity-30" />
                          <p className="text-[#EEEEEE] text-[13px]">Build a strong portfolio with practical projects.</p>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="max-w-full w-[500px] mx-auto rounded-[10px] border-2 border-[#B0FE6A] bg-gradient-to-l from-[#7bfedd1c] to-[#affe6a2a] py-4 px-5 mt-12">
                <p className="text-center text-white text-[13px]">
                  TutopiaPRO bridges this gap by offering a holistic learning approach beyond traditional degrees.
                </p>
              </div>
            </section> */}

            {/* <section className="bg-[#232428] py-12">
              <div className="px-4 lg:px-12">
                  <div>
                    <h2 className="text-[30px] text-[#FFF] font-medium ps-3">Explore Our Degree Courses</h2>
                  </div>
                  <DegreeCourseTab
                    degreeCourse={degreeCourse}
                  />
              </div>
            </section> */}

            {/* <section className="bg-[#232428] py-12">
              <div className="max-w-full w-[900px] mx-auto px-4">
                <div className="mb-12">
                  <p className="text-center text-white">Skills & Opportunities</p>
                  <h2 className="text-[25px] lg:text-[45px] text-white font-semibold leading-tight mx-auto text-center">Important Things Students <br/> Can Get From Tutopia Pro</h2>
                </div>
                <div className="flex justify-center gap-x-3">
                    <div>
                      <div className="bg-[#2B2B2F] rounded-[16px] p-6 mb-22">
                          <span className="text-white text-[20px]">Guidance</span>
                          <div className="flex items-start gap-x-2 mt-3">
                            <Image src='/assets/icons/tick.png' alt="tick" width={25} height={25} />
                            <p className="text-white">Expert mentorship for choosing the right career path.</p>
                          </div>
                      </div>
                      <div className="bg-[#2B2B2F] rounded-[16px] p-6">
                          <span className="text-white text-[20px]">Guidance</span>
                          <div className="flex items-start gap-x-2 mt-3">
                            <Image src='/assets/icons/tick.png' alt="tick" width={25} height={25} />
                            <p className="text-white">Expert mentorship for choosing the right career path.</p>
                          </div>
                      </div>
                    </div>
                    <div>
                      <Image className="mt-12" src='/assets/icons/line.svg' alt="line" width={200} height={500} />
                    </div>
                    <div className="mt-20">
                      <div className="bg-[#2B2B2F] rounded-[16px] p-6 mb-22">
                          <span className="text-white text-[20px]">Certified Courses</span>
                          <div className="flex items-start gap-x-2 mt-3">
                            <Image src='/assets/icons/tick.png' alt="tick" width={25} height={25} />
                            <p className="text-white">Industry-focused training programs to develop in-demand skills.</p>
                          </div>
                      </div>
                      <div className="bg-[#2B2B2F] rounded-[16px] p-6">
                          <span className="text-white text-[20px]">Certified Courses</span>
                          <div className="flex items-start gap-x-2 mt-3">
                            <Image src='/assets/icons/tick.png' alt="tick" width={25} height={25} />
                            <p className="text-white">Industry-focused training programs to develop in-demand skills.</p>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </section> */}

            {/* <section className="bg-[#232428] py-12">
                  <div className="container mx-auto px-4">
                      <div>
                        <h2 className="text-white text-center text-[25px] lg:text-[45px] font-semibold leading-tight">Our Prestigious Industry & Knowledge Partners</h2>
                        <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center mt-5">
                          <span className="text-white text-[13px] bg-[#2B2B2F] px-3 py-2 rounded-lg">Cutting-edge industry insights</span>
                          <span className="text-white text-[13px] bg-[#2B2B2F] px-3 py-2 rounded-lg">Real-world case studies and projects</span>
                          <span className="text-white text-[13px] bg-[#2B2B2F] px-3 py-2 rounded-lg">Internship and placement support</span>
                          <span className="text-white text-[13px] bg-[#2B2B2F] px-3 py-2 rounded-lg">Exposure to the latest trends and technologies</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-y-4 mt-10">
                        {
                          brandImg.map((item, i) =>{
                            return(
                              <div key={i} className="w-full md:w-[50%] lg:w-[16.66%]">
                                <Image className="mx-auto" src={item.imgSrc} alt={item.alt} width={113} height={56} />
                              </div>
                            )
                          })
                        }
                      </div>
                  </div>
            </section> */}

            {/* <section className="bg-[#232428] py-12">
              <div className="container mx-auto px-4">
                <div>
                  <h2 className="text-[30px] text-white font-semibold">Skill-Based Certificate Courses</h2>
                </div>
                <div>
                    <CertificateCoursesTab
                       certificateCourse={certificateCourse}
                    />
                </div>
              </div>
            </section> */}

            {/* <section className="bg-[#000] py-20">
              <div className="container mx-auto px-4">
                    <div>
                        <h2 className="text-white text-[20px] lg:text-[45px] font-semibold leading-tight text-center mb-8 lg:mb-20">টিউটোপিয়া নিয়ে এসেছে বিশ্ববিখ্যাত<br/> ফ্লিপ-মেথড-অফ-টিচিং</h2>
                        <p className="text-white text-center max-w-full w-[600px] mx-auto">পশ্চিমবঙ্গ বোর্ডের বাংলা মিডিয়ামের ছাত্র-ছাত্রীদের জন্য Tutopia Learning App নিয়ে এসেছে আন্তর্জাতিক খ্যাতিসম্পন্ন শিক্ষক Jonathan Bergmann এবং Aaron Sams-এর বিখ্যাত "ফ্লিপ মেথড অফ টিচিং"। এই পদ্ধতিতে শিক্ষাগ্রহণের মূল বিষয়গুলি হল:</p>
                    </div>
                    <div className="flex flex-wrap gap-y-4 my-5">
                        <div className="w-full lg:w-[33.33%]">
                          <div>
                            <ul className="text-white list-disc ps-5">
                              <li>
                                ফ্লিপ মেথড টিচিং: গতানুগতিক পদ্ধতিতে একজন ছাত্র বা ছাত্রী যখন কোনও শিক্ষকের কাছে ক্লাস করতে যায়, তখন সে ওই ক্লাসে কী পড়ানো হবে সে সম্পর্কে কোনও ধারণা না নিয়েই যায়। ফলে, ক্লাসে পড়ানো বিষয়বস্তু তার কাছে নতুন হওয়ার কারণে, তা সম্পূর্ণভাবে বোঝা সম্ভব হয় না। Tutopia-র "ফ্লিপ মেথড"-এ ছাত্র-ছাত্রীরা লাইভ ক্লাস করার আগে, ওই ক্লাসে পড়ানো বিষয়গুলির উপর Tutopia অ্যাপে থাকা অ্যানিমেটেড ভিডিয়ো টিউটোরিয়াল দেখে জ্ঞান ও প্রশ্ন নিয়ে ক্লাসে যোগ দেয়। এর ফলে, ক্লাসে পড়ানো বিষয়বস্তু তার কাছে নতুন থাকে না এবং সে তার প্রশ্নগুলো শিক্ষকের সাথে আলোচনা করে সমাধান করতে পারে।
                              </li>
                              <li>
                                ভিডিও টিউটোরিয়াল: Tutopia অ্যাপে প্রতিটি লাইভ ক্লাসের আগে সেই বিষয়ের ওপর অ্যানিমেটেড ভিডিও টিউটোরিয়াল দেওয়া থাকে। এই ভিডিওগুলি দেখে ছাত্র-ছাত্রীরা ক্লাসে আলোচিত বিষয় সম্পর্কে প্রাথমিক জ্ঞান লাভ করে এবং তাদের মনে তৈরি হওয়া প্রশ্নগুলি সম্পর্কে ধারণা পায়।
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[33.33%]">
                          <div>
                            <Image className="mx-auto" src="/assets/img/others/students.png" alt="students" width={317} height={288} />
                          </div>
                        </div>
                        <div className="w-full lg:w-[33.33%]">
                          <div>
                            <ul className="text-white list-disc ps-5">
                              <li>
                                লাইভ ক্লাস: ছাত্র-ছাত্রীরা ভিডিও টিউটোরিয়াল দেখে লাইভ ক্লাসে শিক্ষকের সাথে সরাসরি আলোচনা করে তাদের প্রশ্নগুলির সমাধান করে নেয়। এর ফলে, তাদের শেখা আরও কার্যকরী হয়।
                              </li>
                              <li>
                                উন্নত শিক্ষা: এই পদ্ধতিতে ছাত্র-ছাত্রীরা আগে থেকে বিষয়বস্তু সম্পর্কে জেনে আসে বলে তাদের বুঝতে সুবিধা হয় এবং তারা শিক্ষকের সাথে আরও বেশি আলোচনা করতে পারে। এর ফলে, তারা গভীরভাবে জ্ঞান অর্জন করতে সক্ষম হয়।
                              </li>
                              <li>
                                আন্তর্জাতিক পদ্ধতি: উন্নত বিশ্বের অনেক শিক্ষা প্রতিষ্ঠানে এই "ফ্লিপ মেথড" ব্যবহার করা হয়। Tutopia এই পদ্ধতিকে পশ্চিমবঙ্গ বোর্ডের ছাত্র-ছাত্রীদের জন্য নিয়ে এসেছে, যাতে তারাও আন্তর্জাতিক মানের শিক্ষা লাভ করতে পারে।
                              </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                    <div>
                      <p className="text-white text-center max-w-full w-[500px] mx-auto">Tutopia Learning App-এর এই "ফ্লিপ মেথড" ছাত্র-ছাত্রীদের উন্নত শিক্ষা এবং পরীক্ষায় ভালো ফল করতে সহায়ক হবে</p>
                    </div>
                    <div className="flex flex-wrap gap-y-3 mt-5">
                        <div className="w-full lg:w-[20%]">
                          <div className="bg-[#2B2B2F] px-4 py-2 rounded-xl">
                            <div className="flex items-center gap-x-2">
                              <span className="bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] font-semibold px-6 py-1 rounded-full">1</span>
                              <span className="text-white">ভিডিয়ো ক্লাস</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-[5%] flex justify-center flex-col">
                          <Image className="mx-auto rotate-90 lg:rotate-0" src='/assets/icons/arrow.svg' alt="" width={20} height={20}/>
                        </div>
                        <div className="w-full lg:w-[20%]">
                          <div className="bg-[#2B2B2F] px-4 py-2 rounded-xl">
                            <div className="flex items-center gap-x-2">
                              <span className="bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] font-semibold px-6 py-1 rounded-full">2</span>
                              <span className="text-white">লাইভ ক্লাস</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-[5%] flex justify-center flex-col">
                          <Image className="mx-auto rotate-90 lg:rotate-0" src='/assets/icons/arrow.svg' alt="" width={20} height={20}/>
                        </div>
                        <div className="w-full lg:w-[20%]">
                          <div className="bg-[#2B2B2F] px-4 py-2 rounded-xl">
                            <div className="flex items-center gap-x-2">
                              <span className="bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] font-semibold px-6 py-1 rounded-full">3</span>
                              <span className="text-white">নোট্স</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-[5%] flex justify-center flex-col">
                          <Image className="mx-auto rotate-90 lg:rotate-0" src='/assets/icons/arrow.svg' alt="" width={20} height={20}/>
                        </div>
                        <div className="w-full lg:w-[20%]">
                          <div className="bg-[#2B2B2F] px-4 py-2 rounded-xl">
                            <div className="flex items-center gap-x-2">
                              <span className="bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] font-semibold px-6 py-1 rounded-full">4</span>
                              <span className="text-white">Mock Test</span>
                            </div>
                          </div>
                        </div>
                    </div>
              </div>
            </section> */}

            {/* <section className="bg-[#232428] py-12">
              <div className="container mx-auto px-4">
                  <div className=" ps-3 mb-5">
                        <h2 className="text-white text-[30px]">Free Courses</h2>
                  </div>
                  <div className="flex flex-wrap gap-y-4">
                    {
                      freeCourse.map((ele,i)=>{
                        return(
                          <div key={i} className="w-full md:w-[50%] lg:w-[25%] px-1.5">
                            <div className='rounded-[15px] border border-[#B0FE6A] group'>
                                  <div>
                                      <Image className='rounded-t-[13px]' src={ele.img} alt='course-img' width={430} height={240} />
                                  </div>
                                  <div className='px-4 py-3'>
                                      <div className='mb-3'>
                                          <h2 className='text-[22px] text-white leading-tight mb-3'>{ele.title}</h2>
                                      </div>
                                      <div className='mb-3'>
                                          <p className='text-[#949396]'>{ele.description}</p>
                                      </div>
                                      <div className='flex flex-wrap items-center gap-x-2 mb-4'>
                                          <span className='bg-[#373337] text-[15px] text-white px-3 py-1 rounded-full'>{ele.duration}</span>
                                          <span className='bg-[#373337] text-[15px] text-white px-3 py-1 rounded-full'>{ele.courseType}</span>
                                      </div>
                                      <div>
                                          <span className='text-white text-[20px] font-semibold'>{ele.price}</span>
                                      </div>
                                  </div>
                                  <div className='bg-gradient-to-l from-[#7BFEDE] to-[#B0FE6A] rounded-b-[13px] transition-all duration-300 max-h-0 group-hover:max-h-[100px] group-hover:py-2 overflow-hidden'>
                                      <a href='#' className='text-center block'>View More</a>
                                  </div>
                              </div>
                          </div>
                        )
                      })
                    }
                  </div>
              </div>
            </section> */}

            {/* <section className="bg-[#232428] py-12">
              <div className="conatiner mx-auto px-4">
                <div className="mb-12">
                  <h2 className="text-center text-white text-[25px] lg:text-[45px] font-semibold leading-tight">Hone Your Skills Under The Guidance<br/> of Expert Faculty</h2>
                    <p className="text-white text-center">Instructors</p>
                </div>
                <div className="flex flex-wrap justify-center gap-y-4">
                  {
                    faculty.map((ele, i)=>{
                      return(
                        <div key={i} className="w-full md:w-[50%] lg:w-[20%]">
                          <div>
                            <Image className="mx-auto" src={ele.img} alt="stu" width={200} height={200} />
                          </div>
                          <div className="text-center mt-3">
                            <h4 className="text-white text-[20px]">{ele.name}</h4>
                            <p className="text-white text-[13px]">{ele.degisnation}</p>
                            <Image className="mx-auto" src={ele.icon} alt="stu" width={64} height={33} />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section> */}

            {/* <section className="bg-[#000] py-20">
              <div className="lg:ps-32 xl:ps-52">
                  <div >
                    <h2 className="text-white text-[25px] lg:text-[45px] font-semibold leading-tight ">What Student Says</h2>
                    <p className="text-[15px] text-white max-w-full w-[550px]">Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.</p>
                  </div>
              </div>
              <div className="mt-10">
                <TestimonialSlider/>
              </div>
            </section> */}

            {/* <section>
            <div className='bg-[#2e2d2d] py-10'>
              <div className='container mx-auto px-4'>
                <h2 className='text-center font-bold text-4xl text-white mb-5'>Awards & Accomplishments</h2>
                <p className='text-center font-normal text-sm text-white mb-10'>Awards</p>
                <div className='flex flex-wrap justify-between gap-y-8'>
                  {awards.map((award, index) => (
                    <div key={index} className='w-full md:w-[48%] lg:w-[22%] text-center flex flex-col justify-center items-center'>
                      <Image src={award.img} alt={award.title} className='mx-auto mb-4 w-68 h-auto object-contain' width={300} height={300} />
                      <div className='max-w-[90%]'>
                        <h3 className='text-lg font-semibold text-[#FFF]'>{award.title}</h3>
                      <p className='text-sm text-[#555] mt-2'>{award.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </section> */}
        </main>
        <Footer/>
    </>
  );
}
