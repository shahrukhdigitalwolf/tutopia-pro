import React from 'react'

interface textProps{
    text: string
}

function SubheadingCourse({text}: textProps) {
  return (
    <div>
      <h2 className='text-[20px] lg:text-[30px] font-bold text-white'>{text}</h2>
    </div>
  )
}

export default SubheadingCourse
