import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PopupForm from '../PopupForm'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function LpHeader() {
  return (
    <header className='bg-[#232428] py-2 sticky top-0 w-full z-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <Image src="/assets/img/tutopia-logo.webp" alt='Tutopia logo' width={100} height={50}/>
            </Link>
            <div>
                <ul className='flex items-center gap-x-2'>
                  <li className='border-2 border-white px-2 py-1 md:p-1.5 rounded-lg hover:bg-[#525252]'>
                    <Link href='#'>
                      <InstagramIcon fontSize='medium' sx={{color:'white',fontSize:{xs:'20px',md:'24px'}}}/>
                    </Link>
                  </li>
                  <li className='border-2 border-white px-2 py-1 md:p-1.5 rounded-lg hover:bg-[#525252]'>
                    <Link href='#'>
                      <FacebookIcon fontSize='medium' sx={{color:'white',fontSize:{xs:'20px',md:'24px'}}}/>
                    </Link>
                  </li>
                  <li className='border-2 border-white px-2 py-1 md:p-1.5 rounded-lg hover:bg-[#525252]'>
                    <Link href='#'>
                      <YouTubeIcon fontSize='medium' sx={{color:'white',fontSize:{xs:'20px',md:'24px'}}}/>
                    </Link>
                  </li>
                  <li>
                    <PopupForm/>
                  </li>
                </ul>
            </div>
          </div>
        </div>
    </header>
  )
}

export default LpHeader
