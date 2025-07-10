'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function CourseDescription() {

    const [expand, setExpand] = useState(false)

    const handleExpandDiv = () =>{
        if(expand !== true){
            setExpand(true);
        }else{
            setExpand(false);
        }
    }

  return (
    <div className='relative'>
      <div className={`text-white ${expand ? 'max-h-auto' : 'max-h-40 overflow-hidden'} `}>
            <p>This course covers the newest CLF-C02 exam.</p>
            <p>Welcome! I&apos;m here to help you prepare and PASS the newest AWS Certified Cloud Practitioner exam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus laborum quae qui voluptatum blanditiis repellat rerum? At, ullam aliquam nam nemo consectetur vel, perferendis non hic saepe, reiciendis quia?</p>
        </div>
        <div className={`${expand ? 'bottom-0' : 'bg-gradient-to-t from-[#000000] to-[#000000e3] relative bottom-5'}  w-full pt-4`}>
            <Button variant="text" onClick={handleExpandDiv} sx={{textTransform:'capitalize',color:'black', bgcolor:'white', py:'1', px:'20px', lineHeight:'1'}}>
                See More <KeyboardArrowDownIcon className={`${expand ? 'rotate-180' : 'rotate-0'}`}/>
            </Button>
        </div>
    </div>
  )
}

export default CourseDescription
