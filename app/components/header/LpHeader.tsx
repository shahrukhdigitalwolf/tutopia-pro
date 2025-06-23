import Image from 'next/image'
import React from 'react'

function LpHeader() {
  return (
    <header className='bg-[#232428] py-2'>
        <div className='px-4 lg:px-12'>
            <Image src="/assets/img/logo.webp" alt='Tutopia logo' width={50} height={50}/>
        </div>
    </header>
  )
}

export default LpHeader
