import Image from 'next/image'
import React from 'react'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Link from 'next/link';

function SuggestionCourses() {
  return (
    <div>
        {
            [...Array(5)].map((_,i)=>(
                <Link key={i} href='#' className='block'>
                    <div  className="flex flex-wrap bg-[#0e0e0f] p-2 mb-3">
                        <div className="w-full lg:w-[60%]">
                        <div className="flex items-center gap-x-2">
                            <Image className="w-20 h-20 object-cover" src='/assets/img/others/2196488_8fc7_10.webp' alt="" width={100} height={100} />
                            <div>
                            <h4 className="text-white font-bold">Ultimate AWS Certified Solutions Architect Associate 2025</h4>
                            <div className="flex items-center gap-x-1.5 text-white">
                                <span className="bg-[#52dbab] text-black text-[14px] px-2 rounded">Bestseller</span>
                                <span className="text-[11px] xl:text-[14px]">27.5 total hours</span>
                                <span className="text-[11px] xl:text-[14px]">Updated: 07-02-25</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-full lg:w-[40%] flex justify-center flex-col pt-2">
                            <div className="flex items-center gap-x-2 justify-around">
                                <span className="text-[17px] text-end font-bold text-amber-600 flex items-center">4.7 <StarOutlinedIcon sx={{fontSize:'14px'}} className='text-amber-600'/></span>
                                <span className="text-[15px] text-end text-white flex items-center"><PeopleAltOutlinedIcon sx={{fontSize:'16px'}}  className='text-white'/> 1,254,987 </span>
                                <span className="text-[15px] text-end text-white font-bold flex items-center"><CurrencyRupeeOutlinedIcon sx={{fontSize:'16px'}} className='text-white'/>589</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default SuggestionCourses
