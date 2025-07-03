import Image from 'next/image'
import React from 'react'

function LpHeader() {
  return (
    <header className='bg-[#232428] py-2 sticky top-0 w-full z-50'>
        <div className='px-4 lg:px-12'>
            <Image src="/assets/img/tutopia-logo.webp" alt='Tutopia logo' width={100} height={50}/>
        </div>
    </header>
  )
}

export default LpHeader
