'use client'
import React from 'react'
import LpHeader from '../components/header/LpHeader'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import Link from 'next/link'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Thankyou() {

    return (
        <>
            <LpHeader />
            <main className='bg-[#000]'>
                <section className='h-[87vh] px-4 flex justify-center flex-col'>
                    <div className='bg-[#232428] text-center rounded-xl max-w-full h-[500px] w-[800px] px-5 md:px-15 m-auto flex justify-evenly flex-col'>
                        <div>
                            <div>
                                <Image className='mx-auto' src='/assets/gif/sent.gif' alt='sent gif' width={100} height={100} />
                            </div>
                            <div>
                                <h1 className='text-[20px] lg:text-[35px] font-semibold text-white mb-3'>Thank You</h1>
                                <p className='text-[15px] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quis odit accusamus officia molestias hic consequuntur excepturi. Praesentium molestias vero, dignissimos natus, sit minus repudiandae veritatis corrupti maiores aut non.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-[20px] lg:text-[30px] text-white font-semibold mb-3'>Follow Us</h2>
                            <ul className='flex justify-center items-center gap-x-2'>
                                <li className='border-2 border-white px-2 py-1.5 md:p-2 rounded-full hover:bg-[#525252]'>
                                    <Link href='https://www.instagram.com/tutopiapro/'>
                                        <InstagramIcon fontSize='medium' sx={{ color: 'white', fontSize: { xs: '20px', md: '22px' } }} />
                                    </Link>
                                </li>
                                <li className='border-2 border-white px-2 py-1.5 md:p-2 rounded-full hover:bg-[#525252]'>
                                    <Link href='https://www.facebook.com/profile.php?id=61576973384734'>
                                        <FacebookIcon fontSize='medium' sx={{ color: 'white', fontSize: { xs: '20px', md: '22px' } }} />
                                    </Link>
                                </li>
                                <li className='border-2 border-white px-2 py-1.5 md:p-2 rounded-full hover:bg-[#525252]'>
                                    <Link href='https://www.youtube.com/@tutopiapro9154'>
                                        <YouTubeIcon fontSize='medium' sx={{ color: 'white', fontSize: { xs: '20px', md: '22px' } }} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href='/' className='text-sky-600'>GoBack</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Thankyou
