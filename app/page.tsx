"use client"
import Image from "next/image";
import LpHeader from "./components/header/LpHeader";
import HeroBanner from "./components/home/HeroBanner";
import FutureSlider from "./components/home/FutureSlider";
import ProgramsSlider from "./components/home/ProgramsSlider";
import ExpertsCards from "./components/home/ExpertsCards";
import IndustryMoniterCards from "./components/home/IndustryMoniterCards";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import { Button } from "@mui/material";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])

  
  return (
    <>
        <LpHeader/>
        <main className="bg-[#232428] overflow-hidden">
          <HeroBanner/>

          <section className="py-6 lg:py-20 bg-[#232428]">
              <div className="max-w-full w-[1200px] mx-auto px-4">
                <div className="flex flex-wrap gap-y-5">
                  <div className="w-full lg:w-[50%] relative flex justify-end flex-col">
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
                  <div className="w-full lg:w-[50%] lg:px-10">
                    <div className="px-6 pb-6 pt-3 rounded-xl bgborder">
                      <div>
                        <h2 className="text-[20px] lg:text-[45px] font-bold mb-3 bg-gradient-to-r from-[#6bffca] to-[#6bffca] [background-clip:text] [-webkit-text-fill-color:transparent]">Contact Now</h2>
                      </div>
                      <form action="#">
                        <div className="flex flex-wrap gap-y-3">
                            <div className="w-full">
                              <div className="relative z-0 w-full mb-2 group">
                                <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer" placeholder=" " required />
                                <label htmlFor="floating_name" className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                              </div>
                            </div>
                            <div className="w-full">
                                <div className="relative z-0 w-full mb-2 group">
                                  <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer" placeholder=" " required />
                                  <label htmlFor="floating_email" className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                            </div>
                            <div className="w-full md:w-[60%] md:pe-2">
                                <div className="relative z-0 w-full mb-2 group">
                                  <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer" placeholder=" " required />
                                  <label htmlFor="floating_phone" className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone No.</label>
                                </div>
                            </div>
                            <div className="w-full md:w-[40%] md:ps-2">
                                <div className="relative z-0 w-full mb-2 group">
                                  <input type="text" name="floating_pincode" id="floating_pincode" className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer" placeholder=" " required />
                                  <label htmlFor="floating_pincode" className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pin Code</label>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative z-0 w-full group">
                                  <input type="text" name="floating_location" id="floating_location" className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer" placeholder=" " required />
                                  <label htmlFor="floating_location" className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative z-0 w-full mb-0 group">
                                  <select
                                    id="course"
                                    name="course"
                                    defaultValue=""
                                    required
                                    className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-[#080808] border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                                  >
                                    <option value="" disabled>-- Select Courses --</option>
                                    <option value="Canada">Canada</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                  </select>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative z-0 w-full mb-5 group">
                                  <textarea id="message" rows={2} className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer" placeholder="Leave a comment..."></textarea>
                                </div>
                            </div>
                            <div className="w-full">
                                <Button
                                  type="submit"
                                  sx={{
                                    width:'100%',
                                    bgcolor:'#ffffff',
                                    color:'inherit',
                                    fontSize:'13px'
                                  }}
                                >Send</Button>
                            </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          <section className="bg-black py-6 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6 lg:mb-20">
                <h2 className="text-[20px] lg:text-[45px] mb-3 bg-gradient-to-r from-[#6bffca] to-[#6bffca] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight" data-aos="fade-up" data-aos-duration="800">YOUR NEXT BIG STEP AFTER 10+2!</h2>
                <p className="text-[17px] lg:text-[30px] font-light text-white leading-tight" data-aos="fade-up" data-aos-duration="1000">Choose the perfect UG/PG program<br/>
                from top universities and shape your future.</p>
              </div>
              <FutureSlider/>
            </div>
          </section>

          <section className="py-10 lg:py-20 bg-gradient-to-r from-[#44b8a5] to-[#44b8a5]">
            <div className="conatiner mx-auto px-4">
              <h2 className="text-center text-white text-[30px] lg:text-[50px] font-bold max-w-full w-[1300px] mx-auto leading-tight">IS A DEGREE COURSE ENOUGH<br className="hidden lg:block"/>
              TO FACE THE EVOLVING JOB MARKET?</h2>
              <h3 className="text-center text-black text-[25px] lg:text-[50px] font-bold max-w-full w-[1300px] mx-auto leading-tight">THE ANSWER IS A BIG NO!</h3>
            </div>
          </section>

          <section className="py-6 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap text-center">
                  <div className="w-full lg:w-[45%]">
                    <div className="bg-gradient-to-l from-[#44b8a5] to-[#44b8a5] py-2 rounded-xl mb-5">
                      <span className="text-[25px] lg:text-[35px] font-semibold">WHY?</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl bgborder mb-5 md:h-[150px] flex justify-center flex-col" data-aos="zoom-in" data-aos-duration="1000">
                      <span className="text-white text-[18px] md:text-[22px] font-[200]">Many academic programs have yet to align fully with evolving industry demands.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl bgborder mb-5 md:h-[150px] flex justify-center flex-col" data-aos="zoom-in" data-aos-duration="1000">
                      <span className="text-white text-[18px] md:text-[22px] font-[200]">A lack of hands-on learning leaves graduates unprepared for real-world challenges, as employers prioritize practical skills.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl bgborder mb-5 md:h-[150px] flex justify-center flex-col" data-aos="zoom-in" data-aos-duration="1000">
                      <span className="text-white text-[18px] md:text-[22px] font-[200]">Rapid advancements require continuous skill upgrades, yet many students struggle to adapt.</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[10%] relative">
                    <div className="h-1 border-b-2 border-dashed border-[#44b8a5] absolute top-[27%] left-0 w-full hidden lg:block"></div>
                    <div className="h-1 border-b-2 border-dashed border-[#44b8a5] absolute top-[55%] left-0 w-full hidden lg:block"></div>
                    <div className="h-1 border-b-2 border-dashed border-[#44b8a5] absolute top-[85%] left-0 w-full hidden lg:block"></div>
                  </div>
                  <div className="w-full lg:w-[45%]">
                    <div className="bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] py-2 rounded-xl mb-5">
                      <span className="text-[25px] lg:text-[35px] font-semibold">WHAT NEEDS TO BE DONE?</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl bgborder mb-5 md:h-[150px] flex justify-center flex-col" data-aos="zoom-in" data-aos-duration="1500">
                      <span className="text-white text-[18px] md:text-[22px] font-[200]">Enhance your degree with industry-relevant skill training, updated to keep pace with the latest trends and technological advancements.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl bgborder mb-5 md:h-[150px] flex justify-center flex-col" data-aos="zoom-in" data-aos-duration="1500">
                      <span className="text-white text-[18px] md:text-[22px] font-[200]">Acquire practical experience through project-based training modules and internships.</span>
                    </div>
                    <div className="bg-[#000] py-5 px-6 rounded-xl bgborder mb-5 md:h-[150px] flex justify-center flex-col" data-aos="zoom-in" data-aos-duration="1500">
                      <span className="text-white text-[18px] md:text-[22px] font-[200]">Develop a strong portfolio with real-world projects that showcase your skills.</span>
                    </div>
                  </div>
                  <div className="w-full" data-aos="zoom-in" data-aos-duration="1100">
                    <div className="bg-[#000] py-5 px-4 rounded-xl bgborder">
                      <span className="text-white text-[18px] md:text-[22px] font-medium">TutopiaPRO serves as a transformative platform, bridging academia with the industry.</span>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          <section className="bg-black">
              <div className="bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] py-6">
                <h2 className="text-center text-[20px] lg:text-[45px] font-semibold leading-tight">JOIN PLACEMENT FOCUSED CERTIFICATE COURSES, TODAY!</h2>
              </div>
              <div className="container mx-auto px-4">
                <div className="text-center my-6 lg:my-15">
                  <h3 className="text-[25px] lg:text-[40px] leading-tight bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent]">How <span className="font-bold">TutopiaPRO</span> Empowers Students</h3>
                  <p className="text-white font-light max-w-full w-[900px] mx-auto"> 
                      Cut through the confusion and gain clarity. Designed for B.Tech, BCA, BBA, and General Degree students,
                      TutopiaPRO bridges the gap between academia and industry with expert mentorship, real-world training,
                      and assured placement support-equipping you with the right skills for success
                  </p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[33.33%]">
                      <div className="ps-4 lg:ps-8 py-10 rounded mb-5 clipped-box1" data-aos="fade-right" data-aos-duration="800">
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[20px] md:text-[30px] text-center text-white bgborder w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center flex-col">1</p>
                          </div>
                          <div>
                            <h4 className="md:text-[25px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                      <div className="ps-4 lg:ps-8 py-10 rounded mb-5 clipped-box1" data-aos="fade-right" data-aos-duration="1100">
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[20px] md:text-[30px] text-center text-white bgborder w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center flex-col">2</p>
                          </div>
                          <div>
                            <h4 className="md:text-[25px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-[33.33%]">
                      <Image className="mx-auto mb-5 lg:mb-0" src="/assets/img/others/boy-2.jpg" alt="" width={400} height={500} />
                    </div>
                    <div className="w-full lg:w-[33.33%]">
                      <div className="ps-10 py-10 rounded mb-5 clipped-box" data-aos="fade-left" data-aos-duration="800">
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[20px] md:text-[30px] text-center text-white bgborder w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center flex-col">3</p>
                          </div>
                          <div>
                            <h4 className="md:text-[25px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                      <div className=" ps-10 py-10 rounded mb-5 clipped-box" data-aos="fade-left" data-aos-duration="1100">
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-[20px] md:text-[30px] text-center text-white bgborder w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center flex-col">4</p>
                          </div>
                          <div>
                            <h4 className="md:text-[25px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight">CUTTING-EDGE<br/> CERTIFICATION COURSES</h4>
                            <p className="text-white">backed by real-world expertise.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </section>

          <section className="py-6 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="mb-5">
                <h2 className="text-[25px] lg:text-[45px] text-white text-center" data-aos="fade-up" data-aos-duration="800">TutopiaPRO</h2>
                <p className="text-center text-[16px] lg:text-[30px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent]  leading-tight" data-aos="fade-up" data-aos-duration="1000">CERTIFICATION PROGRAMS ARE DESIGNED BY INDUSTRY EXPERTS,<br className="hidden lg:block"/>
                TAILORED FOR REAL-WORLD PLACEMENTS.</p>
              </div>
              <div>
                <ProgramsSlider/>
              </div>
              <div className="mt-8">
                <p className="text-center text-white text-[15px] md:text-[20px]">CHOOSE ANY PROGRAM TO UPSKILL AND BUILD A BRILLIANT CAREER.</p>
              </div>
            </div>
          </section>

          <section className="bg-black px-4 lg:px-0">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-[50%] lg:ps-28 2xl:ps-52 py-6 lg:py-20 flex flex-col justify-center">
                    <div>
                      <h2 className="text-[20px] lg:text-[30px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] font-semibold leading-tight">Our Unique Methodology for<br className="hidden lg:block"/>
                        Smarter Learning & Deeper Understanding</h2>  
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-x-2 mb-3">
                        <Image src="/assets/icons/flip.svg" alt="flip" width={60} height={60} />
                        <h3 className="text-white text-[25px] lg:text-[30px] font-semibold leading-tight">FLIP METHOD OF TEACHING</h3>
                      </div>
                      <p className="text-gray-200 font-[300]">Traditional learning can leave students struggling with new concepts. The Flip Method turns this
                      around by preparing students before class, making live sessions more interactive and effective.</p>
                    </div>
                    <div className="max-w-full w-[500px] mt-8 mx-auto lg:mx-0">
                      <div className="flex items-center gap-x-2 bgborder rounded-xl p-3" data-aos="zoom-out-up" data-aos-duration="800">
                        <div>
                          <Image src="/assets/icons/pre-class.svg" alt="flip" width={80} height={80} />
                        </div>
                        <div>
                          <h5 className="bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] text-[20px] font-semibold">Pre-Class Preparation</h5>
                          <p className="text-gray-200 font-[300]">Students watch structured video tutorials to build
                          a strong foundation before live sessions.</p>
                        </div>
                      </div>
                      <div>
                        <Image className="rotate-90 mx-auto" src='/assets/icons/arrow.png' alt="arrow" width={50} height={50}/>
                      </div>
                      <div className="flex items-center gap-x-2 bgborder rounded-xl p-3" data-aos="zoom-out-up" data-aos-duration="1000">
                        <div>
                          <Image src="/assets/icons/live-class.svg" alt="flip" width={80} height={80} />
                        </div>
                        <div>
                          <h5 className="bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] text-[20px] font-semibold">Interactive Live Classes</h5>
                          <p className="text-gray-200 font-[300]">With prior knowledge, students engage in
                          discussions, ask questions and clarify doubts</p>
                        </div>
                      </div>
                      <div>
                        <Image className="rotate-90 mx-auto" src='/assets/icons/arrow.png' alt="arrow" width={50} height={50} />
                      </div>
                      <div className="flex items-center gap-x-2 bgborder rounded-xl p-3" data-aos="zoom-out-up" data-aos-duration="1200">
                        <div>
                          <Image src="/assets/icons/mock-test.svg" alt="flip" width={80} height={80} />
                        </div>
                        <div>
                          <h5 className="bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent] text-[20px] font-semibold">Daily Mock Test</h5>
                          <p className="text-gray-200 font-[300]">Short post-class assessments reinforce learning
                          and ensure steady improvement.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-8">
                      <p className="text-[20px] md:text-[25px] bg-gradient-to-r from-[#44b8a5] to-[#44b8a5] [background-clip:text] [-webkit-text-fill-color:transparent]  leading-tight">By flipping the learning process, students gain clarity,
                      confidence and real understanding.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] flex justify-end flex-col">
                    <Image className="ms-auto" src="/assets/img/others/boy-3.webp" alt="" width={800} height={838} />
                </div>
            </div>
          </section>

          <section className="py-6 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-full w-[900px] mx-auto mb-6">
                  <h2 className="text-[25px] lg:text-[45px] bg-gradient-to-r from-[#fff] to-[#fff] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight">Meet the Experts Behind TutopiaPRO</h2>
                  <p className="text-white text-[15px] md:text-[20px] font-light">
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
          
          <section className="py-6 lg:py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-full w-[1000px] mx-auto mb-6">
                  <h2 className="text-[22px] lg:text-[45px] bg-gradient-to-r from-[#fff] to-[#fff] [background-clip:text] [-webkit-text-fill-color:transparent] leading-tight mb-3">INTRODUCING OUR<br/>
                  ESTEEMED INDUSTRY MENTORS</h2>
                  <p className="text-white font-light">
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
            
        </main>
        <Footer/>
    </>
  );
}
