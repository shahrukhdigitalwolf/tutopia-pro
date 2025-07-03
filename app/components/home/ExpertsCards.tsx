import Image from 'next/image'
import React from 'react'

function ExpertsCards() {
  return (
    <div className="text-center max-w-full w-[250px] mx-auto relative z-20 pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:bg-white before:w-full before:h-60 before:z-[-1] before:rounded-2xl" data-aos="fade-up">
        <Image className="mx-auto bgImgborder" src="/assets/img/faculty/2.png" alt="" width={200} height={200} />
        <div>
            <h5 className="text-[20px] font-medium mt-2">Porro Quisquam</h5>
            <p>Machine Learning Engineer</p>
            <p>BM India</p>
            <Image className="mx-auto mt-2" src="/assets/icons/microsoft.png" alt="" width={130} height={60} />
        </div>
    </div>
  )
}

export default ExpertsCards
