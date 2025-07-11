import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LpHeader() {
  return (
    <header className='bg-[#232428] py-2 sticky top-0 w-full z-50'>
        <div className='container mx-auto px-4'>
          <Link href='/'>
            <Image src="/assets/img/tutopia-logo.webp" alt='Tutopia logo' width={100} height={50}/>
          </Link>
        </div>
    </header>
  )
}

export default LpHeader
