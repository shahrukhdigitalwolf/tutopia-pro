import Image from "next/image";
import LpHeader from "./components/header/LpHeader";
import BasicTabs from "./components/TopCollageTab";
import DegreeCourseTab from "./components/DegreeCourseTab";
import CertificateCoursesTab from "./CertificateCoursesTab";


export default function Home() {

  const brandImg = [
    {imgSrc : '/assets/img/brand/amazone.webp',alt: 'amazone logo'},
    {imgSrc : '/assets/img/brand/google.webp',alt: 'google logo'},
    {imgSrc : '/assets/img/brand/lenovo.webp',alt: 'lenovo logo'},
    {imgSrc : '/assets/img/brand/microsoft.webp',alt: 'microsoft logo'},
    {imgSrc : '/assets/img/brand/slack.webp',alt: 'slack logo'},
    {imgSrc : '/assets/img/brand/youtube.webp',alt: 'youtube logo'},
  ]

  const topCollege = [
    {
      label: "UG/PG",
      data: [
        { name: "Jawaharlal Nehru University (JNU), Delhi", course: "20 Courses", rating: "4.4 (389 reviews)" },
        { name: "Indian Institute of Science (IISc), Bangalore", course: "22 Courses", rating: "4.4 (389 reviews)" },
        { name: "Banaras Hindu University (BHU), Uttar Pradesh", course: "16 Courses", rating: "4.4 (389 reviews)" },
        { name: "Vellore Institute of Technology (VIT), Tamil Nadu", course: "16 Courses", rating: "4.4 (389 reviews)" },
      ]
    },
    {
      label: "Diploma",
      data: [
        { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
        { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
        { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
        { name: "Some Diploma College", course: "10 Courses", rating: "4.2 (100 reviews)" },
      ]
    },
    {
      label: "PhD",
      data: [
        { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
        { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
        { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
        { name: "Some PhD College", course: "5 Courses", rating: "4.8 (50 reviews)" },
      ]
    }
  ];

  const degreeCourse = [
    {
      label:'Degree Courses',
      data:[
        {
          img: '/assets/img/others/c1.jpg',
          title: 'MBA by Liverpool Business School (IMT Pathway)',
          duration: 'Master Degree - 1Yr',
          sessionHours: '120+ Live Session Hours',
          description: 'Live Case Studies and Projects',
          price: '180,000'
        },
        {
          img: '/assets/img/others/c2.jpg',
          title: 'MBA by Liverpool Business School (IMT Pathway)',
          duration: 'Master Degree - 1Yr',
          sessionHours: '120+ Live Session Hours',
          description: 'Live Case Studies and Projects',
          price: '180,000'
        }
      ]
    },
    {
      label:'Degree Courses 2',
      data:[
        {
          img: '/assets/img/others/c1.jpg',
          title: 'MBA by Liverpool Business School (IMT Pathway)',
          duration: 'Master Degree - 1Yr',
          sessionHours: '120+ Live Session Hours',
          description: 'Live Case Studies and Projects',
          price: '180,000'
        }
      ]
    },

  ]

  const certificateCourse = [
    {
      label:'BTC',
      data:[
        {
          img: '/assets/img/others/c1.jpg',
          title: 'MBA by Liverpool Business School (IMT Pathway)',
          iconList:[
            'assets/icons/yellow-star.png',
            'assets/icons/yellow-star.png',
            'assets/icons/yellow-star.png',
          ],
          duration: '4 Weeks | 60 Hours',
          courseType: 'Online',
          description: 'Over 5000+ students Enrolled',
          price: '180,000'
        }
      ]
    }
  ]
  
  return (
    <>
        <LpHeader/>
        <main>
            <section className="py-12 bg-[#232428]">
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
            </section>

            <section className="bg-[#232428] py-12">
              <div className="container mx-auto px-4">
                <div className="mb-4">
                  <h2 className="text-[30px] text-[#FFF] font-medium ps-3">Explore Top Colleges</h2>
                </div>
                <BasicTabs topCollege={topCollege} />
                {/* <div className="flex">
                  {
                    topCollege.map((ele, i)=>{
                      return(
                        <div key={i} className="w-[25%] px-1.5">
                          <div className="bg-[#2B2B2F] p-5 rounded-[30px]">
                              <div>
                                <Image src="/assets/icons/fi_3008623.png" alt="" width={45} height={45}/>
                              </div>
                              <div className="mt-2 mb-5">
                                <h3 className="text-[18px] text-white leading-tight mb-3">{ele.name}</h3>
                                <span className="text-white text-[15px] bg-[#373337] px-2 py-1 rounded-full">{ele.course}</span>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <Image src="/assets/icons/yellow-star.png" alt="star" width={20} height={21}/>
                                <p className="text-white font-medium">{ele.rating}</p>
                              </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div> */}
              </div>
            </section>

            <section className="bg-[#232428] pb-12">
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
            </section>

            <section className="bg-[#232428] py-12">
              <div className="px-4 lg:px-12">
                  <div>
                    <h2 className="text-[30px] text-[#FFF] font-medium ps-3">Explore Our Degree Courses</h2>
                  </div>
                  <DegreeCourseTab
                    degreeCourse={degreeCourse}
                  />
              </div>
            </section>

            <section className="bg-[#232428] py-12">
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
            </section>

            <section className="bg-[#232428] py-12">
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
            </section>

            <section className="bg-[#232428] py-12">
              <div className="container mx-auto px-4">
                <div>
                  <h2 className="text-[30px] text-white font-semibold">Skill-Based Certificate Courses</h2>
                </div>
                <div>
                    <CertificateCoursesTab/>
                </div>
              </div>
            </section>
        </main>
    </>
  );
}
