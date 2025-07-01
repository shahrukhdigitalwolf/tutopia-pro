import Image from 'next/image'
import React from 'react'

function IndustryMoniterCards() {
  return (
    <div className="text-center max-w-full w-[250px] mx-auto">
        <Image className="mx-auto" src="/assets/img/faculty/3.png" alt="" width={180} height={180} />
        <div>
            <h5 className="text-[20px] text-white font-medium mt-2">Porro Quisquam</h5>
            <p className='text-white'>Machine Learning Engineer</p>
            <p className='text-white'>BM India</p>
        </div>
    </div>
  )
}

export default IndustryMoniterCards
